import { Graphics, Sprite, loader } from 'pixi.js'

export default class Projectile { 
  constructor(app) {
    this.app = app
    this.graphics = new Graphics()
    this.drawn = false
    this.tempVy = 0
  }
  
  resetSprite = () => {
    if(this.drawn) {
      this.app.stage.removeChild(this.sprite)
    }
    this.sprite = new Sprite(loader.resources["assets/img/projectile.png"].texture);
    this.drawn = false
    this.sprite.vy = this.tempVy
  }
  
  init = () => {
    this.resetSprite()
  }

  drawProjectile = (x,y, vy) => {
    this.tempVy = vy
    this.sprite.x = x
    this.sprite.y = y
    this.sprite.vy = vy
    this.app.stage.addChild(this.sprite)
    this.drawn = true
    requestAnimationFrame(this.animate)

  }

  animate = () => {
    const tmpY = this.sprite.y + this.sprite.vy
    if (tmpY <= 16) {
      this.resetSprite()
      return
    }

    this.sprite.y -= this.sprite.vy
    requestAnimationFrame(this.animate)
  }
}