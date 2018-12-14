import { weather } from './actions'
import * as apiWeather from '@api/weather'
import * as apiCities from '@api/cities'
import { isFetching, lastCitiesFetchId } from './selectors'

export const fetchWeather = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(weather.fetch.request(query))

  apiWeather.fetchWeather(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}

export const fetchWeatherById = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(weather.fetch.request(query))

  apiWeather.fetchWeatherById(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}

export const searchCities = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()
  
  dispatch(weather.cities.request(query))

  apiCities.searchCities(query).then(
    response => {
      dispatch(weather.cities.success(response))
    },
    error => dispatch(weather.cities.error(query, error))
  )
}