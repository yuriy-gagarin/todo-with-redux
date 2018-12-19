import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { weather, fetchRequest, fetchSuccess, fetchError } from './actions'
import combine from '@utils/combineActions'

const weatherData = handleActions({
  [fetchSuccess]:
    (_, action) => ({ ...action.payload })
}, {})

const cities = handleActions({
  [weather.cities.success]:
    (_, action) => ([ ...action.payload.result ])
}, [])

const lastFetchId = handleActions({
  [weather.cities.success]:
    (_, action) => action.payload.id
}, 0)

const isFetching = handleActions({
  [combine(
    fetchSuccess, 
    weather.cities.request
  )]: () => true,
  [combine(
    fetchSuccess, 
    fetchError,
    weather.cities.success, 
    weather.cities.error
  )]: () => false
}, false)

const isFetched = handleActions({
  [fetchSuccess]: () => true
}, false)

const fetchErrorName = handleActions({
  [fetchError]: (_, action) => action.payload,
  [combine(
    fetchRequest,
    fetchSuccess
  )]: () => null,
}, null)

const scale = handleActions({
  [weather.change_scale]: scale => {
    const scales = ['K', 'C', 'F']
    return scales.includes(scale) ? scale : 'C'
  }
}, 'C')

const userCoords = handleActions({
  [weather.location.success]: (_, {payload: {coords}}) => ({
    latitude: coords.latitude,
    longitude: coords.longitude
  })
}, {latitude: null, longitude: null})

const fetchedByCoordinates = handleActions({
  [weather.fetch.coords.success]: () => true,
  [combine(
    weather.fetch.id.success,
    weather.fetch.name.success
  )]: () => false
}, false)

const citiesData = combineReducers({
  cities,
  lastFetchId
})

const reducer = combineReducers({
  weatherData,
  citiesData,
  scale,
  isFetching,
  isFetched,
  fetchErrorName,
  userCoords,
  fetchedByCoordinates
})

export default reducer