import { Beverage } from './beverage'

export class DarkRoast extends Beverage {
  constructor() {
    super()
    this.description = 'Café Preto'
  }

  public cost(): number {
    return 0.99
  }
}
