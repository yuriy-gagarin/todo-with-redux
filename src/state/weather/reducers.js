import { combineReducers } from 'redux'
import { handleActions, combineActions as c } from 'redux-actions'
import { weather } from './actions'

const weatherData = handleActions({
  [weather.fetch.success]:
    (_, action) => ({ ...action.payload })
}, {})

const cities = handleActions({
  [weather.cities.success]:
    (state, action) => ([ ...action.payload.result ])
}, [])

const lastFetchId = handleActions({
  [weather.cities.success]:
    (state, action) => action.payload.id
}, 0)

const isFetching = handleActions({
  [c(weather.fetch.request, 
     weather.cities.request)]: () => true,
  [c(weather.fetch.success, 
     weather.fetch.error, 
     weather.cities.success, 
     weather.cities.error)]: () => false
}, false)

const isFetched = handleActions({
  [weather.fetch.success]: () => true
}, false)

const fetchError = handleActions({
  [weather.fetch.error]: (_, action) => action.payload,
  [c(weather.fetch.success, weather.fetch.request)]: () => null,
}, null)

const scale = handleActions({
  [weather.change_scale]: scale => {
    const scales = ['K', 'C', 'F']
    return scales.includes(scale) ? scale : 'C'
  }
}, 'C')

const userCoords = handleActions({
  [weather.location.success]: (state, {payload: {coords}}) => ({
    latitude: coords.latitude,
    longitude: coords.longitude
  })
}, {latitude: null, longitude: null})

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
  fetchError,
  userCoords
})

export default reducer