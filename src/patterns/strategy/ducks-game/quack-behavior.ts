export interface QuackBehavior {
  quack(): void
}

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack!')
  }
}

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeak!')
  }
}
