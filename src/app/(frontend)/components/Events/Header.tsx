import React, { ReactNode } from 'react'
import styles from './events.module.css'

interface IHeaderProps {
  text: string
}

const Header = ({ text }: IHeaderProps): ReactNode => {
  return (
    <div className={styles.EventHeader}>
      <h1>{text}</h1>
    </div>
  )
}

export default Header
