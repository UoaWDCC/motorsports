import Header from './header'
import Events from './events'

import styles from './events.module.css'
import { EventListViewProps, TEvent } from '../../types/events'

const EventListView = ({ setShowCalendar, showCalendar, events }: EventListViewProps & { events: TEvent[] }) => {  
  
  const now = new Date()

  const previousEvents = events.filter(event => new Date(event.dateEnd) < now)

  const upcomingEvents = events.filter(event => new Date(event.dateEnd) >= now)
  
  return (
    <section className={styles.EventMain}>
      <Header text="events" />

      <div className={styles.EventBody}>
        <Events events={upcomingEvents} setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="upcoming" />
        <Events events={previousEvents} setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="previous" />
      </div>
    </section>
  )
}

export default EventListView
