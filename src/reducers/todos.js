const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'REMOVE_ITEM':
      return state.filter(
        item => item.id !== action.id
      )
    case 'TOGGLE_ITEM':
      return state.map(
        item => item.id === action.id ? {...item, completed: !item.completed} : item
      )
    default:
      return state
  }
}

export default todos

export const getFilteredTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'active':
      return state.filter(item => !item.completed)
    case 'completed':
      return state.filter(item => item.completed)
    default:
      return state
  }
}