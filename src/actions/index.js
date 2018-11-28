import v4 from 'uuid/v4'
import * as api from '../api'

export const addItem = text => ({
  type: 'ADD_ITEM',
  id: v4(),
  text
})

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
})

export const toggleItem = id => ({
  type: 'TOGGLE_ITEM',
  id
})

export const fetchItems = (filter) =>
  api.fetchTodos(filter).then(response => receiveItems(filter, response))

const receiveItems = (filter, response) => ({
  type: 'RECEIVE_ITEMS',
  filter,
  response
})