'use client'

import { eventData } from '../data/events'
import { CalendarEvent, TEvent } from '../types/events'
import EventListView from '../components/Events/event-list-view'
import { useEffect, useState } from 'react'
import MyCalendar from '../components/Events/my-calendar'

export default function EventsPage() {
  const [showCalendar, setShowCalendar] = useState(false)
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[] | null>(null)
  const [payloadEvents, setPayloadEvents] = useState<TEvent[]>([])

  useEffect(() => {
    async function fetchEvents() {
      const res = await fetch(`/api/events`)
      const data = await res.json()
      // Map Payload docs to CalendarEvent shape
      const docs = Array.isArray(data.docs) ? data.docs : []
      const calendarData = docs.map((event: any) => ({
        start: new Date(event.dateStart),
        end: new Date(event.dateEnd),
        title: event.title,
        id: event.id,
      }))

      const eventData: TEvent[] = data.docs.map((event: any) => ({
        id: event.id,
        title: event.title,
        info: event.info,
        dateStart: event.dateStart,
        dateEnd: event.dateEnd,
        location: event.location,
        imageUrl: event.imageUrl,
      }))

      setPayloadEvents(eventData)
      setCalendarEvents(calendarData)
    }
    fetchEvents()
  }, [])

  if (!calendarEvents || !payloadEvents) return <div>Loading events...</div>

  return (
    <main>
      {showCalendar ? (
        <MyCalendar
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          events={calendarEvents}
        />
      ) : (
        <EventListView
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          events={payloadEvents}
        />
      )}
    </main>
  )
}
