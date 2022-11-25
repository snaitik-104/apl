import React from 'react'
import Stripe from '../Components/stripe'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import Footer from '../Components/Footer'
import PointsTable from '../Components/PointsTable'
function schedule() {
  return (
    <>
    <Stripe/>
    <Navbar/>
    <br /><br /><br /><br /> 
    <Heading mainHeading ="APL" subHeading ="Standings"/>  
  <PointsTable/>
     <Footer/> 
    </>
)}

export default schedule