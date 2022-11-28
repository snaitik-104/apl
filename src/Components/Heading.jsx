import React from 'react'
import '../cssFiles/heading.css'
function Heading(prop) {
  return (
    <h1 class="heading"> {prop.mainHeading}<span>{prop.subHeading}</span> </h1>
  )
}

export default Heading