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
          <Link href="/events">
            <button>Back</button>
          </Link>
        </div>
        <div className="event-details-tile">
          <div className="event-details-content">
            <div className="event-details-headers">
              <h2 style={{ display: 'inline-block' }}>TUE 15 FEB @ 12:30AM</h2>
              <h2 style={{ display: 'inline-block', marginLeft: '4rem' }}>2ND FLOOR KATE EDGAR</h2>
              <h1>VROOM 2025 NEWS</h1>
              <h3>Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur.</h3>
              <div
                style={{ display: 'inline-block', marginTop: '2rem', marginLeft: '2rem' }}
                className="event-details-line"
              ></div>
              <h4 style={{ display: 'inline-block', marginTop: '3rem' }}>VROOM 2025 NEWS</h4>
              <h3>
                Morbi molestie bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie
                bibendum malesuada. Aenean vitae arcu consectetur. Morbi molestie bibendum
                malesuada. Aenean vitae arcu consectetur.Morbi molestie bibendum malesuada. Aenean
                vitae arcu consectetur.Morbi molestie bibendum malesuada. Aenean vitae arcu
                consectetur.Morbi molestie bibendum malesuada.
              </h3>
              <a
                style={{ display: 'inline-block', marginTop: '4rem', marginBottom: '3rem' }}
                href="https://www.google.com"
              >
                Click for form.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
