import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'
import { weather } from './actions'

const data = handleActions({
  [weather.fetch.success]:
    (state, action) => ({ ...action.payload }),
}, {})

const isFetching = handleActions({
  [weather.fetch.request]: () => true,
  [combineActions(weather.fetch.success, weather.fetch.error)]: () => false
}, false)

const isFetched = handleActions({
  [weather.fetch.success]: () => true
}, false)

const scale = handleActions({
  [weather.change_scale]: scale => {
    const scales = ['K', 'C', 'F']
    return scales.includes(scale) ? scale : 'C'
  }
}, 'C')

const reducer = combineReducers({
  data,
  scale,
  isFetching,
  isFetched
})

export default reducer