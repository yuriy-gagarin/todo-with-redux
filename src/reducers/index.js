import { combineReducers } from 'redux'

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

const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

const reducer = combineReducers({
  todos,
  filter
})

export default reducer