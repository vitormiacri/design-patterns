import { FlyBehavior } from './fly-behavior'
import { QuackBehavior } from './quack-behavior'

export abstract class Duck {
  flyBehavior: FlyBehavior
  quackBehavior: QuackBehavior

  public abstract display(): void

  public performFly(): void {
    this.flyBehavior.fly()
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior
  }

  public performQuack(): void {
    this.quackBehavior.quack()
  }

  public setQuackBehavior(quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior
  }

  public swim(): void {
    console.log('All ducks float, even decoys')
  }
}
