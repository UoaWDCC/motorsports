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

      {/* Social media   */}

      {/*TODO: Add link to social media page*/}
      {/*<Link href="/">*/}
      <Link href="https://www.instagram.com/vroom_uoa/">
        <button>Social Media</button>
      </Link>
    </div>
  )
}
