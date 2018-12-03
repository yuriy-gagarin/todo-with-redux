import { handleActions, combineActions } from 'redux-actions'
import { todo } from '../actions'

const dataReducer = handleActions({
  [combineActions(todo.fetch.success, todo.add.success, todo.toggle.success)]:
    (state, action) => ({ ...state, ...action.payload.entities.todos }),
  [todo.remove.success]:
    (state, action) => state
}, {})

export default dataReducer

export const getItem = (state, id) => state[id]