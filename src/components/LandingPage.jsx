import React from 'react'
import Navbar from './Navbar'
import Home from '../Sections/Home'
import AboutUs from '../Sections/AboutUs'
import Messages from '../Sections/Messages'
import Infrastructure from '../Sections/Infrastructure'
import Contact from '../Sections/Contact'
import Achievements from '../Sections/Achievements'
import Marquee from '../Sections/Marquee'

const LandingPage = () => {
  return (
    <div>
    <Navbar />
    <Marquee />
    <Home />
    <AboutUs />
    <Messages />
    <Achievements />
    <Infrastructure />
    <Contact/>
    </div>
  )
}

export default LandingPage