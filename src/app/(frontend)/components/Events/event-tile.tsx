import React, { ReactNode } from 'react'
import { IEventTileProps } from '../../types/events'
import styles from './events.module.css'
import Link from 'next/link'

const EventTile = ({ event }: IEventTileProps): ReactNode => {
  return (
    <div className={styles.EventTile}>
      <div className={styles.EventTileImage}>
        <img src="images/vroom_news.png" alt="Placeholder image" />
      </div>

      <div className={styles.EventTileGroup}>
        <h4>{event.dateStart}</h4>
        <h3>{event.title}</h3>
        <p className={styles.EventTileInfo}>{event.info}</p>
        <p>{event.location}</p>
        {/* Go to details page with event id apart of link */}
        <Link href={`/events-details/${event.id}`}>
          <button className={styles.EventTileView}>
            <p>View</p>

            <img style={{ width: '16px' }} src="/images/chevron_right.png" alt="Right Arrow" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default EventTile
