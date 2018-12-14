import * as api from '@api/todos'
import { todo } from './actions'
import { isFetchingByFilter, isFetchingSomething } from './selectors';

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
  if (isFetchingByFilter(getState(), filter))
    return Promise.resolve()

  dispatch(todo.fetch.request(filter))

  api.fetchTodos(filter).then(
    response => dispatch(todo.fetch.success(filter, response)),
    error => dispatch(todo.fetch.error(filter, error.message))
  )
}

export const removeAllTodos = () => (dispatch, getState) => {
  if (isFetchingSomething(getState()))
    return Promise.resolve()

  dispatch(todo.removeAll.request())

  api.removeAll().then(
    response => dispatch(todo.removeAll.success()),
    error => dispatch(todo.removeAll.error())
  )
}

export const switchFilter = todo.switchFilter