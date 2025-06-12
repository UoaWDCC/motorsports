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
        <div className="event-details-content">
          <div className="event-details-back">
            <Link href="/events" className="event-details-back">
              BACK
            </Link>
          </div>

          <div className="event-details-tile">
            <div className="event-details-tile-content">
              <div>
                <h2>TUE 15 FEB @ 12:30AM</h2>
                <h2>2ND FLOOR KATE EDGAR</h2>
                <h3>
                  VROOM 2025 NEWS
                  <p>Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur.</p>
                </h3>
                <div className="event-details-line"></div>
                <h4>
                  VROOM 2025 NEWS
                  <p>
                    Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie
                    bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie bibendum
                    malesuada. Aenean vitae arcu consectetur. Morbi molestie bibendum malesuada.
                    Aenean vitae arcu consectetur. Morbi molestie bibendum malesuada. Aenean vitae
                    arcu consectetur. Morbi molestie bibendum malesuada.
                  </p>
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
