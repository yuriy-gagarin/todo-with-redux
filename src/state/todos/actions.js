import { createActions, combineActions } from 'redux-actions'
import { normalize, schema } from 'normalizr'

const _todo = new schema.Entity('todos')
const arrayOfTodos = new schema.Array(_todo)

export const { todo } = createActions({
  TODO: {
    ADD: {
      REQUEST: text => ({ text }),
      SUCCESS: response => normalize(response, _todo)
    },
    REMOVE: {
      REQUEST: id => ({ id }),
      SUCCESS: response => normalize(response, arrayOfTodos)
    },
    TOGGLE: {
      REQUEST: id => ({ id }),
      SUCCESS: response => normalize(response, _todo)
    },
    FETCH: {
      REQUEST: filter => ({ filter }),
      SUCCESS: (filter, response) => ({ filter, ...normalize(response, arrayOfTodos) }),
      ERROR: (filter, errorMessage = '') => ({ filter, errorMessage }),
    },
    REMOVE_ALL: {
      REQUEST: null,
      SUCCESS: null,
      ERROR: null
    },
    SWITCH_FILTER: filter => ({ filter })
  }
})

export const request = combineActions(
  todo.add.request,
  todo.remove.request,
  todo.toggle.request,
  todo.fetch.request,
  todo.removeAll.request
)

export const success = combineActions(
  todo.add.success,
  todo.remove.success,
  todo.toggle.success,
  todo.fetch.success,
  todo.removeAll.success
)

export const error = combineActions(
  todo.fetch.error,
  todo.removeAll.error
)