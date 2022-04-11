import { QuackBehavior } from './quack-behavior'

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<< Silence >>!')
  }
}
