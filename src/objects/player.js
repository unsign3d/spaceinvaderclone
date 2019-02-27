import { Sprite, loader } from 'pixi.js'
import keyboard from '../utils/keyboard'
import Projectile from './projectile'

const spriteHeight = 32
const spriteWidth = 32
const padding = 16

export default class Player {
  constructor (app) {
    this.app = app
    this.sprite = null
    this.leftArrow = keyboard("ArrowLeft")
    this.rightArrow = keyboard("ArrowRight")
    this.arrowUp = keyboard("ArrowUp")
    this.projectile = new Projectile(this.app)
  }

  init = () => {
    this.sprite = new Sprite(loader.resources["assets/img/player.png"].texture);
    //Add the cat to the stage
    this.sprite.x = this.app.screen.width / 2 - spriteWidth / 2
    this.sprite.y = this.app.screen.height - spriteHeight - padding
    this.app.stage.addChild(this.sprite);
    this.projectile.init()
    this.sprite.vx = 0
    this.sprite.vy = 0
    this.bindKeys()
  }

  bindKeys = () => {
    this.rightArrow.press = () => {
      this.sprite.vx = 5
    }

    this.rightArrow.release = () => {
      this.sprite.vx = 0
    }

    this.leftArrow.press = () => {
      this.sprite.vx = -5
    }

    this.leftArrow.release = () => {
      this.sprite.vx = 0
    }

    this.arrowUp.press = () => {
      if(this.projectile.drawn) { return }
      this.projectile.drawProjectile(this.sprite.x + 13,this.sprite.y-padding, 5)
    }
  }

  update = () => {
    const tmpX = this.sprite.x + this.sprite.vx
    if (tmpX >= padding && tmpX < (this.app.screen.width - spriteWidth - padding)) {
      this.sprite.x += this.sprite.vx
    }
  }
}