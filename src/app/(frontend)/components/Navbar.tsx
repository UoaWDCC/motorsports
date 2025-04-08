import React from 'react'
import Link from 'next/link'
import './styles.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  )
}
