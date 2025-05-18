import React from 'react'
import Link from 'next/link'
export default function EventsPage() {
  return (
    <div>
      <h1>Event Details Page</h1>
      <p>Temp Page</p>
      <div>
        <Link href="/events-details">
          <button>Details</button>
        </Link>
      </div>
    </div>
  )
}
