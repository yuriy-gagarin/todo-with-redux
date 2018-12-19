import { weather } from './actions'
import * as apiWeather from '@api/weather'
import * as apiCities from '@api/cities'
import * as apiLocation from '@api/location'
import { isFetching } from './selectors'

const createThunk = (actionCreator, apiMethod, check = () => false) => (
  query => (dispatch, getState) => {
    if (check(getState()))
      return Promise.resolve()

    dispatch(actionCreator.request(query))

    return apiMethod(query).then(
      response => dispatch(actionCreator.success(response)),
      error => dispatch(actionCreator.error(query, error))
    )
  }
)

export const fetchWeather = createThunk(
  weather.fetch.name,
  apiWeather.fetchWeather,
  isFetching
)

export const fetchWeatherById = createThunk(
  weather.fetch.id,
  apiWeather.fetchWeatherById,
  isFetching
)

export const fetchWeatherByCoords = createThunk(
  weather.fetch.coords,
  apiWeather.fetchWeatherByCoords,
  isFetching
)

export const getCurrentLocation = createThunk(
  weather.location,
  apiLocation.getLocation
)

export const searchCities = createThunk(
  weather.cities,
  apiCities.searchCities,
  isFetching
)