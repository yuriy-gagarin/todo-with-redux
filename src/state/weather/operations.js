import { weather } from './actions'
import * as apiWeather from '@api/weather'
import * as apiCities from '@api/cities'
import * as apiLocation from '@api/location'
import { isFetching } from './selectors'

const createWeatherThunk = apiMethod => query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(weather.fetch.request(query))

  apiMethod(query).then(
    response => dispatch(weather.fetch.success(response)),
    error => dispatch(weather.fetch.error(query, error))
  )
}

export const fetchWeather = createWeatherThunk(apiWeather.fetchWeather)
export const fetchWeatherById = createWeatherThunk(apiWeather.fetchWeatherById)
export const fetchWeatherByCoords = createWeatherThunk(apiWeather.fetchWeatherByCoords)

export const getCurrentLocation = query => (dispatch, getState) => {
  dispatch(weather.location.request(query))

  return apiLocation.getLocation(query).then(
    response => dispatch(weather.location.success(response)),
    error => dispatch(weather.location.error(error))
  )
}

export const searchCities = query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()
  
  dispatch(weather.cities.request(query))

  apiCities.searchCities(query).then(
    response => dispatch(weather.cities.success(response)),
    error => dispatch(weather.cities.error(query, error))
  )
}