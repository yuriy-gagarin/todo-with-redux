import store from '../store';

let id = store.getState().length;

export const addItem = text => ({
  type: 'ADD_ITEM',
  id: id++,
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