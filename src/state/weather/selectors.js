import { toCelsius, toFahrenheit } from '@utils/tempScales'

const _default = {}

export const isFetching = state =>
  state.weather.isFetching

export const isFetched = state =>
  state.weather.isFetched

export const scale = state =>
  state.weather.scale

export const fetchError = state =>
  state.weather.fetchError

export const cities = state =>
  state.weather.citiesData.cities

export const lastCitiesFetchId = state =>
  state.weather.citiesData.lastFetchId

export const data = state =>
  state.weather.weatherData || _default

export const userCoords = state =>
  state.weather.userCoords

export const weather = state =>
  data(state).weather

export const name = state =>
  data(state).name

export const countryCode = state =>
  data(state)['sys.country']

export const longitude = state =>
  data(state)['coord.lon']

export const latitude = state =>
  data(state)['coord.lat']

export const temperature = state =>
  data(state)['main.temp']

export const convertedTemperature = (state) =>
  (scale(state) === 'C')
    ? toCelsius(temperature(state))
    : (scale(state) === 'F')
    ? toFahrenheit(temperature(state))
    : temperature(state)

export const pressure = state =>
  data(state)['main.pressure']

export const humidity = state =>
  data(state)['main.humidity']

export const clouds = state =>
  data(state)['clouds.all']

export const windSpeed = state =>
  data(state)['wind.speed']

export const windDirection = state =>
  data(state)['wind.deg'] || ''