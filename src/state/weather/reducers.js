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
}, null)

const isFetching = handleActions({
  [combine(
    fetchRequest,
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
  [weather.setScale]: (_, {payload: {scale}}) => {
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

const lastFetchMethod = handleActions({
  [weather.fetch.coords.success]: () => 'coords',
  [weather.fetch.id.success]: () => 'id',
  [weather.fetch.name.success]: () => 'name'
}, null)

const gettingLocation = handleActions({
  [weather.location.request]: () => true,
  [combine(
    weather.location.success,
    weather.location.error
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
  lastFetchMethod,
  gettingLocation
})

export default reducer