import { Beverage } from './beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Mocha extends CondimentDecorator {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Moca'
  }

  public cost(): number {
    return 0.2 + this.beverage.cost()
  }
}
