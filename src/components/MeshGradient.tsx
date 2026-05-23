"use client";

/**
 * MeshGradient — lightweight WebGL organic mesh gradient.
 * Stripe-style slow movement. Pauses when off-screen via IntersectionObserver.
 * Colors: #F05A28 (60%) • #0A0F1C (30%) • #FF6B35 (10%)
 * Fallback: CSS radial-gradient via parent (this component renders null on error).
 */
import { useEffect, useRef } from "react";

const VERT_SRC = `#version 300 es
in vec2 a;
out vec2 v;
void main(){ v = a * 0.5 + 0.5; gl_Position = vec4(a, 0.0, 1.0); }`;

const FRAG_SRC = `#version 300 es
precision highp float;
in vec2 v;
out vec4 o;
uniform float t;
uniform vec2 r;

// 2D simplex-ish cheap noise via sin hash
float n(vec2 p){
  return sin(p.x*1.7 + sin(p.y*2.3 + t*0.15)) *
         cos(p.y*1.3 + cos(p.x*1.9 - t*0.12));
}

void main(){
  vec2 uv = v;
  float a = uv.x * 1.2 + 0.6*n(uv*1.5 + vec2(t*0.03, -t*0.02));
  float b = uv.y * 1.1 + 0.5*n(uv*2.0 + vec2(-t*0.025, t*0.018));
  float m1 = smoothstep(0.15, 0.95, 0.5 + 0.5*n(vec2(a, b)));
  float m2 = smoothstep(0.35, 1.00, 0.5 + 0.5*n(vec2(b*1.3 - 0.4, a*1.1 + 0.2)));
  float orange = smoothstep(0.78, 1.0, 0.5 + 0.5*n(vec2(a*0.9 + 1.7, b*0.8 - 1.3 + t*0.01)));

  vec3 dark   = vec3(0.039, 0.059, 0.110); // #0A0F1C
  vec3 blue   = vec3(0.000, 0.322, 0.800); // #F05A28
  vec3 orangeC= vec3(1.000, 0.420, 0.208); // #FF6B35

  vec3 col = mix(dark, blue, m1 * 0.85);
  col = mix(col, blue * 1.05, m2 * 0.35);
  col = mix(col, orangeC, orange * 0.55);

  // soft vignette
  float d = distance(uv, vec2(0.5));
  col *= smoothstep(1.05, 0.25, d);

  o = vec4(col, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export default function MeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const gl = canvas.getContext("webgl2", {
      antialias: false,
      alpha: false,
      premultipliedAlpha: false,
      powerPreference: "low-power",
    }) as WebGL2RenderingContext | null;
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT_SRC);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uT = gl.getUniformLocation(prog, "t");
    const uR = gl.getUniformLocation(prog, "r");

    let raf = 0;
    let running = true;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = Math.floor(canvas.clientWidth * DPR);
      const h = Math.floor(canvas.clientHeight * DPR);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        gl.uniform2f(uR, w, h);
      }
    };
    resize();

    const start = performance.now();
    const render = (now: number) => {
      if (!running) return;
      resize();
      const t = (now - start) / 1000;
      gl.uniform1f(uT, t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(render);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !prefersReduced) {
            if (!running) {
              running = true;
              raf = requestAnimationFrame(render);
            }
          } else {
            running = false;
            cancelAnimationFrame(raf);
          }
        }
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    if (prefersReduced) {
      // single frame, no loop
      resize();
      gl.uniform1f(uT, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else {
      raf = requestAnimationFrame(render);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{
        zIndex: 0,
        opacity: 0.5,
        // CSS fallback if WebGL fails — same palette
        background:
          "radial-gradient(60% 50% at 30% 35%, #F05A28 0%, transparent 60%), radial-gradient(45% 40% at 75% 70%, rgba(255,107,53,0.35) 0%, transparent 55%), #0A0F1C",
      }}
    />
  );
}
