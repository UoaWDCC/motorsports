'use client'
import { animate } from 'framer-motion'
import Image from 'next/image'

export default function ScrollToNavbarButton() {
  const handleClick = () => {
    const target = document.getElementById('navbar')
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY

      animate(window.scrollY, targetTop, {
        type: 'spring',
        mass: 1,
        stiffness: 80,
        damping: 20,
        onUpdate: (latest) => window.scrollTo(0, latest),
      })
    }
  }

  return (
    <Image
      src="/images/up-arrow.png"
      alt="Scroll to navbar"
      width={50}
      height={50}
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    />
  )
}