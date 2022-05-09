import { Beverage } from './beverage'

export class Decaf extends Beverage {
  constructor() {
    super()
    this.description = 'Descafeinado'
  }

  public cost(): number {
    return 1.05
  }
}
