import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AuthActions } from 'redux/actions/auth'
import { IRootReducer } from 'redux/reducers/state'

import RegistrationForm from 'components/RegistrationForm'
import { signUpType } from 'types/auth'

type MapStateToPropsTypes = {
  authError: boolean,
  message: string
}

export type MapDispatchToPropsTypes = {
  signUp: signUpType
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
    signUp: payload => dispatch(AuthActions.signUp(payload))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)