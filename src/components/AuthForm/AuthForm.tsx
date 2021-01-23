import React from 'react'
import { reduxForm, Field, InjectedFormProps, WrappedFieldProps } from 'redux-form'
import { Link } from 'react-router-dom'
import {ILogin, signInType} from 'types/auth'
import { pushType } from 'types/router'
import { AuthAllPropTypes } from 'containers/AuthForm/AuthForm'
import MessageError from 'components/MessageError'

import styles from './AuthForm.styl'

type WrappedCustomFieldProps = {
    type: string | undefined,
    placeholder: string | undefined
}

const renderInput = (field: WrappedFieldProps & WrappedCustomFieldProps) => {
  const { input, placeholder, type } = field
  console.log('FIELD', field)
  //qwerqrqwr
  return (
    <div className={styles.inputWrap}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        {...input}
      />
    </div>
  )
}

const renderFields = () => (
  <div className={styles.fields}>
    <Field
      name='email'
      type='text'
      component={renderInput}
      placeholder='Имя пользователя'
    />
    <Field
      name='password'
      type='password'
      component={renderInput}
      placeholder='Пароль'
    />
  </div>
)

const renderBtnSubmit = () => (
  <button
    color='secondary'
  >
      Войти
  </button>
)

const handleRegistrationButton = (push: pushType) => () => {
  push({
    pathname: '/registration'
  })
}

const renderRegistrationButton = (push: pushType) => (
  <button
    color='primary'
    onClick={handleRegistrationButton(push)}
  >
    <Link
      className={styles.link}
      to='/registration'
    >
        Зарегистрироваться
    </Link>
  </button>
)

const handleSubmitForm = (signIn: signInType) => (values: ILogin): void => {
  signIn({...values})
}

const Login: React.FC<InjectedFormProps<ILogin, AuthAllPropTypes> & AuthAllPropTypes> = ({
  handleSubmit,
  signIn,
  push,
  authError,
  message
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>Авторизация</div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitForm(signIn))}
      >
        {renderFields()}
        {renderBtnSubmit()}
        {renderRegistrationButton(push)}
        {authError && <MessageError message={message}/>}
      </form>
    </div>
  )
}

const AuthForm = reduxForm<ILogin, AuthAllPropTypes>({
  form: 'login'
})(Login)

export default React.memo(AuthForm)