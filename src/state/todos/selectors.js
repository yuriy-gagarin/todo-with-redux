export const getTodo = (state, id) =>
  state.todos.data[id]

export const getIds = (state, filter) =>
  state.todos.lookup[filter].ids

export const getFilteredTodos = (state, filter) =>
  state.todos.lookup[filter].ids.map(id => state.todos.data[id])

export const getIsFetchingByFilter = (state, filter) =>
  state.todos.lookup[filter].isFetching

export const getIsFetchingSomething = state =>
  state.todos.isFetching

export const getErrorMessage = (state, filter) =>
  state.todos.lookup[filter].errorMessage

export const getIsInitialFetch = (state) =>
  state.todos.initialFetch