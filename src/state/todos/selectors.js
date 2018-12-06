export const todo = (state, id) =>
  state.todos.data[id]

export const ids = (state, filter) =>
  state.todos.lookup[filter].ids

export const filter = (state) =>
  state.todos.filter

export const filteredTodos = (state, filter) =>
  ids(state, filter).map(id => todo(state, id))

export const isFetchingByFilter = (state, filter) =>
  state.todos.lookup[filter].isFetching

export const isFetchingSomething = state =>
  state.todos.isFetching

export const errorMessage = (state, filter) =>
  state.todos.lookup[filter].errorMessage

export const isInitialFetch = (state) =>
  state.todos.initialFetch