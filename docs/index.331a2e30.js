function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=r.parcelRequirea0e5;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequirea0e5=n),n.register("27Lyk",(function(t,r){var o,i;e(t.exports,"register",(()=>o),(e=>o=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var n={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),n("27Lyk").register(JSON.parse('{"34IQC":"index.331a2e30.js","areXz":"zuid_holland.cd49b068.png","iBkg5":"noord_holland.870bac41.png","4chXO":"utrecht.aa40e0bb.png","4W20v":"nederland.9f47723f.png","enW3q":"North-Holland.9408a57b.js"}'));var s,d=n("31xg4");s=new URL(n("27Lyk").resolve("areXz"),import.meta.url).toString();var l;l=new URL(n("27Lyk").resolve("iBkg5"),import.meta.url).toString();var a;a=new URL(n("27Lyk").resolve("4chXO"),import.meta.url).toString();var h;h=new URL(n("27Lyk").resolve("4W20v"),import.meta.url).toString();d=n("31xg4");class c extends d.Sprite{constructor(e){super(e),this.anchor.set(.25),this.scale.set(1),this.x=310,this.y=400,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){window.location.href="North-Holland.html"}}d=n("31xg4");class u extends d.Sprite{constructor(e){super(e),this.x=340,this.y=150,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){window.location.href="North-Holland.html"}}d=n("31xg4");class p extends d.Sprite{constructor(e){super(e),this.x=385,this.y=367,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){window.location.href="North-Holland.html"}}d=n("31xg4");class x extends d.Sprite{constructor(e){super(e),this.anchor.set(.5),this.x=450,this.y=425,this.alpha=.7}}new class{constructor(){this.pixi=new d.Application({width:1e3,height:800}),document.body.appendChild(this.pixi.view),this.loader=new d.Loader,this.loader.add("zuidhollandTexture",t(s)).add("noordhollandTexture",t(l)).add("utrechtTexture",t(a)).add("nederlandTexture",t(h)),this.loader.load((()=>this.loadCompleted()))}loadCompleted(){let e=new c(this.loader.resources.zuidhollandTexture.texture),t=new u(this.loader.resources.noordhollandTexture.texture),r=new p(this.loader.resources.utrechtTexture.texture),o=new x(this.loader.resources.nederlandTexture.texture);this.pixi.stage.addChild(o),this.pixi.stage.addChild(e),this.pixi.stage.addChild(t),this.pixi.stage.addChild(r)}};
//# sourceMappingURL=index.331a2e30.js.map
