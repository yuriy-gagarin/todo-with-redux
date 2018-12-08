import { weather } from './actions'
import * as api from '@api/weather'
import { isFetching } from './selectors'

export const fetchWeather = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(weather.fetch.request(query))

  api.fetchWeather(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}

export const fetchWeatherById = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(weather.fetch.request(query))

  api.fetchWeatherById(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}