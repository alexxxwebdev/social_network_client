import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { push } from 'react-router-redux'
import { AuthActions } from 'redux/actions/auth'
import { IRootReducer } from 'redux/reducers/state'

import AuthForm from 'components/AuthForm'
import { signInType } from 'types/auth'
import { pushType } from 'types/router'

type MapStateToPropsTypes = {
  authError: boolean,
  message: string
}

export type MapDispatchToPropsTypes = {
  signIn: signInType,
  push: pushType
}

export type AuthAllPropTypes = MapStateToPropsTypes & MapDispatchToPropsTypes

const mapStateToProps = ({
  auth
}: IRootReducer): MapStateToPropsTypes => ({
  authError: auth.error,
  message: auth.message
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsTypes => {
  return ({
    signIn: payload => dispatch(AuthActions.signIn(payload)),
    push: payload => dispatch(push(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)