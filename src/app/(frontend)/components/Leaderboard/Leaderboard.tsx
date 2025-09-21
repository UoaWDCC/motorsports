import React from 'react'
import './styles.css'
import PodiumCircle from './PodiumCircles'
export default function Leaderboard() {
  const podiumWidth = 5
  const tableWidth = 8 / 3
  const firstCirc = PodiumCircle(150, podiumWidth, 1)
  const secondCirc = PodiumCircle(120, podiumWidth, 2)
  const thirdCirc = PodiumCircle(120, podiumWidth, 3)
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

      <div className="board">
        <div className="board-header"></div>
        <div className="board-row">
          <table id="board">
            <tbody>
              <tr>
                <td className="portrait"></td>
                <td className="name">Driver Name</td>
                <td className="postion">Position</td>
                <td className="score">Score</td>
              </tr>
              <tr style={{ backgroundColor: '#F6F6F6' }}>
                <td className="portrait">{PodiumCircle(50, tableWidth, 1)}</td>
                <td className="name">deez</td>
                <td className="postion">1</td>
                <td className="score">1:56</td>
              </tr>
              <tr style={{ backgroundColor: '#fff' }}>
                <td className="portrait">{PodiumCircle(50, tableWidth, 2)}</td>
                <td className="name">deez</td>
                <td className="postion">2</td>
                <td className="score">1:56</td>
              </tr>
              <tr style={{ backgroundColor: '#F6F6F6' }}>
                <td className="portrait">{PodiumCircle(50, tableWidth, 3)}</td>
                <td className="name">deez</td>
                <td className="postion">3</td>
                <td className="score">1:56</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// function(){

// }
