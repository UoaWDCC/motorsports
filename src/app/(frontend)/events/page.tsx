'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MyCalendar from '@/app/(frontend)/components/event-components/MyCalendar'
import styles from '../components/Events/events.module.css'
import Header from '../components/Events/Header'
import Events from '../components/Events/Events'
import { eventData } from '../data/events'
import { CalendarEvent } from '../types/events'


export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  const calendarData: CalendarEvent[] = eventData.map(event => ({
        start: new Date(event.dateStart),
        end: new Date(event.dateEnd),
        title: event.title,
      }))

  /*Sample data to test events on the calendar*/
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
          <MyCalendar events={calendarData} />
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
