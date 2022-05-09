import { Beverage } from './beverage'
import { CondimentDecorator } from './condiment-decorator'

export class Soy extends CondimentDecorator {
  beverage: Beverage
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
  }
  public getDescription(): string {
    return this.beverage.getDescription() + ', Soja'
  }

  public cost(): number {
    return 0.15 + this.beverage.cost()
  }
}
