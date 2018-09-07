import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/App'
import reducers from './reducers'
// this store job is to store our application state

const store = createStore(reducers, {}, applyMiddleware())

ReactDom.render(
  // pass the store as a property to the provider component
  // once the state in the store change, the provider will inform
  // all the children components
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
)
