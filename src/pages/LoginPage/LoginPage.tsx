import React, {FC} from 'react'
import AuthForm from 'containers/AuthForm'

import styles from './LoginPage.styl'

const LoginPage: FC = () => {
  return <div className={styles.loginPage}>
    <AuthForm />
  </div>
}

export default LoginPage