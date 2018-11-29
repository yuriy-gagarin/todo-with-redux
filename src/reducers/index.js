import { combineReducers } from 'redux'
import dataReducer, * as fromData from './data'
import lookupReducer, * as fromLookup from './lookup'

const todos = combineReducers({
  data: dataReducer,
  lookup: lookupReducer,
})

export default todos

export const getFilteredTodos = (state, filter) => {
  const ids = fromLookup.getIds(state.lookup, filter)
  return ids.map(id => fromData.getItem(state.data, id))
}

export const getIsFetching = (state, filter) =>
  state.lookup[filter].isFetching

export const getErrorMessage = (state, filter) =>
  state.lookup[filter].errorMessage