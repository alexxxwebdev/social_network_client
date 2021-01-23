import { handleActions } from 'redux-actions'
import { IAuth } from 'types/auth'
import { AuthActions } from 'redux/actions/auth'

const initialState = {
  error: false,
  message: ''
}

type InitialStateType = {
  error: boolean,
  message: string | null
}

export const AuthReducer = handleActions<IAuth | InitialStateType, IAuth>({
  [AuthActions.Type.SET_AUTH]: (state, action) => action.payload,
  [AuthActions.Type.SET_AUTH_ERROR]: (state, action) => action.payload
}, initialState)