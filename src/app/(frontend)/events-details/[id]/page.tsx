'use client'
import '../../styles.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { eventData } from '../../data/events'
import { summary } from 'framer-motion/client'

interface EventDetailsParams {
  params: { id: string }
}

export default function EventDetailsPage({ params }: EventDetailsParams) {
  const { id } = React.use(params)
  const event = eventData[parseInt(id, 10)]

  const dateStart = new Date(event.dateStart).toLocaleString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })

  const calendarEvent = {
    header:
      'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//VROOM Event//EN\nCALSCALE:GREGORIAN\n\nBEGIN:VEVENT\nSUMMARY:',
    summary: event.title,
    start: event.dateStart,
    end: event.dateEnd,
    location: event.location,
    footer: '\nEND:VEVENT\n\nEND:VCALENDAR\n',
  }

  const formatICSTime = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0')
    const text = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
    return text
  }

  const formatICSEvent = () => {
    const file = `${calendarEvent.header}${calendarEvent.summary}\nDTSTART;TZID=Pacific/Auckland:${formatICSTime(new Date(calendarEvent.start))}\nDTEND;TZID=Pacific/Auckland:${formatICSTime(new Date(calendarEvent.end))}\nLOCATION:${calendarEvent.location}${calendarEvent.footer}`
    return file
  }

  const handleDownload = () => {
    const content = formatICSEvent()

    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `${event.title}.ics`
    link.click()

    URL.revokeObjectURL(url) // Clean up
  }

  return (
    <div className="content-page">
      {/*copied top header*/}
      <div className="background-image">
        <Image
          src="/images/20250412_094454.jpg"
          className="background-image"
          alt="Event Details"
          fill
        />
        <div className="background-gradient" />
        <h1>Event Details</h1>
      </div>
      {/*customised content for the page*/}
      <div className="content">
        <div className="event-details-content">
          <div className="event-details-back">
            <Link href="/events" className="event-details-back">
              BACK
            </Link>
          </div>

          <div className="event-details-tile">
            <div className="event-details-tile-content">
              <div>
                <h2>{dateStart}</h2>
                <h2>{event.location}</h2>
                <h3>
                  {event.title}
                  <div>
                    <button onClick={handleDownload}>Export Event</button>
                  </div>
                  <p>Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur.</p>
                </h3>
                <div className="event-details-line"></div>
                <h4>
                  {event.title}
                  <p>{event.info}</p>
                </h4>
                <a
                  className="event-details-form-link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeNOzbSG3_NEg7f2MI6gHIZT--DYf1WDyWIqf--vKpQTaUi5w/viewform?usp=dialog"
                >
                  Click for form.
                </a>
                <iframe
                  className="event-details-form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeNOzbSG3_NEg7f2MI6gHIZT--DYf1WDyWIqf--vKpQTaUi5w/viewform?embedded=true"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
