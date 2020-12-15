import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { IRootReducer } from './state'
import { AuthReducer as auth } from './auth/auth'
import { reducer as form } from 'redux-form'

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<IRootReducer>({
  router: routerReducer,
  auth: auth as any,
  form: form as any
})

export default rootReducer