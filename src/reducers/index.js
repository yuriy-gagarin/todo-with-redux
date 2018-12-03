import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'
import dataReducer, * as fromData from './data'
import lookupReducer, * as fromLookup from './lookup'
import { todo, request, success } from '../actions'

const initialFetch = handleActions({
  [combineActions(todo.fetch.success, todo.fetch.error)]:
    (state, action) => false
}, true)

const isFetching = handleActions({
  [request]: (state, action) => true,
  [success]: (state, action) => false
}, false)

const todos = combineReducers({
  data: dataReducer,
  lookup: lookupReducer,
  initialFetch,
  isFetching
})

export default todos

export const getFilteredTodos = (state, filter) => {
  const ids = fromLookup.getIds(state.lookup, filter)
  return ids.map(id => fromData.getItem(state.data, id))
}

export const getIsFetchingByFilter = (state, filter) =>
  state.lookup[filter].isFetching

export const getIsFetchingSomething = state =>
  state.isFetching

export const getErrorMessage = (state, filter) =>
  state.lookup[filter].errorMessage

export const getIsInitialFetch = (state) =>
  state.initialFetch