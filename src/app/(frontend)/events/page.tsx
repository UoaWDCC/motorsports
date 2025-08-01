'use client'

import { eventData } from '../data/events'
import { CalendarEvent } from '../types/events'
import EventListView from '../components/Events/event-list-view'
import { useState } from 'react'
import MyCalendar from '../components/Events/my-calendar'

export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  const calendarData: CalendarEvent[] = eventData.map((event) => ({
    start: new Date(event.dateStart),
    end: new Date(event.dateEnd),
    title: event.title,
    id: event.id,
  }))

  return (
    <main>
      <EventListView showCalendar={showCalendar} setShowCalendar={setShowCalendar} />

      {showCalendar && (
        <div className="calendar-overlay" onClick={() => setShowCalendar(false)}>
          <div className="calendar-wrapper" onClick={(e) => e.stopPropagation()}>
            <MyCalendar
              showCalendar={showCalendar}
              setShowCalendar={setShowCalendar}
              events={calendarData}
            />
          </div>
        </div>
      )}
    </main>
  )
}
