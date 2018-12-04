import queryString from 'query-string'
import * as keys from 'keys'

const WEATHER_URI = 'http://api.openweathermap.org/data/2.5/weather'

const createQuery = query =>
  `${WEATHER_URI}/?${queryString.stringify({q: query, appid: keys.openweathermap})}`

export const fetchWeather = query => (
  fetch(createQuery(query))
    .then(res => res.json())
    .then(res => {
      if (res.cod !== 200) throw res
      return res
    })
)