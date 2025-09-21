import React from 'react'
import './styles.css'
import PodiumCircle from './PodiumCircles'
export default function Leadboarder() {
  const firstCirc = PodiumCircle(150, 1)
  const secondCirc = PodiumCircle(120, 2)
  const thirdCirc = PodiumCircle(120, 3)
  return (
    <div>
      <div>
        <h2>Name of Event</h2>
        <h2 className="top-right">DD/MM/YYYY</h2>
      </div>
      <div>
        <div style={{ marginLeft: '20%', display: 'inline-block' }}>{secondCirc}</div>
        <div style={{ marginLeft: '5%', display: 'inline-block' }}>{firstCirc}</div>
        <div style={{ marginLeft: '5%', display: 'inline-block' }}>{thirdCirc}</div>
      </div>
    </div>
  )
}
