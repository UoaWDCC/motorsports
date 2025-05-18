import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function EventDetailsPage() {
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
    </div>
  )
}
