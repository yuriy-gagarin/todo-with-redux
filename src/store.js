import { createStore } from 'redux'
import throttle from 'lodash/throttle'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const localState = loadState()

  const store = createStore(
    reducer,
    localState,
    // this enables redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000))

  return store
}

export default configureStore