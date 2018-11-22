import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch
  if (!console.group) {
    return rawDispatch
  }
  return action => {
    console.group(action.type)
    console.log('%c previous state', 'color:gray', store.getState())
    console.log('%c action', 'color:blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color:green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const configureStore = () => {
  const localState = loadState()

  const store = createStore(
    reducer,
    localState,
    // this enables redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore