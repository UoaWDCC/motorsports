import '../../styles.css'
import './styles.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


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

  const calendarEvent = {
    header:
      'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//VROOM Event//EN\nCALSCALE:GREGORIAN\n\nBEGIN:VEVENT\nSUMMARY:',
    summary: event.title,
    start: event.dateStart,
    end: event.dateEnd,
    location: event.location,
    footer: '\nEND:VEVENT\n\nEND:VCALENDAR\n',
  }

  //Format: YYYYMMDDTHHMMSS
  const formatICSTime = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0')
    const text = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(date.getSeconds())}`
    return text
  }

  const formatICSEvent = () => {
    const file = `${calendarEvent.header}${calendarEvent.summary}\nDTSTART;TZID=Pacific/Auckland:${formatICSTime(new Date(calendarEvent.start))}\nDTEND;TZID=Pacific/Auckland:${formatICSTime(new Date(calendarEvent.end))}\nLOCATION:${calendarEvent.location}${calendarEvent.footer}`
    return file
  }

  const gcParams = {
    // https://calendar.google.com/calendar/render?action=TEMPLATE
    // &text=[EventTitle]
    // &dates=[StartDateTime]/[EndDateTime]
    // &details=[EventDescription]
    // &location=[EventLocation]
    // &ctz=[TimeZone]
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
      <div className="background-image">
        {/* <Image
          src={imageUrl}
          className="background-image"
          alt={event.imageUrl?.alt || event.title}
          fill
        /> */}
        <div className="background-gradient" />
        <h1>Event Details</h1>
      </div>
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
                  <span className="event-details-calendar-icon">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        handleDownload()
                      }}
                    >
                      <Image
                        src="/images/download.png"
                        alt="Add to Google Calendar"
                        width={64}
                        height={64}
                      />
                    </a>
                    <a href={gcAdd()}>
                      <Image
                        src="/images/Google_Calendar_Icon.png"
                        alt="Add to Google Calendar"
                        width={64}
                        height={64}
                      />
                    </a>
                  </span>
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
              <h2 className='event-title'>{event.title}</h2>
              <p>
                <strong>Start:</strong> {dateStart}
                <br />
                <strong>End:</strong> {dateEnd}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <div className="event-details-line"></div>
              <h4>Description</h4>
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
