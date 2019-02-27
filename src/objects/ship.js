import { Sprite, loader } from 'pixi.js'

export const shipColors = ['green', 'blue', 'purple', 'red']

export default class Ship {
  constructor (app) {
    this.app = app
  }

  init = (x, y, color) => {
    this.sprite = new Sprite(loader.resources[`assets/img/${shipColors[color]}_ship.png`].texture)
    this.sprite.x = x
    this.sprite.y = y
    this.app.stage.addChild(this.sprite)
  }

  update = () => {

  }

  move = (vx, vy) => {
    this.sprite.vx = vx
    this.sprite.vy = vy
    const tmpX = this.sprite.x + this.sprite.vx    
    this.sprite.x += this.sprite.vx
    return this.sprite.x
  }

}

