'use client'

import React from 'react'
import Link from 'next/link'
import './styles.css'
import ScrollToNavbarButton from './ScrollButton'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-button-container">
        <Link href="/" className="foot-button foot-home">
          HOME
        </Link>

        <Link href="/events" className="foot-button">
          EVENTS
        </Link>

        <Link href="/gallery" className="foot-button">
          GALLERY
        </Link>

        <Link href="/about-us" className="foot-button">
          ABOUT US
        </Link>

        <Link href="/" className="foot-button">
          LOGIN
        </Link>

        <Link href="/volunteers" className="foot-button">
          VOLUNTEER
        </Link>

        <Link href="/signup" className="foot-button">
          SIGN UP
        </Link>
        <div className="arrow-image-container">
          <ScrollToNavbarButton />
        </div>
      </div>
    </div>
  )
}
