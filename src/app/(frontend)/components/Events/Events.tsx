import React, { ReactNode } from 'react'
import styles from '@/app/(frontend)/events/events.module.css'
import EventTile from './EventTile'
import { EventData, PreviousEventLimit, UpcomingEventLimit } from '../../events/page'

interface IEventsProps {
  type: string
}

const Events = ({ type }: IEventsProps): ReactNode => {
  const title = type === 'upcoming' ? 'Upcoming Events' : 'Previous Events'
  const limit: number = type === 'upcoming' ? UpcomingEventLimit : PreviousEventLimit

  return (
    <section className={ styles.Events}>
      <div style={{ color: 'white' }}>
        <p>{ title }</p>
        { type === 'upcoming' && <img style={{ width: '24px'}} src='/images/calendar.png' alt='Calendar View Button' />}
       </div> 
        
      <div className={ styles.EventsList}>
        { EventData.slice(0, limit).map(event => <EventTile key={ event.id } event={ event } />) }
      </div>
    </section>
  )
}

export default Events