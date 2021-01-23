import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import * as R from 'ramda'
import { AuthActions } from 'redux/actions/auth'
import { Action } from 'redux-actions'
import { ILogin, IAuthError, IAuth, ISignUp } from 'types/auth'
import { signIn, signUp } from './api'
import { signUpSuccessRoute } from 'redux/constants/auth/auth'

function* SignInWorker(action: Action<ILogin>) {
  try {
    const { data } = yield call(signIn, action.payload)
    if (data.error) {
      yield put(AuthActions.setAuthError(data as IAuthError))
    } else {
      yield put(AuthActions.setAuthInfo(R.pick(['accessToken'], data) as IAuth))
    }
  } catch (error) {
    console.error(error)
  }
}

function* SignUpWorker(action: Action<ISignUp>) {
  try {
    const { data } = yield call(signUp, action.payload)

    yield put(push(signUpSuccessRoute))
  } catch (error) {
    console.error(error)
  }
}

export default function* watchAuth() {
  yield takeLatest(AuthActions.Type.SIGN_IN, SignInWorker)
  yield takeLatest(AuthActions.Type.SIGN_UP, SignUpWorker)
}
