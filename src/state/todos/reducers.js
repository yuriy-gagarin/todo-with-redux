import { combineReducers } from 'redux'
import { handleActions, combineActions } from 'redux-actions'
import { todo, request, success } from './actions'

import { omit, without } from 'lodash'

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

const lookup = combineReducers({
  all:       createLookupReducer('all'),
  active:    createLookupReducer('active'),
  completed: createLookupReducer('completed')
})

const data = handleActions({
  [combineActions(todo.fetch.success, todo.add.success, todo.toggle.success)]:
    (state, action) => ({ ...state, ...action.payload.entities.todos }),
  [todo.remove.success]:
    (state, action) => omit(state, action.payload.entities.todos)
}, {})

const initialFetch = handleActions({
  [combineActions(todo.fetch.success, todo.fetch.error)]: () => false
}, true)

const isFetching = handleActions({
  [request]: () => true,
  [success]: () => false
}, false)

const filter = handleActions({
  [todo.switchFilter]:
    (state, {payload: {filter}}) =>
      filter && ['all', 'active', 'completed'].includes(filter) ? filter : 'all'
}, 'all')

const todos = combineReducers({
  data,
  lookup,
  initialFetch,
  isFetching,
  filter,
})

export default todos