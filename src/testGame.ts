import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"

export class testGame {
    pixi : PIXI.Application
    loader : PIXI.Loader
    // bubbles: Bubble[]=[]
    // bubble : Bubble

    constructor(){
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)
                   
        this.loader.load(() => this.loadCompleted())
        
            }

            loadCompleted() {
                let fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)
                this.pixi.stage.addChild(fish)
                fish.y = 200
                fish.x = 300 
            }
}
             






