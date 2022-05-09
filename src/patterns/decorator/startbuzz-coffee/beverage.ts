export abstract class Beverage {
  description = 'Unknow Beverage'

  public getDescription(): string {
    return this.description
  }

  public abstract cost(): number
}
