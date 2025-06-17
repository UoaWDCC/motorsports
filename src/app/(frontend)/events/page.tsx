'use client'

import { eventData } from '../data/events'
import { CalendarEvent } from '../types/events'
import EventListView from '../components/events/event-list-view'
import { useState } from 'react'
import MyCalendar from '../components/events/my-calendar'

export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)

  const calendarData: CalendarEvent[] = eventData.map((event) => ({
    start: new Date(event.dateStart),
    end: new Date(event.dateEnd),
    title: event.title,
  }))

  return (
    <main>
      { showCalendar ? 
        <MyCalendar showCalendar={ showCalendar } setShowCalendar={ setShowCalendar } events={ calendarData }/> 
      : 
        <EventListView showCalendar={ showCalendar } setShowCalendar={ setShowCalendar } /> 
      }
    </main>
  )
}
