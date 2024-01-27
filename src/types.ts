export interface Location {
  localtime: string
  country: string
  name: string
}

export interface Condition {
  code: number
  icon: string
  text: string
}

export interface ForecastDay {
  date: string
  day: {
    avgtemp_c: number
    condition: Condition
  }
}

export interface Forecast {
  forecastday: ForecastDay[]
}

export interface Current {
  condition: Condition
  temp_c: number
  temp_f: number
  wind_kph: number
  wind_mph: number
  humidity: number
  is_day: boolean
  cloud: number
}

export interface WeatherData {
  current: Current
  location: Location
  forecast: Forecast
}
