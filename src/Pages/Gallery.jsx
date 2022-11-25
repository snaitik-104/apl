import React from 'react'

import Stripe from '../Components/stripe'
import Navbar from '../Components/Navbar'
import Heading from '../Components/Heading'
import Footer from '../Components/Footer'
// import Billboards from '../Components/Billboards'
import GalleryGrid from '../Components/GalleryGrid'
function Gallery() {
  return (
    <>
    <Stripe/>
    <Navbar/>
    <br /><br /><br /><br /> 
    <Heading mainHeading ="APL" subHeading ="Gallery"/>  
    <GalleryGrid/>

     <Footer/> 
    </>
  )
}

export default Gallery