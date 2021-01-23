import React from 'react'
import styles from './MessageError.styl'

type MessageErrorTypes = {
    message: string
}

const MessageError: React.FC<MessageErrorTypes> = ({ message }) => {
  return (
    <div className={styles.messageWrapper}>
      <span className={styles.message}>{message}</span>
    </div>
  )
}

export default MessageError
