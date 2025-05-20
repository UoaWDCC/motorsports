import React from 'react'
import Link from 'next/link'
import './styles.css'

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <img src="/images/logo.png" alt="Vroom Logo" className="logo" />
<div className="nav-button-container">
        <Link href="/" className="nav-button nav-home">
          Home
        </Link>

        <Link href="/events" className="nav-button">
          Events
        </Link>

        {
          <Link href="/volunteers" className="nav-button">
            Volunteer
          </Link>
        }

        {/* ExecsPage   */}
        <Link href="/execs" className="nav-button">
          Executives
        </Link>

        {/* Gallery Page   */}
        <Link href="/gallery" className="nav-button">
          Gallery
        </Link>

        <Link href="/about-us" className="nav-button">
          About Us
        </Link>

        {/* Signup   */}
        <Link href="/signup" className="nav-button">
          Sign Up
        </Link>

        {/* Login   */}

        {/*TODO: Add link to social media page*/}
        {/*<Link href="/">*/}
        <Link href="https://www.instagram.com/vroom_uoa/" className="nav-button">
          Social Media
        </Link>
</div>
        <Link href="/login" className="nav-login">
          LOGIN
        </Link>
        
      </div>
    </div>
  )
}
