import React from 'react'
import './styles.css'
import PodiumCircle from './PodiumCircles'
import RaceData from './LeaderboardData'
import CreateTable from './BoardBuilder'
export default function Leaderboard() {
  const podiumWidth = 5
  const firstCirc = PodiumCircle(150, podiumWidth, 1)
  const secondCirc = PodiumCircle(120, podiumWidth, 2)
  const thirdCirc = PodiumCircle(120, podiumWidth, 3)
  const raceData = RaceData()

  return (
    <div>
      <div className="leaderboard-tile-content">
        <h2>Name of Event</h2>
        <h2 className="top-right">DD/MM/YYYY</h2>
        <div>
          <div style={{ marginLeft: '25%', display: 'inline-block' }}>{secondCirc}</div>
          <div style={{ marginLeft: '5%', display: 'inline-block' }}>{firstCirc}</div>
          <div style={{ marginLeft: '5%', display: 'inline-block' }}>{thirdCirc}</div>
        </div>
      </div>

      {CreateTable({ data: raceData })}
    </div>
  )
}
