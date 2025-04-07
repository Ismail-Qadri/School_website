import React from 'react'
import Navbar from './Navbar'
import Home from '../Sections/Home'
import AboutUs from '../Sections/AboutUs'
import Messages from '../Sections/Messages'
import Infrastructure from '../Sections/Infrastructure'
import Contact from '../Sections/Contact'
import Achievements from '../Sections/Achievements'
import Marquee from '../Sections/Marquee'
import Gallery from '../Sections/Gallery'
// import { Faculties } from '../Sections/FacultyInfo/'
import FacultyInfo from '../Sections/FacultyInfo/'

const LandingPage = () => {
  return (
    <div>
    <Navbar />
    <Marquee />
    <Home />
    <AboutUs />
    <Messages />
    <FacultyInfo />
    <Achievements />
    <Gallery />
    <Infrastructure />
    <Contact/>
    </div>
  )
}

export default LandingPage