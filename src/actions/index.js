import { todo } from './types'
import * as api from '../api'
import { getIsFetchingByFilter } from '../reducers'

export const addItem = text => dispatch => {
  dispatch(todo.add.request(text))

  api.addTodo(text).then(
    response => dispatch(todo.add.success(response))
  )
}

export const removeItem = id => dispatch => {
  dispatch(todo.remove.request(id))

  api.removeTodo(id).then(
    response => dispatch(todo.remove.success(response))
  )
}

export const toggleItem = id => dispatch => {
  dispatch(todo.toggle.request(id))
  
  api.toggleTodo(id).then(
    response => dispatch(todo.toggle.success(response))
  )
}

export const fetchItems = filter => (dispatch, getState) => {
  if (getIsFetchingByFilter(getState(), filter))
    return Promise.resolve()

  dispatch(todo.fetch.request(filter))

  api.fetchTodos(filter).then(
    response => dispatch(todo.fetch.success(filter, response)),
    error => dispatch(todo.fetch.error(filter, error.message))
  )
}
