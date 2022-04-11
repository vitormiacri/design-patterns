import { Duck } from './duck'
import { FlyNoWay } from './fly-behavior'
import { Quack } from './quack-behavior'

export class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay()
    this.quackBehavior = new Quack()
  }

  public display(): void {
    console.log("I'm a model duck")
  }
}
