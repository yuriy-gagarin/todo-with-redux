import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import todos from './todos'

export default function configureStore() {
  const reducer = combineReducers({
    todos
  })
  
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