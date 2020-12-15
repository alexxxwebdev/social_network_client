import { createAction, createReducer } from 'redux-act'

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: []
}

type initialStateType = typeof initialState

export const fetch = createAction('social/auth/FETCH')
export const fetchSuccess = createAction('social/auth/FETCH_SUCCESS')
export const fetchFailure = createAction('social/auth/FETCH_FAILURE')

/*const requestAuth = ({ clientApi }) => (payload) => clientApi.post('api/auth/login', {
  params: payload
})

/!*const handleFetch = (state, payload) => loop(
  {
    ...state,
    isLoading: true,
    isLoaded: false
  },
  Cmd.run(requestAuth(), {
    successActionCreator: fetchSuccess,
    failActionCreator: fetchFailure,
    args: [payload]
  })
)*!/
*/
const handleFetchSuccess = (state: initialStateType, payload: any): initialStateType => ({//any remove!
  ...state,
  isLoading: false,
  isLoaded: true,
  data: payload
})

const handleFetchFailure = (state: any) => ({ //any remove!
  ...state,
  isLoading: false,
  isLoaded: false,
  isError: true
})

const reducer = createReducer((on) => {
 // on(fetch, handleFetch)
  on(fetchSuccess, handleFetchSuccess)
  on(fetchFailure, handleFetchFailure)
}, initialState)

export default reducer
