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

      {<Link href="/volunteerPage">
        <button>Volunteer</button>
      </Link>}

      {/* ExecsPage   */}

      {/* Gallery Page   */}
      <Link href="/gallery">
        <button>Gallery</button>
      </Link>

      <Link href="/about-us">
        <button>About Us</button>
      </Link>

      {/* Signup   */}
      <Link href="/signup">
        <button>Sign Up</button>
      </Link>

      {/* Social media   */}

      {/*TODO: Add link to social media page*/}
      {/*<Link href="/">*/}
      <Link href="https://www.instagram.com/vroom_uoa/">
        <button>Social Media</button>
      </Link>
    </div>
  )
}
