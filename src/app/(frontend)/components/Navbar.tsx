import React from 'react'
import Link from 'next/link'
import './styles.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <button>Home</button>
      </Link>

      {/* Add more links here */}

      {/* EventsPage   */}

      {/* VolunteerPage   */}

      {/* ExecsPage   */}

      {/* Gallery Page   */}
      <Link href="/gallery">
        <button>Gallery</button>
      </Link>

      {/* About us Page   */}

      {/* Signup   */}

      {/* Social media   */}
    </div>
  )
}
