import React from 'react'
import Faqs from '../components/Faqs'
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
        <Faqs/>
    </div>
  )
}

export default Home