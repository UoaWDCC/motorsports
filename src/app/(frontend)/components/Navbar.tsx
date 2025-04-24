import React from 'react'
import Link from 'next/link'
import './styles.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <button>Home</button>
      </Link>

      <Link href="/events">
        <button>Events</button>
      </Link>

      {/* EventsPage   */}

      {/* VolunteerPage   */}

      {/* ExecsPage   */}

      {/* Gallery Page   */}

      {/* About us Page   */}

      {/* Signup   */}

      {/* Social media   */}
    </div>
  )
}
