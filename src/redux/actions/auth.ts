import { createAction } from 'redux-actions'
import { IAuth, IAuthError, ILogin, ISignUp } from 'types/auth'

enum Type {
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    SET_AUTH = 'SET_AUTH',
    SET_AUTH_ERROR = 'SET_AUTH_ERROR',
}

const signIn = createAction<ILogin>(Type.SIGN_IN)
const signUp = createAction<ISignUp>(Type.SIGN_UP)
const setAuthInfo = createAction<IAuth>(Type.SET_AUTH)
const setAuthError = createAction<IAuthError>(Type.SET_AUTH_ERROR)

export const AuthActions = {
  Type,
  signIn,
  signUp,
  setAuthInfo,
  setAuthError
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>