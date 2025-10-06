'use client'

import React from 'react'
import { animate } from 'framer-motion'
import { UpArrowIcon } from './Icon/NavigationIcons'

export const handleClick = () => {
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



  



export default function ScrollToNavbarButton(){

return (
    <div>
      <UpArrowIcon 
        width={50}
        height={50}
        onClick={handleClick}
      />
    </div>
  )
}