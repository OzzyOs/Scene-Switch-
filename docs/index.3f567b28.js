function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=t.parcelRequirea0e5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},t.parcelRequirea0e5=o),o("27Lyk").register(JSON.parse('{"34IQC":"index.3f567b28.js","cptVI":"fish.3e16f247.png","areXz":"zuid_holland.cd49b068.png","iBkg5":"noord_holland.870bac41.png","4chXO":"utrecht.aa40e0bb.png","4W20v":"nederland.9f47723f.png","2TFun":"North-Holland.65578c4e.js"}'));var n,s=o("31xg4");n=new URL(o("27Lyk").resolve("cptVI"),import.meta.url).toString();var d;d=new URL(o("27Lyk").resolve("areXz"),import.meta.url).toString();var a;a=new URL(o("27Lyk").resolve("iBkg5"),import.meta.url).toString();var l;l=new URL(o("27Lyk").resolve("4chXO"),import.meta.url).toString();var h;h=new URL(o("27Lyk").resolve("4W20v"),import.meta.url).toString();s=o("31xg4");class c extends s.Sprite{constructor(e){super(e),this.anchor.set(.25),this.scale.set(1),this.x=310,this.y=400,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){window.location.href="North-Holland.html"}}s=o("31xg4");class u extends s.Sprite{constructor(e){super(e),this.x=340,this.y=150,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){window.location.href="North-Holland.html"}}s=o("31xg4");var p=o("iTRCk");class x extends s.Sprite{constructor(e){super(e),this.x=385,this.y=367,this.interactive=!0,this.buttonMode=!0,this.on("pointerdown",this.onclick)}onclick(){this.destroy(),new p.testGame}}s=o("31xg4");class g extends s.Sprite{constructor(e){super(e),this.anchor.set(.5),this.x=450,this.y=425,this.alpha=.7}}new class{constructor(){this.pixi=new s.Application({width:1e3,height:800}),document.body.appendChild(this.pixi.view),this.loader=new s.Loader,this.loader.add("fishTexture",e(n)).add("zuidhollandTexture",e(d)).add("noordhollandTexture",e(a)).add("utrechtTexture",e(l)).add("nederlandTexture",e(h)),this.loader.load((()=>this.loadCompleted()))}loadCompleted(){let e=new c(this.loader.resources.zuidhollandTexture.texture),t=new u(this.loader.resources.noordhollandTexture.texture),r=new x(this.loader.resources.utrechtTexture.texture),i=new g(this.loader.resources.nederlandTexture.texture);this.pixi.stage.addChild(i),this.pixi.stage.addChild(e),this.pixi.stage.addChild(t),this.pixi.stage.addChild(r)}};
//# sourceMappingURL=index.3f567b28.js.map