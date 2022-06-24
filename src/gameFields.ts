import * as PIXI from 'pixi.js'
import fieldsImage from "./images/frame2.png"
import { fields } from './fields' 


export class panelTwo {
    pixi : PIXI.Application
    loader : PIXI.Loader

    constructor(){
        this.pixi = new PIXI.Application({ width: 800, height: 450 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('fieldsTexture', fieldsImage)
                   
        this.loader.load(() => this.loadCompleted())
        
        
            }

            loadCompleted() {
                let i = new fields(this.loader.resources["fieldsTexture"].texture!)
                this.pixi.stage.addChild(i)
            }
            
}

new panelTwo()




