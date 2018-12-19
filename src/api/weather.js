import queryString from 'query-string'
import * as keys from 'keys'

const WEATHER_URI = 'http://api.openweathermap.org/data/2.5/weather'

const createStringQuery = query =>
  `${WEATHER_URI}/?${queryString.stringify({q: query, appid: keys.openweathermap})}`

const createIdQuery = query =>
  `${WEATHER_URI}/?${queryString.stringify({id: query, appid: keys.openweathermap})}`

const createCoordsQuery = (query) =>
  `${WEATHER_URI}/?${queryString.stringify({lat: query.latitude, lon: query.longitude, appid: keys.openweathermap})}`

export const fetchWeather = query => (
  fetch(createStringQuery(query))
    .then(res => res.json())
    .then(res => {
      if (res.cod !== 200) throw res
      return res
    })
)

export const fetchWeatherById = query => (
  fetch(createIdQuery(query))
  .then(res => res.json())
  .then(res => {
    if (res.cod !== 200) throw res
    return res
  })
)

export const fetchWeatherByCoords = query => {
  return fetch(createCoordsQuery(query))
  .then(res => res.json())
  .then(res => {
    if (res.cod !== 200) throw res
    return res
  })
}