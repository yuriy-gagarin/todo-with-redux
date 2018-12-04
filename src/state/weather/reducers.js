import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'
import { weather } from './actions'

const reducer = handleActions({
  [weather.fetch.success]:
    (state, action) => ({ ...state, ...action.payload }),
}, {})

export default reducer