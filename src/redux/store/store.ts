import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
))

sagaMiddleware.run(rootSaga)

export default store