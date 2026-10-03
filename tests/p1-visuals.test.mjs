import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import sharp from 'sharp';
const shop=readFileSync(new URL('../src/components/v2/ShopifyAiAgentsSections.tsx',import.meta.url),'utf8');
const medical=readFileSync(new URL('../src/app/services/medical-website-design/page.tsx',import.meta.url),'utf8');
test('P1 service visuals are responsive, explicitly sized, and uniquely owned',async()=>{
 for(const name of ['shopify-agent-review','shopify-fulfillment','medical-patient-journey']){
   const source=name.startsWith('shopify')?shop:medical;
   for(const width of [640,1280,1920]){
     assert.ok(source.includes(`${name}-${width}.webp`));
     const image=await sharp(new URL(`../public/images/us/visual-pass-2026-10-03/${name}-${width}.webp`,import.meta.url).pathname).metadata();
     assert.equal(image.width,width);
     assert.ok(Math.abs(image.width/image.height-1.5)<0.003);
   }
 }
 assert.ok(!shop.includes('woocommerce-to-shopify-people-laptop-orders.webp'));
 assert.ok(!shop.includes('b2b-ecommerce-people-warehouse-team.webp'));
 assert.ok(!medical.includes('healthcare-seo-eeat.webp'));
 assert.ok(medical.includes('width={1536}')&&medical.includes('height={1024}'));
});
test('medical comparison keyboard region is opt-in and does not change other pages',()=>{
 const comparison=readFileSync(new URL('../src/components/v2/ComparisonTable.tsx',import.meta.url),'utf8');
 assert.match(comparison,/scrollRegionLabel\?: string/);
 assert.match(comparison,/tabIndex=\{scrollRegionLabel \? 0 : undefined\}/);
 assert.match(comparison,/role=\{scrollRegionLabel \? 'region' : undefined\}/);
 assert.match(medical,/scrollRegionLabel="Medical website partner comparison"/);
});
