import { without } from 'lodash'
import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'
import { todo } from '../actions'

const createLookupReducer = filter => {
  const toggle = (state, action) => {
    const { result: toggleId, entities } = action.payload
    const { completed } = entities.todos[toggleId]
    return (completed && filter === 'active') ||
           (!completed && filter === 'completed') ?
           state.filter(id => id !== toggleId) :
           state
  }

  const validFilter = (filter, action) => filter === action.payload.filter

  const ids = handleActions({
    [todo.fetch.success]:
      (state, action) => validFilter(filter, action) ? action.payload.result : state,
    [todo.add.success]:
      (state, action) => filter !== 'completed' ? [...state, action.payload.result] : state,
    [todo.toggle.success]:
      toggle,
    [todo.remove.success]:
      (state, action) => without(state, ...action.payload.result)
  }, [])

  const isFetching = handleActions({
    [combineActions(todo.fetch.request, todo.toggle.request)]:
      (state, action) => validFilter(filter, action) ? true : state,
    [combineActions(todo.fetch.success, todo.fetch.error)]:
      (state, action) => validFilter(filter, action) ? false : state
  }, false)

  const errorMessage = handleActions({
    [combineActions(todo.fetch.request, todo.fetch.success)]:
      (state, action) => validFilter(filter, action) ? null : state,
    [todo.fetch.error]:
      (state, action) => validFilter(filter, action) ? action.payload.errorMessage : state
  }, null)

  return combineReducers({
    ids,
    isFetching,
    errorMessage
  })
}

const lookupReducer = combineReducers({
  all:       createLookupReducer('all'),
  active:    createLookupReducer('active'),
  completed: createLookupReducer('completed')
})

export default lookupReducer

export const getIds = (state, filter) => state[filter].ids
export const getIsFetching = (state, filter) => state[filter].isFetching