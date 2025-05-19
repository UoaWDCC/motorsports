"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import MyCalendar from '@/app/(frontend)/components/event-components/MyCalendar'


export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)

/*Sample data to test events on the calendar*/
  const events = [
    { 
      start: new Date(), 
      end: new Date(), 
      title: 'Sample Event' },
    { 
      start: new Date('2025-05-22T00:00:00'),
      end: new Date('2025-05-22T01:00:00'),
      title: 'Sim Racing'
    },
    { 
      start: new Date('2025-05-25T00:00:00'),
      end: new Date('2025-05-25T01:00:00'),
      title: 'Social Event'
    },
    { 
      start: new Date('2025-05-27T00:00:00'),
      end: new Date('2025-05-27T01:00:00'),
      title: 'Club Dinner'
    }
  ]

  return (
    <div>
      <button onClick={() => setShowCalendar(!showCalendar)}
              style={{
                padding: 0,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer'
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
      <div className="page-content">
        <h1>Events Page</h1>
        <p>Temporary Page Template for the Events Page!</p>
      </div>
    </div>
  )
}
