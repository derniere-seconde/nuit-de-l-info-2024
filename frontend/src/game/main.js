import Phaser from "phaser";
import background from "../assets/background.jpeg";
import straw from "../assets/straw.png";
import turtleRight from "../assets/turtle-right.png";
import turtleLeft from "../assets/turtle-left.png";
import turtleUp from "../assets/turtle-up.png";
import turtleDown from "../assets/turtle-down.png";
import { EventBus } from "./EventBus";

let score = 0;

class TurtleScene extends Phaser.Scene {
  constructor() {
    super({
      key: "TurtleScene",
    });
  }
  preload() {
    this.load.image("food", straw);
    this.load.image("turtleRight", turtleRight);
    this.load.image("turtleLeft", turtleLeft);
    this.load.image("turtleUp", turtleUp);
    this.load.image("turtleDown", turtleDown);
    this.load.image("background", background);
  }

  create() {
    let bg = this.add.image(0, 0, "background");
    bg.displayWidth = this.sys.canvas.width;
    bg.displayHeight = this.sys.canvas.height;
    bg.setOrigin(0, 0);
    this.turtle = new Turtle(this);
    this.food = new Food(this, 350, 250);
    this.physics.world.enable(this.food);
    this.physics.world.enable(this.turtle.body[0]);
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update(time) {
    if (!this.turtle.alive) return;
    let directions = {
      left: Phaser.Math.Vector2.LEFT,
      right: Phaser.Math.Vector2.RIGHT,
      up: Phaser.Math.Vector2.UP,
      down: Phaser.Math.Vector2.DOWN,
    };
    let animations = {
      left: "moveLeft",
      right: "moveRight",
      up: "moveUp",
      down: "moveDown",
    };

    for (let [direction, vector] of Object.entries(directions)) {
      if (this.cursors[direction].isDown) {
        this.turtle.faceDirection(vector, animations[direction]);
      }
    }
    if (this.turtle.update(time)) {
      if (this.physics.overlap(this.turtle.body[0], this.food)) {
        this.food.reposition();
        this.turtle.grow();
      }
    }
  }
}
let turtleHead;
class Turtle {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.positions = [];
    this.directions = [];
    this.gameStarted = false;
    this.keyLock = false;
    this.moveEvents = [];
    this.bodyParts = [];
    this.body.push(this.scene.physics.add.sprite(50, 250, "turtleRight"));
    turtleHead = this.body[0];
    turtleHead.setCollideWorldBounds(true);
    turtleHead.body.onWorldBounds = true;
    turtleHead.body.world.on("worldbounds", this.endGame, this);
    this.bodyPartLength = turtleHead.displayWidth;
    this.direction = Phaser.Math.Vector2.RIGHT;
    this.directions.unshift(this.direction.clone());
    this.moveTime = 0;
    this.speed = 150;
    this.alive = true;
    scene.anims.create({
      key: "moveUp",
      frames: [{ key: "turtleUp" }],
    });
    scene.anims.create({
      key: "moveDown",
      frames: [{ key: "turtleDown" }],
    });
    scene.anims.create({
      key: "moveLeft",
      frames: [{ key: "turtleLeft" }],
    });
    scene.anims.create({
      key: "moveRight",
      frames: [{ key: "turtleRight" }],
    });
  }

  faceDirection(vector, animation) {
    this.gameStarted = true;
    let oppositeVector = new Phaser.Math.Vector2(-vector.x, -vector.y);
    if (!this.keyLock && !this.direction.equals(oppositeVector)) {
      this.moveEvents.push(vector);
      this.keyLock = true;
      turtleHead.anims.play(animation, true);
    }
  }
  update(time) {
    if (time >= this.moveTime && this.gameStarted) {
      this.keyLock = false;
      if (this.moveEvents.length > 0) {
        this.direction = this.moveEvents.shift();
      }
      this.move();
      return true;
    }
    return false;
  }

  move() {
    let oldHeadPosition = { x: turtleHead.x, y: turtleHead.y };
    this.directions.unshift(this.direction.clone());
    turtleHead.x += this.direction.x * this.bodyPartLength;
    turtleHead.y += this.direction.y * this.bodyPartLength;

    if (
      turtleHead.x > this.scene.game.config.width ||
      turtleHead.x < 0 ||
      turtleHead.y > this.scene.game.config.height ||
      turtleHead.y < 0
    )
      return;

    for (let i = 1; i < this.body.length; i++) {
      let oldBodyPosition = { x: this.body[i].x, y: this.body[i].y };
      this.body[i].x = oldHeadPosition.x;
      this.body[i].y = oldHeadPosition.y;
      oldHeadPosition = oldBodyPosition;
      this.setBodyPartTexture(i);
    }
    if (this.positions.length > this.body.length * this.bodyPartLength) {
      this.positions.pop();
      this.directions.pop();
    }
    this.moveTime = this.scene.time.now + this.speed;
  }
  setBodyPartTexture(i) {
    let prevDirection = this.directions[i - 1];
    let textureMap = {
      "0,-1": "turtleUp",
      "0,1": "turtleDown",
      "-1,0": "turtleLeft",
      "1,0": "turtleRight",
    };
    let directionKey = `${prevDirection.x},${prevDirection.y}`;
    this.body[i].setTexture(textureMap[directionKey]);
  }
  grow() {
    score += 1;
    let newPart = this.scene.physics.add.sprite(
      -1 * this.bodyPartLength,
      -1 * this.bodyPartLength,
      "turtleRight",
    );
    this.scene.physics.add.collider(
      turtleHead,
      newPart,
      this.endGame,
      null,
      this.scene.turtle,
    );
    this.bodyParts.push(newPart);
    this.body.push(newPart);
  }
  endGame() {
    this.alive = false;
    this.bodyParts.forEach((newPart) => {
      newPart.body.enable = false;
    });
    if (score >= 1) {
      EventBus.emit("gameOver", score);
    } else {
      this.resetGame();
    }
  }
  resetGame = () => {
    this.scene.create();
    this.gameStarted = true;
  };
}

class Food extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    super(scene, x, y, "food");
    this.scene.add.existing(this);
  }
  reposition() {
    let bodyPartLength = this.scene.turtle.bodyPartLength;
    let x = Phaser.Math.Between(
      0,
      this.scene.game.config.width / bodyPartLength - 1,
    );
    let y = Phaser.Math.Between(
      0,
      this.scene.game.config.height / bodyPartLength - 1,
    );
    x = bodyPartLength * x + 0.5 * bodyPartLength;
    y = bodyPartLength * y + 0.5 * bodyPartLength;
    let bodyParts = this.scene.turtle.body;
    this.setPosition(x, y);
    for (let i = 1; i < bodyParts.length; i++) {
      let spriteBounds = bodyParts[i].getBounds();
      if (spriteBounds.contains(x, y)) {
        this.reposition();
      }
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "game-container",
  width: 600,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [TurtleScene],
};

export default config;
