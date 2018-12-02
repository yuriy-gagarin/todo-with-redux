import { combineReducers } from 'redux'

const createLookupReducer = filter => {
  const toggle = (state, action) => {
    const { result: toggleId, entities } = action.response
    const { completed } = entities.todos[toggleId]
    return (completed && filter === 'active') ||
           (!completed && filter === 'completed') ?
           state.filter(id => id !== toggleId) :
           state
  }
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ITEMS_SUCCESS':
        return filter === action.filter ? action.response.result : state
      case 'ADD_ITEM_SUCCESS':
        return filter !== 'completed' ? [...state, action.response.result] : state
      case 'TOGGLE_ITEM_SUCCESS':
        return toggle(state, action)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_ITEMS_REQUEST':
        return true
      case 'FETCH_ITEMS_SUCCESS':
      case 'FETCH_ITEMS_ERROR':
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'FETCH_ITEMS_REQUEST':
      case 'FETCH_ITEMS_SUCCESS':
        return null
      case 'FETCH_ITEMS_ERROR':
        return action.errorMessage
      default: 
        return state
    }
  }

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
