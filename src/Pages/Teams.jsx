import React from 'react'

import Stripe from '../Components/stripe'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import Footer from '../Components/Footer'
import TeamSection from '../Components/TeamSection'
function Gallery() {
  return (
    <>
    <Stripe/>
    <Navbar/>
    <br /><br /><br /><br /> 
    <Heading mainHeading ="APL" subHeading ="TEAMS"/>  
    <TeamSection/>

     <Footer/> 
    </>
  )
}

export default Gallery