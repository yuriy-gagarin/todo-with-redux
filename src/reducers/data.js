import { assign } from 'lodash'

const dataReducer = (state = {}, action) => {
  if (action.response) {
    return {...state, ...action.response.entities.todos}
  }
  return state
}

export default dataReducer

export const getItem = (state, id) => state[id]