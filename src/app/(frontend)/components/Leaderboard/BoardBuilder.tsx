import React from 'react'
import './styles.css'
import PodiumCircle from './PodiumCircles'
import type { RaceData } from './LeaderboardData'

export default function CreateTable({ data }: { data: RaceData[] }) {
  return (
    <div className="board">
      <table id="board">
        <tbody>
          <tr className="primary">
            <td className="portrait"></td>
            <td className="name">Driver Name</td>
            <td className="position">Position</td>
            <td className="score">Score</td>
          </tr>
          {data.map((row, index) => {
            const tableWidth = 8 / 3
            let time
            if (row.time > 0) {
              const min = Math.floor(row.time / 60)
              const sec = Math.floor(row.time % 60)
              time = `${min}:${sec.toString().padStart(2, '0')}`
            } else {
              time = 'dnf'
            }
            return (
              <tr className={index % 2 === 0 ? 'primary' : 'secondary'} key={index}>
                <td className="portrait">{PodiumCircle(50, tableWidth, index + 1)}</td>
                <td className="name">{row.name}</td>
                <td className="position">{index + 1}</td>
                <td className="score">{time}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
