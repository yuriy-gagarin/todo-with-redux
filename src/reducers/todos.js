import { omit, values } from 'lodash'

const todos = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        [action.id]: { id: action.id, text: action.text, completed: false }
      }
    case 'TOGGLE_ITEM':
      return {
        ...state,
        [action.id]: { ...state[action.id], completed: !state[action.id].completed }
      }
    case 'REMOVE_ITEM':
      return omit(state, action.id)
    default:
      return state
  }
}

export default todos

export const getFilteredTodos = (state, filter) => {
  const allTodos = values(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'active':
      return allTodos.filter(item => !item.completed)
    case 'completed':
      return allTodos.filter(item => item.completed)
    default:
      return allTodos
  }
}