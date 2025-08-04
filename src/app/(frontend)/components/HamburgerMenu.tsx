'use client'
import Link from 'next/link'
import './styles.css'

type HamburgerMenuProps = {
  click: boolean
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  return (
    <ul className={props.click ? 'hamburger-menu active' : 'hamburger-menu'}>
      <li className="nav-item">
        <Link href="/" className="hamburger-item">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/events" className="hamburger-item">
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/gallery" className="hamburger-item">
          Gallery
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/about-us" className="hamburger-item">
          About Us
        </Link>
      </li>
    </ul>
  )
}
