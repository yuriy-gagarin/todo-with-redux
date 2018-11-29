import { createStore, applyMiddleware, compose } from 'redux'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
// import throttle from 'lodash/throttle'
import reducer from './reducers'
// import { loadState, saveState } from './localStorage'

// const logging = store => next => {
//   if (!console.group) {
//     return next
//   } else {
//     return action => {
//       console.group(action.type)
//       console.log('%c previous state', 'color:gray', store.getState())
//       console.log('%c action', 'color:blue', action)
//       const returnValue = next(action)
//       console.log('%c next state', 'color:green', store.getState())
//       console.groupEnd(action.type)
//       return returnValue
//     }
//   }
// }

// const promise = store => next => (
//   action =>
//     typeof action.then === 'function' ? action.then(next) : next(action)
// )

// const applyMiddleware = (middlewares, store) => {
//   store.dispatch = middlewares
//     .slice()
//     .reverse()
//     .reduce((prev, next) => next(store)(prev), store.dispatch)
// }

const configureStore = () => {
  // const localState = loadState()

  const middlewares = [
    promise,
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
      createLogger()
    )
  }

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducer,
    // localState,
    composeEnhancer(applyMiddleware(...middlewares)),
  )

  // store.subscribe(throttle(() => {
  //   saveState(store.getState())
  // }, 1000))

  return store
}

export default configureStore