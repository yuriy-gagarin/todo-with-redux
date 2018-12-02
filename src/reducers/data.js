const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_SUCCESS':
    case 'ADD_ITEM_SUCCESS':
    case 'TOGGLE_ITEM_SUCCESS':
      return {...state, ...action.response.entities.todos}
    default:
      return state
  }
}

export default dataReducer

export const getItem = (state, id) => state[id]