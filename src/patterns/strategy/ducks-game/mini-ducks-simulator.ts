import { Duck } from './duck'
import { FlyRocketPowered } from './fly-behavior'
import { MallardDuck } from './mallard-duck'
import { ModelDuck } from './model-duck'

export default class MiniDuckSimulator {
  public static main(): void {
    const mallard: Duck = new MallardDuck()
    mallard.performQuack()
    mallard.performFly()

    const model: Duck = new ModelDuck()
    model.performFly()
    model.setFlyBehavior(new FlyRocketPowered())
    model.performFly()
  }
}
