import React from 'react'
import { reduxForm, Field, InjectedFormProps, WrappedFieldProps } from 'redux-form'
import { ISignUp, signUpType } from 'types/auth'
import { AuthAllPropTypes } from 'containers/RegistrationForm/RegistrationForm'
import MessageError from 'components/MessageError'

import styles from '../AuthForm/AuthForm.styl'

type WrappedCustomFieldProps = {
    type: string | undefined,
    placeholder: string | undefined
}

const renderInput = (field: WrappedFieldProps & WrappedCustomFieldProps) => {
  const { input, placeholder, type } = field
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
      name='firstName'
      type='text'
      component={renderInput}
      placeholder='Введите имя'
    />
    <Field
      name='lastName'
      type='text'
      component={renderInput}
      placeholder='Введите фамилию'
    />
    <Field
      name='email'
      type='text'
      component={renderInput}
      placeholder='Введите почту'
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
      Зарегистрироваться
  </button>
)

const handleSubmitForm = (signIn: signUpType) => (values: ISignUp): void => {
  signIn({...values})
}

const Login: React.FC<InjectedFormProps<ISignUp, AuthAllPropTypes> & AuthAllPropTypes> = ({
  handleSubmit,
  signUp,
  authError,
  message
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>Регистрация</div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(handleSubmitForm(signUp))}
      >
        {renderFields()}
        {renderBtnSubmit()}
        {authError && <MessageError message={message}/>}
      </form>
    </div>
  )
}

const RegistrationForm = reduxForm<ISignUp, AuthAllPropTypes>({
  form: 'registration'
})(Login)

export default React.memo(RegistrationForm)