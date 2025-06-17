import React from 'react'
import styles from './events.module.css'

const LoadMore = () => {
  return (
    <div className={styles.LoadMore}>
      <p className={styles.LoadMoreText}>Load more</p>
      <img
        className={styles.LoadMoreChevron}
        src="/images/white_chevron_down.png"
        alt="Down facing chevron button"
      />
    </div>
  )
}

export default LoadMore
