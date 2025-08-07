'use client'
import Link from 'next/link'
import './styles.css'

type HamburgerMenuProps = {
  click: boolean
  closeBurgerMenu: () => void
}

export default function HamburgerMenu(props: HamburgerMenuProps) {
  return (
    <ul className={props.click ? 'hamburger-menu active' : 'hamburger-menu'}>
      <li className="hamburger-item">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd8xNM5pR0KHjetb26VmL0A01kuA9fKvTslk6GtVNm9ldbmOw/viewform" //Links to the google form to sign up for vroom
          className="hamburger-login"
          target="_blank"
        >
          SIGNUP
        </a>
      </li>
      <li className="hamburger-item">
        <Link href="/" className="hamburger-link" onClick={props.closeBurgerMenu}>
          Home
        </Link>
      </li>
      <li className="hamburger-item">
        <Link href="/events" className="hamburger-link" onClick={props.closeBurgerMenu}>
          Events
        </Link>
      </li>
      <li className="hamburger-item">
        <Link href="/gallery" className="hamburger-link" onClick={props.closeBurgerMenu}>
          Gallery
        </Link>
      </li>
      <li className="hamburger-item">
        <Link href="/about-us" className="hamburger-link" onClick={props.closeBurgerMenu}>
          About Us
        </Link>
      </li>
    </ul>
  )
}
