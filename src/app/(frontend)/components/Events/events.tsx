import React, { ReactNode } from 'react'
import styles from './events.module.css'
import EventTile from './event-tile'
import { eventData } from '../../data/events'
import { IEventsProps } from '../../types/events'
import LoadMore from './load-more'

const UpcomingEventLimit = 3
const PreviousEventLimit = 2

const Events = ({ type, showCalendar, setShowCalendar }: IEventsProps): ReactNode => {
  const title = type === 'upcoming' ? 'Upcoming Events' : 'Previous Events'
  const limit: number = type === 'upcoming' ? UpcomingEventLimit : PreviousEventLimit

  const events = eventData.map((event) => {
    // Format the date for display
    const dateStart = new Date(event.dateStart).toLocaleString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
    return {
      id: event.id,
      title: event.title,
      info: event.info,
      imageUrl: event.imageUrl,
      dateStart: dateStart,
      dateEnd: event.dateEnd,
      location: event.location,
    }
  })

  return (
    <section className={styles.Events}>
      <div className={styles.EventsHeader}>
        <p className={styles.EventsSubtitle}>{title}</p>
        { type === 'upcoming' &&
          <img
            src="/images/calendar.png"
            alt="Toggle Calendar View"
            onClick={() => setShowCalendar(!showCalendar)}
          />
        }
      </div>

      <div className={styles.EventsList}>
        {events.slice(0, limit).map((event) => <EventTile key={event.id} event={event} />)}
      </div>

      {type === 'previous' && <LoadMore />}
    </section>
  )
}

export default Events
