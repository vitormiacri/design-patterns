import { Observer } from './observer'
import { Subject } from './subject'

export class WeatherData implements Subject {
  observers: Observer[] = []
  temperature: number
  humidity: number
  pressure: number

  registerObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  removeObserver(observer: Observer): void {
    const observerIndex = this.observers.findIndex(
      (_, index) => observer === this.observers[index]
    )
    if (observerIndex !== undefined) {
      delete this.observers[observerIndex]
    }
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }

  measurementsChanged(): void {
    this.notifyObservers()
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }

  getTemperature() {
    return this.temperature
  }
  getHumidity() {
    return this.humidity
  }
  getPressure() {
    return this.pressure
  }
}
