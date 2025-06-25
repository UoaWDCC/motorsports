'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './styles.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState(false)
  const showExtraButtons = false // This hides the extra buttons we added initially.

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 500
      setIsMobile(mobile)

      // If screen is NOT mobile, forcefully close the menu
      if (!mobile) {
        setMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Hack fix: Unsure why but LandingPage component is on a higher z-index no matter what I do
  //           when burger menu is showing, so I am manually hide it all when the menu is shown
  useEffect(() => {
    const landingSection = document.querySelector('.landing-screen') as HTMLElement | null

    if (landingSection) {
      landingSection.style.display = menuOpen ? 'none' : ''
    }
  }, [menuOpen])
  
  return (
    <div id="navbar" className="navbarContainer">
      <div className="navbar">
        <Link href="/">
        <Image src="/images/logo.png" alt="Vroom Logo" className="logo" width={80} height={75.47} />
        </Link>

        {/* Burger Icon */}
        <button
          className={ `burger ${ menuOpen ? 'open' : 'closed'} ` }
          onClick={ () => setMenuOpen(!menuOpen) }>
            <span></span>
            <span></span>
            <span></span>
        </button>

        {/* Slide-in menu */}
        <div className={ `nav-button-container slide-menu ${ menuOpen ? 'active' : '' }` }>
          <div className='navbar-items'>
            <Link href="/" className="nav-button nav-home" onClick={ () => setMenuOpen(false) }>
              Home
            </Link>

            <Link href="/events" className="nav-button" onClick={ () => setMenuOpen(false) }>
              Events
            </Link>

            {/* Gallery Page   */}
            <Link href="/gallery" className="nav-button" onClick={ () => setMenuOpen(false) }>
              Gallery
            </Link>

            <Link href="/about-us" className="nav-button" onClick={ () => setMenuOpen(false) }>
              About Us
            </Link>

            <Link href="/" className="nav-button" onClick={ () => setMenuOpen(false) }> {/*Links to the home page as a placeholder for the future login button*/}
              Login
            </Link>
          </div>

          {showExtraButtons && (
            <>
              <Link href="/volunteers" className="nav-button" onClick={ () => setMenuOpen(false) }>
                Volunteer
              </Link>

              {/* ExecsPage   */}
              <Link href="/execs" className="nav-button" onClick={ () => setMenuOpen(false) }>
                Executives
              </Link>
              
              {/* Signup   */}
              <Link href="/signup" className="nav-button" onClick={ () => setMenuOpen(false) }>
                Sign Up
              </Link>

              {/* Login   */}

              {/*TODO: Add link to social media page*/}
              {/*<Link href="/">*/}
              <Link href="https://www.instagram.com/vroom_uoa/" className="nav-button" onClick={ () => setMenuOpen(false) }>
                Social Media
              </Link>
            </>
          )}
        </div>


        {/*Links to the home page as a placeholder for the future login button*/}
        {/* <div className="nav-login-container">
        <Link href="/" className="nav-login"> 
          LOGIN
        </Link>
        </div> */}
      </div>

      {menuOpen && <div className="menu-overlay" onClick={ () => setMenuOpen(false) }></div>}
    </div>
  )
}
