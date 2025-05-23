import React from 'react'
import Events from './components/Home/Events';
import JoinUs from './components/Home/JoinUs';
import LandingScreen from './components/Home/LandingScreen'; 
import Volunteer from './components/Home/Volunteer';
import Sponsors from './components/Home/Sponsors';
import './styles.css'

export default async function HomePage() {
  return (
    <div>
      {/* <h1>Welcome to Vroom Website !</h1> */}
      <LandingScreen />
      <JoinUs />
      <Events />
      <Volunteer />
      <Sponsors />
    </div>
  )
}
