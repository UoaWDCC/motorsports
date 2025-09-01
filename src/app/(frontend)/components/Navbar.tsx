'use client'

import React, { useState } from 'react'
import HamburgerMenu from './HamburgerMenu'
import { HamburgerClose, HamburgerMenu as HamburgerMenuIcon } from './Icon/HamburgerMenuIcons'
import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

export default function Navbar() {
  const showExtraButtons = false // This hides the extra buttons we added initially.
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeBurgerMenu = () => setClick(false)

  return (
    <div id="navbar" className="navbarContainer">
      <div className="navbar">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Vroom Logo"
            className="logo"
            width={80}
            height={75.47}
          />
        </Link>
        <div className="nav-button-container">
          <Link href="/" className="nav-button nav-home">
            Home
          </Link>

          <Link href="/events" className="nav-button">
            Events
          </Link>

          {/* Gallery Page   */}
          <Link href="/gallery" className="nav-button">
            Gallery
          </Link>

          <Link href="/about-us" className="nav-button">
            About Us
          </Link>

          {showExtraButtons && (
            <>
              <Link href="/volunteers" className="nav-button">
                Volunteer
              </Link>

              {/* ExecsPage   */}
              <Link href="/execs" className="nav-button">
                Executives
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
            </>
          )}
        </div>
        <div className="nav-login-container">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd8xNM5pR0KHjetb26VmL0A01kuA9fKvTslk6GtVNm9ldbmOw/viewform" //Links to the google form to sign up for vroom
            className="nav-login"
            target="_blank"
          >
            SIGNUP
          </a>
        </div>

        {click ? (
          <HamburgerClose className="hamburger-menu-icon" onClick={handleClick} />
        ) : (
          <HamburgerMenuIcon
            width={28}
            height={28}
            className="hamburger-menu-icon"
            onClick={handleClick}
          />
        )}
        <HamburgerMenu click={click} closeBurgerMenu={closeBurgerMenu} />
      </div>
    </div>
  )
}
