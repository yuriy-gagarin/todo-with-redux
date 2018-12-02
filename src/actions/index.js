import { normalize } from 'normalizr'
import * as schema from './schema'
import * as api from '../api'
import { getIsFetching } from '../reducers'

export const addItem = text => dispatch => {
  api.addTodo(text).then(
    response => dispatch({
      type: 'ADD_ITEM_SUCCESS',
      response: normalize(response, schema.todo)
    })
  )
}

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
})

export const toggleItem = id => dispatch => {
  dispatch({
    type: 'TOGGLE_ITEM_REQUEST',
    id
  })
  
  api.toggleTodo(id).then(
    response => dispatch({
      type: 'TOGGLE_ITEM_SUCCESS',
      response: normalize(response, schema.todo)
    })
  )
}

export const fetchItems = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter))
    return Promise.resolve()

  dispatch({
    type: 'FETCH_ITEMS_REQUEST',
    filter
  })

  api.fetchTodos(filter).then(
    response => dispatch({
      type: 'FETCH_ITEMS_SUCCESS',
      filter,
      response: normalize(response, schema.arrayOfTodos)
    }),
    error => dispatch({
      type: 'FETCH_ITEMS_ERROR',
      filter,
      errorMessage: error.message || ''
    })
  )
}
