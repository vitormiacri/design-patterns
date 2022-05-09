import { Beverage } from './beverage'
import { DarkRoast } from './dark-roast'
import { Expresso } from './expresso'
import { HouseBlend } from './house-blend'
import { Mocha } from './mocha'
import { Soy } from './soy'
import { Whip } from './whip'

export default class StarbuzzCoffee {
  public static main() {
    console.log('Seu pedido na Starbuzz Coffee:')
    console.log('------------------------------')
    const expressoBeverage: Beverage = new Expresso()
    console.log(
      expressoBeverage.getDescription() + ' R$' + expressoBeverage.cost()
    )

    let darkRostBeverage: Beverage = new DarkRoast()
    darkRostBeverage = new Mocha(darkRostBeverage)
    darkRostBeverage = new Mocha(darkRostBeverage)
    darkRostBeverage = new Whip(darkRostBeverage)
    console.log(
      darkRostBeverage.getDescription() + ' R$' + darkRostBeverage.cost()
    )

    let houseBlendBeverage: Beverage = new HouseBlend()
    houseBlendBeverage = new Soy(houseBlendBeverage)
    houseBlendBeverage = new Mocha(houseBlendBeverage)
    houseBlendBeverage = new Whip(houseBlendBeverage)
    console.log(
      houseBlendBeverage.getDescription() + ' R$' + houseBlendBeverage.cost()
    )
  }
}
