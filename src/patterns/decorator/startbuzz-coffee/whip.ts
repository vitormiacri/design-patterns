import { Beverage } from './beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Whip extends CondimentDecorator {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', Creme'
  }

  public cost(): number {
    return 0.1 + this.beverage.cost()
  }
}
