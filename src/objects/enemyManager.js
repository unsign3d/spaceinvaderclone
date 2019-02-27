import { default as Ship, shipColors } from './ship'
import DetectCollision from '../utils/detectCollision'

const COLS = 5
const ROWS = 8
const padding = 16


export default class EnemyManager {
  
  constructor(app, player) {
    this.app = app
    this.ships = []
    this.player = player
    this.speed = 0.5
  }

  init = () => {
    this.createShips()
    this.moveShips()
  }

  createShips = () => {
    let ship = null
    for (let i = 0; i < COLS; i++) {
      for (let j = 0; j < ROWS; j++) {
          ship = new Ship(this.app)
          ship.init( i * 64 + padding, j * 34 + padding, Math.floor(Math.random() * shipColors.length - 0))
          this.ships.push(ship)
      }
    }
  }

  moveShips = () => {
    this.ships.forEach((ship, i) => {
      const position = ship.move(this.speed, 0)
      if (position == padding || (position + ship.sprite.width) >= (this.app.screen.width - padding)) {
        this.speed = this.speed * -1
      }
      if (DetectCollision(ship.sprite, this.player.projectile.sprite)) {
        this.player.projectile.resetSprite()
        this.app.stage.removeChild(ship.sprite)
        delete this.ships[i]
      }
    });
  }
}

