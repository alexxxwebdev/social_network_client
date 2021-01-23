import React, {FC} from 'react'
import RegistrationForm from 'containers/RegistrationForm'

import styles from './RegistrationPage.styl'

const RegistrationPage: FC = () => {
  return <div className={styles.registrationPage}>
    <RegistrationForm />
  </div>
}

export default RegistrationPage