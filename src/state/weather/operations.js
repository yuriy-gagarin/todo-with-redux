import { weather } from './actions'
import * as apiWeather from '@api/weather'
import * as apiCities from '@api/cities'
import * as apiLocation from '@api/location'
import { isFetching } from './selectors'

const createWeatherThunk = (actionCreator, apiMethod) => query => (dispatch, getState) => {
  if (isFetching(getState()))
    return Promise.resolve()

  dispatch(actionCreator.request(query))

  apiMethod(query).then(
    response => dispatch(actionCreator.success(response)),
    error => dispatch(actionCreator.error(query, error))
  )
}

export const fetchWeather = createWeatherThunk(
  weather.fetch.name,
  apiWeather.fetchWeather
)

export const fetchWeatherById = createWeatherThunk(
  weather.fetch.id,
  apiWeather.fetchWeatherById
)

export const fetchWeatherByCoords = createWeatherThunk(
  weather.fetch.coords,
  apiWeather.fetchWeatherByCoords
)

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