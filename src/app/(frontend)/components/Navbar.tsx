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

      {<Link href="/volunteerPage">
        <button>Volunteer</button>
      </Link>}

      {/* ExecsPage   */}

      {/* Gallery Page   */}

      {/* About us Page   */}

      {/* Signup   */}

      {/* Social media   */}
    </div>
  )
}
