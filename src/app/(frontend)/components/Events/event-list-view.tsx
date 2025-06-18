import Header from './header'
import Events from './events'

import styles from './events.module.css'
import { EventListViewProps } from '../../types/events'

const EventListView = ({ setShowCalendar, showCalendar }: EventListViewProps) => {  
  return (
    <section className={styles.EventMain}>
      <Header text="events" />

      <div className={styles.EventBody}>
        <Events setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="upcoming" />
        <Events setShowCalendar={ setShowCalendar } showCalendar={ showCalendar} type="previous" />
      </div>
    </section>
  )
}

export default EventListView
