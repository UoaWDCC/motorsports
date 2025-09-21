import './styles.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Leaderboard from '../components/Leaderboard/Leaderboard'
export default function LeaderboardPage() {
  return (
    <div className="content-page">
      {/*copied top header*/}
      <div className="background-image">
        <Image
          src="/images/20250412_094454.jpg"
          className="background-image"
          alt="Event Details"
          fill
        />
        <div className="background-gradient" />
        <h1>Leaderboard</h1>
      </div>
      {/*customised content for the page*/}
      <div className="content">
        <div className="leaderboard-content">
          <div className="button-back">
            <Link href="/" className="button-back">
              BACK
            </Link>
          </div>

          <div className="leaderboard-tile">
            <Leaderboard></Leaderboard>
          </div>
        </div>
      </div>
    </div>
  )
}
