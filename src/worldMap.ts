import * as PIXI from 'pixi.js'
import { destroyTextureCache } from '@pixi/utils'
import fishImage from "./images/fish.png"
import zuidhollandImage from "./images/zuid_holland.png"
import noordhollandImage from './images/noord_holland.png'
import utrechtImage from './images/utrecht.png'
import nederlandImage from './images/nederland.png'
import { Sprite } from 'pixi.js'
import { testGame } from './testGame'
import { zuidHolland } from './zuidHolland'
import { noordHolland } from './noordHolland'
import { utrecht } from './utrecht'
import { nederland } from './nederland'


export class Map {
    pixi : PIXI.Application
    loader : PIXI.Loader
    // bubbles: Bubble[]=[]
    // bubble : Bubble

    constructor(){
        this.pixi = new PIXI.Application({ width: 1000, height: 800 })
        document.body.appendChild(this.pixi.view)

        this.loader = new PIXI.Loader()
        this.loader.add('zuidhollandTexture', zuidhollandImage)
                   .add('noordhollandTexture', noordhollandImage) 
                   .add('utrechtTexture', utrechtImage)
                   .add('nederlandTexture', nederlandImage)
        this.loader.load(() => this.loadCompleted())
        
            }
            

            loadCompleted() {
                let zuid = new zuidHolland(this.loader.resources['zuidhollandTexture'].texture!)
                let noord = new noordHolland(this.loader.resources['noordhollandTexture'].texture!)
                let ut = new utrecht(this.loader.resources['utrechtTexture'].texture!)
                let nl = new nederland(this.loader.resources['nederlandTexture'].texture!)

                this.pixi.stage.addChild(nl)
                this.pixi.stage.addChild(zuid)
                this.pixi.stage.addChild(noord)
                this.pixi.stage.addChild(ut)
                
            
                
                //  this.pixi.stage.addChild(bubble)
                // fish.scale.set(1)
                // fish.y = 100
                


                //For loop voor meerdere bubbles. Dit maakt tot 40 bubbles.

                // for(let i = 0; i < 40; i++){
                //     let amount = new Bubble (this.loader.resources["bubbleTexture"].texture!)
                //     this.pixi.stage.addChild(amount)
                //     this.bubbles.push(amount)
                // }
                
            }

    }
            
           
            
    

             


// let g = new Game()



