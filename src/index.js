import * as PIXI from 'pixi.js'
import Player from './objects/player'
import EnemyManager from './objects/enemyManager'
import StageManager from './objects/stageManager'

const app = new PIXI.Application(512, 600, {backgroundColor : 0x000000});
document.body.appendChild(app.view);

const player = new Player(app)
const enemyManager = new EnemyManager(app, player)

const init = () => {
  player.init()
  enemyManager.init()
  requestAnimationFrame(update)
}

const update = () => {
  player.update()
  enemyManager.moveShips()
  requestAnimationFrame(update)
}

new StageManager(app).init(init)
