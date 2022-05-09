import { CurrentConditionsDisplay } from './current-conditions-display'
import { WeatherData } from './weather-data'

export default class WeatherStation {
  static main() {
    const weatherData = new WeatherData()
    const currentDisplay = new CurrentConditionsDisplay(weatherData)
    weatherData.setMeasurements(80, 43, 30.2)
    weatherData.setMeasurements(50, 63, 41.2)
    weatherData.setMeasurements(10, 23, 21.2)
    weatherData.removeObserver(currentDisplay)
  }
}
