import { loader, Sprite } from 'pixi.js'

export default class StageManager {
  constructor(app) {
    this.app = app;
    this.images = [
      "assets/img/blue_ship.png",
      "assets/img/green_ship.png",
      "assets/img/purple_ship.png",
      "assets/img/red_ship.png",
      "assets/img/player.png",
      "assets/img/bg_1_1.png",
    ]
  }

  init = (cb) => {
    loader
    .add(this.images)
    .load(() => {
      this.stageInit()
      cb()
    })
  }

  stageInit = () => {
    const background = new Sprite(loader.resources[`assets/img/bg_1_1.png`].texture)
    this.app.stage.addChild(background)
  }
}