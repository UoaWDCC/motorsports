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

      {/* About us Page   */}

      {/* Signup   */}
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>

      {/* Social media   */}
    </div>
  )
}
