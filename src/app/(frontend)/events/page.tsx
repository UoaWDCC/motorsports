'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MyCalendar from '@/app/(frontend)/components/event-components/MyCalendar'
import styles from '../components/Events/events.module.css'
import Header from '../components/Events/Header'
import Events from '../components/Events/Events'

export const UpcomingEventLimit = 3
export const PreviousEventLimit = 2

// Temp event object, will replace with a collection object once developed
export type TEvent = {
  id: number
  title: string
  info: string
  date: string
  location: string
}

// Temp raw data
export const EventData: TEvent[] = [
  {
    id: 0,
    title: 'VROOM 2025 NEWS',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero. Delectus earum dolore itaque eos dolorem? Placeat amet vitae molestiae libero vero',
    date: 'Tue 15 Feb @ 12:30 AM',
    location: '2nd Floor Kate Edgar',
  },
  {
    id: 1,
    title: 'Event 2',
    info: 'Info about event 2',
    date: 'Wed 16 Feb @ 2:00 PM',
    location: 'OGGB Room 260',
  },
  {
    id: 2,
    title: 'Event 3',
    info: 'Info about event 3',
    date: 'Thu 17 Feb @ 11:00 AM',
    location: 'Engineering Building 401',
  },
  {
    id: 3,
    title: 'Event 4',
    info: 'Info about event 4',
    date: 'Fri 18 Feb @ 1:30 PM',
    location: 'Kate Edgar Information Commons',
  },
]

export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  /*Sample data to test events on the calendar*/
  const events = [
    {
      start: new Date(),
      end: new Date(),
      title: 'Sample Event',
    },
    {
      start: new Date('2025-05-22T00:00:00'),
      end: new Date('2025-05-22T01:00:00'),
      title: 'Sim Racing',
    },
    {
      start: new Date('2025-05-25T00:00:00'),
      end: new Date('2025-05-25T01:00:00'),
      title: 'Social Event',
    },
    {
      start: new Date('2025-05-27T00:00:00'),
      end: new Date('2025-05-27T01:00:00'),
      title: 'Club Dinner',
    },
  ]

  return (
    <div>
      <button
        onClick={() => setShowCalendar(!showCalendar)}
        style={{
          padding: 0,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {showCalendar ? (
          <Image src="/images/calendar-icon.png" alt="Hide Calendar" width={24} height={24} />
        ) : (
          <Image src="/images/calendar-icon.png" alt="Show Calendar" width={24} height={24} />
        )}
      </button>
      {showCalendar && (
        <div className="calendar-wrapper">
          <MyCalendar events={events} />
        </div>
      )}

      {!showCalendar && (
        <main className={styles.EventMain}>
          <Header text="events" />

          <div className={styles.EventBody}>
            <Events type="upcoming" />
            <Events type="previous" />
          </div>
        </main>
      )}
      <div className="page-content">
        <h1>Events Page</h1>
        <p>Temporary Page Template for the Events Page!</p>
      </div>
    </div>
  )
}
