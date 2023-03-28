export interface WeatherData {
    location: Location
    forecast: Forecast
  }
  
  export interface Location {
    code: string
    name: string
    timezone: string
    coordinates: Coordinates
  }
  
  export interface Coordinates {
    latitude: number
    longitude: number
  }
  
  export interface Forecast {
    items: Item[]
    forecastDate: string
    nextUpdate: string
    source: string
    point: string
    fingerprint: string
  }
  
  export interface Item {
    date: string
    dateWithTimezone: string
    freshSnow?: number
    snowHeight: any
    weather: Weather
    prec: Prec
    sunHours: number
    rainHours: any
    temperature: Temperature
    wind: Wind
    windchill: Windchill
    snowLine: SnowLine
    astronomy: Astronomy
  }
  
  export interface Weather {
    state: number
    text: string
    icon: string
  }
  
  export interface Prec {
    sum: number
    probability: number
    sumAsRain: any
    class: number
  }
  
  export interface Temperature {
    min: number
    max: number
    avg: any
  }
  
  export interface Wind {
    unit: string
    direction: string
    text: string
    avg: any
    min: number
    max: number
    gusts: Gusts
    significationWind: boolean
  }
  
  export interface Gusts {
    value: any
    text: any
  }
  
  export interface Windchill {
    min: number
    max: number
    avg: any
  }
  
  export interface SnowLine {
    avg: any
    min: any
    max: any
    unit: string
  }
  
  export interface Astronomy {
    dawn: string
    sunrise: string
    suntransit: string
    sunset: string
    dusk: string
    moonrise: string
    moontransit?: string
    moonset?: string
    moonphase: number
    moonzodiac: number
  }
  