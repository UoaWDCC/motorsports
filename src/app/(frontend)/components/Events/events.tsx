import React, { ReactNode } from 'react'
import styles from './events.module.css'
import EventTile from './event-tile'
import { eventData } from '../../data/events'
import { CalendarEvent, IEventsProps, TEvent } from '../../types/events'
import LoadMore from './load-more'

const UpcomingEventLimit = 3
const PreviousEventLimit = 2

interface EventsProps extends IEventsProps {
  events: TEvent[]
}

const Events = ({ type, showCalendar, setShowCalendar, events }: EventsProps): ReactNode => {
  const title = type === 'upcoming' ? 'Upcoming Events' : 'Previous Events'
  const limit: number = type === 'upcoming' ? UpcomingEventLimit : PreviousEventLimit

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
