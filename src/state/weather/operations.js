import { weather } from './actions'
import * as api from 'api/weather'

export const fetchWeather = query => dispatch => {
  dispatch(weather.fetch.request(query))

  api.fetchWeather(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}