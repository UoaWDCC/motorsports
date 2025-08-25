'use client'
import { animate } from 'framer-motion'
import { UpArrowIcon } from './Icon'

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
    <UpArrowIcon 
      width={50}
      height={50}
      onClick={handleClick}
    />
  )
}

