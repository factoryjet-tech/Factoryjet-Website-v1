import test from 'node:test';
import assert from 'node:assert/strict';
import {tsImport} from 'tsx/esm/api';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
globalThis.React=React;
const {default:VisualSlot}=await tsImport('../src/app/au/components/VisualSlot.tsx',import.meta.url);
const props={page:'ecommerce-seo',slot:'facts',kind:'photo',ratio:'3:2',subject:'Catalogue planning'};
const render=extra=>renderToStaticMarkup(React.createElement(VisualSlot,{...props,...extra}));
test('AU visual source defaults keep existing generated artwork and captions',()=>{
 const html=render({caption:'Original caption'});
 assert.match(html,/src="\/images\/au\/generated\/ecommerce-seo\/facts.webp"/);
 assert.match(html,/width="1536" height="1024" loading="lazy"/);
 assert.match(html,/Original caption/);assert.doesNotMatch(html,/srcSet=/);
});
test('reviewed artwork selects responsive sources without overriding adjacent copy',()=>{
 const html=render({src:'/reviewed.webp',srcSet:'/small.webp 640w, /reviewed.webp 1280w',sizes:'(max-width:820px) 100vw, 560px',imageAlt:'AI-generated catalogue composition',caption:'Original caption'});
 assert.match(html,/src="\/reviewed.webp"/);assert.match(html,/srcSet="\/small.webp 640w, \/reviewed.webp 1280w"/);
 assert.match(html,/sizes="\(max-width:820px\) 100vw, 560px"/);assert.match(html,/AI-generated catalogue composition/);
 assert.doesNotMatch(html,/generated\/ecommerce-seo/);assert.match(html,/Original caption/);
});
test('null source renders page-owned native diagrams and retains slot semantics',()=>{
 const html=render({src:null,children:React.createElement('svg',{'aria-hidden':true})});
 assert.match(html,/data-visual-status="filled"/);assert.match(html,/<svg aria-hidden="true">/);assert.doesNotMatch(html,/<img/);
});
test('empty slots remain hidden; hero artwork alone receives eager priority',()=>{
 const empty=render({page:'unknown-route',slot:'unfilled'});assert.match(empty,/data-visual-status="placeholder" aria-hidden="true"/);
 const hero=render({slot:'hero',src:'/hero.webp'});assert.match(hero,/loading="eager" fetchPriority="high"/);
 assert.doesNotMatch(render({src:'/body.webp'}),/fetchPriority="high"/);
});
