import React from 'react'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Overview from '../components/Overview'


function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Overview/>
        <Features />
    </div>
  )
}

export default Home