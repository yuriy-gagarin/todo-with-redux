import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configureStore from './state'
import App from './views/App'

import './index.css'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

const store = configureStore()

render(
  <Root store={store}/>
  , document.getElementById('root')
)