import React, { ReactNode } from 'react'
import styles from './events.module.css'
import EventTile from './EventTile'
import { EventData, PreviousEventLimit, UpcomingEventLimit } from '../../events/page'
import LoadMore from './LoadMore'

interface IEventsProps {
  type: string
}

const Events = ({ type }: IEventsProps): ReactNode => {
  const title = type === 'upcoming' ? 'Upcoming Events' : 'Previous Events'
  const limit: number = type === 'upcoming' ? UpcomingEventLimit : PreviousEventLimit

  return (
    <section className={styles.Events}>
      <div className={styles.EventsHeader}>
        <p className={styles.EventsSubtitle}>{title}</p>
        {type === 'upcoming' && (
          <img
            style={{ cursor: 'pointer', width: '24px' }}
            src="/images/calendar.png"
            alt="Calendar View Button"
          />
        )}
      </div>

      <div className={styles.EventsList}>
        {EventData.slice(0, limit).map((event) => (
          <EventTile key={event.id} event={event} />
        ))}
      </div>

      {type === 'previous' && <LoadMore />}
    </section>
  )
}

export default Events
