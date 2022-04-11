import { Duck } from './duck'
import { FlyWithWings } from './fly-behavior'
import { Quack } from './quack-behavior'

export class MallardDuck extends Duck {
  constructor() {
    super()
    this.quackBehavior = new Quack()
    this.flyBehavior = new FlyWithWings()
  }

  public display(): void {
    console.log("I'm a real Mallard duck")
  }
}
