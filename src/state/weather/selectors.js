import { createSelector } from 'reselect'
import { toCelsius, toFahrenheit } from '@utils/tempScales'

export const getIsFetching = (state) =>
  state.weather.isFetching

export const getIsFetched = state =>
  state.weather.isFetched

export const getTempScale = state =>
  state.weather.scale

export const getLocationName = (state) =>
  state.weather.data.name

export const getCountryCode = state =>
  state.weather.data['sys.country']

export const getCoordinates = (state) =>
  state.weather.data.coord

export const getTemperature = state => {
  const temp = state.weather.data['main.temp']
  switch (getTempScale(state)) {
    case 'K':
      return temp
    case 'C':
      return toCelsius(temp)
    case 'F':
      return toFahrenheit(temp)
    default:
      return temp
  }
}

export const getClouds = state =>
  state.weather.data['clouds.all']

export const getWindSpeed = state =>
  state.weather.data['wind.speed']

export const getWeatherImage = state =>
  state.weather.data['weather.0.icon']

export const getWeatherDesc = state =>
  state.weather.data['weather.0.main']