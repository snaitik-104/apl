import React from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Stripe from '../Components/stripe'
import TeamSlider from '../Components/TeamSlider'
import Heading from '../Components/Heading'
import VideoSection from '../Components/VideoSection'
import Billboards from '../Components/Billboards'
import Footer from '../Components/Footer'
import AplStats from '../Components/AplStats'

function Home() {
  return (
  <>
  <Stripe />
  <Navbar/>
  <Slider/>
  <Heading mainHeading ="APL" subHeading ="Stats"/>
  <AplStats/>
  <Heading mainHeading ="APL" subHeading ="Teams"/>
  <TeamSlider/>
  <Heading mainHeading ="APL" subHeading ="Billboards"/>
  <Billboards/>
  <Heading mainHeading ="APL" subHeading ="Highlights"/>
  <VideoSection/>
  <Footer/>
  
  </>
  )
}

export default Home