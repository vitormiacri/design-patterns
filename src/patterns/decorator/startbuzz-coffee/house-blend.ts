import { Beverage } from './beverage'

export class HouseBlend extends Beverage {
  constructor() {
    super()
    this.description = 'Mistura da Casa'
  }
  public cost(): number {
    return 0.89
  }
}
