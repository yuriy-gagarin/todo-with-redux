import { combineReducers } from 'redux'
import todos, * as fromTodos from './todos'

const reducer = combineReducers({
  todos
})

export default reducer

export const getFilteredTodos = (state, filter) =>
  fromTodos.getFilteredTodos(state.todos, filter)