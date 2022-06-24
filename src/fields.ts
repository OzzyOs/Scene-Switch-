import * as PIXI from 'pixi.js'

export class fields extends PIXI.Sprite{
    constructor(texture: PIXI.Texture) {
        super(texture)

        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', this.onclick)
    }
    onclick(){
            window.location.href = 'city.html' 
        }
}
