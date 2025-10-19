'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import './styles.css'
import { handleClick as scrollToNavbar } from './ScrollButton'
import { UpArrowIcon } from './Icon/NavigationIcons'

export default function Footer() {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const [hasMoved, setHasMoved] = useState(false) //to prevent the page from autoscrolling on drag

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
    setHasMoved(false)
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    setHasMoved(true)
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  })

  const handleClick = () => {
    if (!hasMoved) {
      scrollToNavbar()
      setPosition({
        x: 0,
        y: 0,
      })
    }
    setHasMoved(false)
  }

  return (
    <div className="footer-container">
      <div className="footer-button-container">
        <Link href="/" className="foot-button foot-home">
          HOME
        </Link>

        <Link href="/events" className="foot-button">
          EVENTS
        </Link>

        <Link href="/gallery" className="foot-button">
          GALLERY
        </Link>

        <Link href="/about-us" className="foot-button">
          ABOUT US
        </Link>

        <Link href="/admin" className="admin-button foot-button">
          ADMIN
        </Link>

        <div
          className="arrow-image-container"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            userSelect: 'none',
          }}
          onClick={handleClick}
          onMouseDown={handleMouseDown}
        >
          <UpArrowIcon width={50} height={50} />
        </div>
      </div>
    </div>
  )
}
