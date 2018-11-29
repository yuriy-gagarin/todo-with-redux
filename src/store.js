import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

// const thunk = store => next => action => (
//   typeof action === 'function' ?
//     action(store.dispatch, store.getState) :
//     next(action) 
// )

const configureStore = () => {
  const middlewares = [
    thunk,
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
      createLogger()
    )
  }

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
  )
}

export default configureStore