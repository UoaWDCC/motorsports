import React from 'react'
import styles from './events.module.css'
import { ChevronDownIcon } from '../Icon'

const LoadMore = () => {
  return (
    <div className={styles.LoadMore}>
      <p className={styles.LoadMoreText}>Load more</p>
      <ChevronDownIcon 
        className={styles.LoadMoreChevron} 
        alt="Down facing chevron button"
      />
    </div>
  )
}

export default LoadMore
