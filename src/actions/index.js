import uuid from 'uuid/v1'

export const addItem = text => ({
  type: 'ADD_ITEM',
  id: uuid(),
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