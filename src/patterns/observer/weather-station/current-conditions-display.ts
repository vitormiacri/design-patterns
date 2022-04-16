import { DisplayElement } from './display-element'
import { Observer } from './observer'
import { Subject } from './subject'
import { WeatherData } from './weather-data'

export class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number
  private humidity: number
  private pressure: number
  private subject: Subject

  constructor(subject: Subject) {
    this.subject = subject
    this.subject.registerObserver(this)
  }

  update(observable: Subject): void {
    if (observable instanceof WeatherData) {
      this.temperature = observable.getTemperature()
      this.humidity = observable.getHumidity()
      this.pressure = observable.getPressure()
      this.display()
    }
  }

  display(): void {
    console.log(
      `Current conditions: ${this.temperature} C degrees, ${this.humidity} humidity and ${this.pressure} pressure`
    )
  }
}
