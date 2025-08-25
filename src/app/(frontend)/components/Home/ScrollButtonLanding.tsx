'use client'
import { animate } from 'framer-motion'
import { DownArrowIcon } from '../Icon'
import './LandingScreen.css'

export default function ScrollDownButton() {
  const handleClick = () => {
    const target = document.getElementById('JoinUs')
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
    <div className="landing-screen-more-container">
      <div className="landing-screen-more" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <span className="landing-screen-more-words">FIND OUT MORE</span>
        <div>
          <DownArrowIcon width={32} height={18} />
        </div>
      </div>
    </div>
  )
}
