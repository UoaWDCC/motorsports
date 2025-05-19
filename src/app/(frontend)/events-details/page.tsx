import '../styles.css'
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
      {/*customised content for the page*/}
      <div className="content">
        <div className="event-details-back">
          <Link href="/events" className="event-details-back">
            BACK
          </Link>
        </div>
        <div className="event-details-tile">
          <div className="event-details-content">
            <div>
              <h3>TUE 15 FEB @ 12:30AM</h3>
              <h3 style={{ marginLeft: '4rem' }}>2ND FLOOR KATE EDGAR</h3>
              <h2>VROOM 2025 NEWS</h2>
              <p>Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur.</p>
              <div className="event-details-line"></div>
              <h4>VROOM 2025 NEWS</h4>
              <p>
                Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie
                bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie bibendum
                malesuada. Aenean vitae arcu consectetur.Morbi molestie bibendum malesuada. Aenean
                vitae arcu consectetur.Morbi molestie bibendum malesuada. Aenean vitae arcu
                consectetur.Morbi molestie bibendum malesuada.
              </p>
              <a
                className="event-details-form-line"
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
  )
}
