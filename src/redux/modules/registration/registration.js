import { createAction, createReducer } from 'redux-act'
import { loop, Cmd } from 'redux-loop'
import axios from 'axios'

const initialState = {
  isLoading: false,
  isLoaded: false
}

export const fetch = createAction('social/registration/FETCH')
export const fetchSuccess = createAction('social/registration/FETCH_SUCCESS')
export const fetchFailure = createAction('social/registration/FETCH_FAILURE')

const requestRegistration = (payload) => axios.post(
  'api/auth/register',
  {
    params: payload
  },
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
  }
)

const handleFetch = (state, payload) => loop(
  {
    ...state,
    isLoading: true,
    isLoaded: false
  },
  Cmd.run(requestRegistration(), {
    successActionCreator: fetchSuccess,
    failActionCreator: fetchFailure,
    args: [payload]
  })
)

const handleFetchSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
  data: payload
})

const handleFetchFailure = (state) => ({
  ...state,
  isLoading: false,
  isLoaded: false,
  isError: true
})

const reducer = createReducer((on) => {
  on(fetch, handleFetch)
  on(fetchSuccess, handleFetchSuccess)
  on(fetchFailure, handleFetchFailure)
}, initialState)

export default reducer
