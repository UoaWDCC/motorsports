import React, { ReactNode } from 'react'
import { TEvent } from '../../events/page'
import styles from './events.module.css'

interface IEventTileProps {
  event: TEvent
}

const EventTile = ({ event }: IEventTileProps): ReactNode => {
  return (
    <div className={styles.EventTile}>
      <div className={styles.EventTileImage}>
        <img src="images/vroom_news.png" alt="Placeholder image" />
      </div>

      <div className={styles.EventTileGroup}>
        <h4>{event.date}</h4>
        <h3>{event.title}</h3>
        <p className={styles.EventTileInfo}>{event.info}</p>
        <p>{event.location}</p>

        <button className={styles.EventTileView}>
          <p>View</p>
          <img style={{ width: '16px' }} src="/images/chevron_right.png" alt="Right Arrow" />
        </button>
      </div>
    </div>
  )
}

export default EventTile
