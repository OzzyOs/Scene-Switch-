import * as PIXI from 'pixi.js'

export class city extends PIXI.Sprite{
    constructor(texture: PIXI.Texture) {
        super(texture)
        
        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', this.onClick)
    }
    onClick(){
            window.location.href = 'fields.html' 
        }
}
