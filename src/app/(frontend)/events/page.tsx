import React, { ReactNode } from 'react'
import styles from './events.module.css'
import Header from '../components/Events/Header'
import Events from '../components/Events/Events'

export const UpcomingEventLimit = 3
export const PreviousEventLimit = 2

// Temp event object, will replace with a collection object once developed
export type TEvent = {
    id: number,
    title: string,
    info: string,
    date: string,
    location: string
}

// Temp raw data
export const EventData: TEvent[] = [
  { id: 0, title: 'VROOM 2025 NEWS', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero', date: 'Tue 15 Feb @ 12:30 AM', location: '2nd Floor Kate Edgar' },
  { id: 1, title: 'Event 2', info: 'Info about event 2', date: 'Wed 16 Feb @ 2:00 PM', location: 'OGGB Room 260' },
  { id: 2, title: 'Event 3', info: 'Info about event 3', date: 'Thu 17 Feb @ 11:00 AM', location: 'Engineering Building 401' },
  { id: 3, title: 'Event 4', info: 'Info about event 4', date: 'Fri 18 Feb @ 1:30 PM', location: 'Kate Edgar Information Commons' },
  { id: 4, title: 'Event 5', info: 'Panel discussion with industry professionals', date: 'Mon 21 Feb @ 3:00 PM', location: 'Science Centre Room 301' },
  { id: 5, title: 'Event 6', info: 'Hands-on AI Workshop', date: 'Tue 22 Feb @ 10:00 AM', location: 'Unleash Space Workshop Area' },
  { id: 6, title: 'Event 7', info: 'Networking night for tech students', date: 'Wed 23 Feb @ 6:00 PM', location: 'Level 1, OGGB' },
  { id: 7, title: 'Event 8', info: 'Introduction to Open Source Projects', date: 'Thu 24 Feb @ 12:00 PM', location: 'Online via Zoom' },
  { id: 8, title: 'Event 9', info: 'Summer Internship Info Session', date: 'Fri 25 Feb @ 9:30 AM', location: 'Engineering Library Study Area' },
  { id: 9, title: 'Event 10', info: 'Postgraduate Research Showcase', date: 'Sat 26 Feb @ 11:00 AM', location: 'Science Building 302' }
];

const EventPage = (): ReactNode => {
  return (
    <main className={ styles.EventMain }>
      <Header text='events' />

      <div className={ styles.EventBody }>
        <Events type='upcoming' />
        <Events type='previous' />
      </div>
    </main>
  )
}

export default EventPage