import '../../styles.css'
import './styles.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import EventCalendarActions from '../../components/Events/event-calendar-actions'


export default async function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const awaitedParams = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/events/${awaitedParams.id}`, { cache: 'no-store' })
  if (!res.ok) return <div>Event not found</div>
  const event = await res.json()

  const dateStart = new Date(event.dateStart).toLocaleString('en-NZ', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
  const dateEnd = new Date(event.dateEnd).toLocaleString('en-NZ', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })

  // Format: YYYYMMDDTHHMMSS
  const formatICSTime = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0')
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
  }

  const gcParams = {
    text: event.title,
    start: formatICSTime(new Date(event.dateStart)),
    end: formatICSTime(new Date(event.dateEnd)),
    details: event.info,
    location: event.location,
    ctz: 'Pacific/Auckland',
  }

  const gcAdd = () => {
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${gcParams.text}&dates=${gcParams.start}/${gcParams.end}&details=${gcParams.details}&location=${gcParams.location}&ctz=${gcParams.ctz}`
  }

  const formatICSEvent = () => {
    // Example ICS event formatting (customize as needed)
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.title}`,
      `DTSTART:${gcParams.start}`,
      `DTEND:${gcParams.end}`,
      `DESCRIPTION:${event.info}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
  }

  return (
    <div className="content-page">
      <div className="background-image">
        {/* Uncomment and fix imageUrl if you want to show an event image */}
        {/* <Image
          src={imageUrl}
          className="background-image"
          alt={event.imageUrl?.alt || event.title}
          fill
        /> */}

        <div className="event-details-content">
          <div className="event-details-back">
            <Link href="/events" className="event-details-back">
              BACK
            </Link>
          </div>
          <div className="event-details-tile">
            <div className="event-details-tile-content">
              <h2>{dateStart}</h2>
              <h2>{event.location}</h2>
              <h3>
                {event.title}
                

              </h3>
              <EventCalendarActions
                  event={event}
                />
              <div className="event-details-line"></div>
                <p>{event.info}</p>

              {event.formUrl && (
                <>
                  <a
                    className="event-details-form-link"
                    href={event.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click for form.
                  </a>
                  <iframe
                    className="event-details-form"
                    src={event.formUrl}
                    title="Event Form"
                  >
                    Loading…
                  </iframe>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
