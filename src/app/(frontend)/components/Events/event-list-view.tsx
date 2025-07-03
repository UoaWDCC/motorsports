import Header from './header'
import Events from './events'

import styles from './events.module.css'
import { EventListViewProps, TEvent } from '../../types/events'

const EventListView = ({ setShowCalendar, showCalendar, events }: EventListViewProps & { events: TEvent[] }) => {  
  return (
    <section className={styles.EventMain}>
      <Header text="events" />

      <div className={styles.EventBody}>
        <Events events={events} setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="upcoming" />
        <Events events={events} setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="previous" />
      </div>
    </section>
  )
}

export default EventListView
