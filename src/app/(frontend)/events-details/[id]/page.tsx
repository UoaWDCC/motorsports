import '../../styles.css'
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
