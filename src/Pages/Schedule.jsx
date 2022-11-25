import React from 'react'
import Stripe from '../Components/stripe'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import Footer from '../Components/Footer'
import TeamSection from '../Components/TeamSection'
function schedule() {
  return (
    <>
    <Stripe/>
    <Navbar/>
    <br /><br /><br /><br /> 
    <Heading mainHeading ="APL" subHeading ="Schedule"/>  
  
     <Footer/> 
    </>
)}

export default schedule