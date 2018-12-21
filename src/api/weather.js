import queryString from 'query-string'
import * as keys from 'keys'

const WEATHER_URI = 'https://api.openweathermap.org/data/2.5/weather'

const createStringQuery = query =>
  `${WEATHER_URI}/?${queryString.stringify({q: query, appid: keys.openweathermap})}`

const createIdQuery = query =>
  `${WEATHER_URI}/?${queryString.stringify({id: query, appid: keys.openweathermap})}`

const createCoordsQuery = (query) =>
  `${WEATHER_URI}/?${queryString.stringify({lat: query.latitude, lon: query.longitude, appid: keys.openweathermap})}`

const createFetch = queryCreator => async query => {
  const res = await fetch(queryCreator(query))
  const json = await res.json()
  if (json.cod !== 200) throw json
  return json
}

export const fetchWeather = createFetch(
  createStringQuery
)

export const fetchWeatherById = createFetch(
  createIdQuery
)

export const fetchWeatherByCoords = createFetch(
  createCoordsQuery
)