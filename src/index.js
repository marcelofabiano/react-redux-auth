import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import axios from 'axios'

import App from './App'
import registerServiceWorker from './config/registerServiceWorker'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware, logger)
)

function *helloSaga() {
  const data = yield axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)
}

sagaMiddleware.run(helloSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
