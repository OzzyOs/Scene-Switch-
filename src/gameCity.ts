import * as PIXI from 'pixi.js'
import cityImage from "./images/frame1.png"
import { city } from "./city"


export class panelOne {
    pixi : PIXI.Application
    loader : PIXI.Loader

    constructor(){
        this.pixi = new PIXI.Application({ width: 500, height: 500 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('cityTexture', cityImage)
        this.loader.load(() => this.loadCompleted())
        
            }
            

            loadCompleted() {
                let e = new city(this.loader.resources["cityTexture"].texture!)
                this.pixi.stage.addChild(e)
                
            }

    }


