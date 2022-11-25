import React from 'react'
import'../cssFiles/videoSection.css'

function VideoSection() {
  return (
<div className='vid'><ul class="card-wrapper">
  <li class="card">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/Rq0EmCsPVno?start=377" title="YouTube video player" frameborder="0"></iframe>
    <h3><a href="">A Super Wonderful Headline</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li>
  
   <li class="card">
   <iframe width="100%" height="315" src="https://www.youtube.com/embed/5k58kWEuwJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;" ></iframe>
    <h3><a href="">A Super Wonderful Headline</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li> 

  <li class="card">
    <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt=''/>
    <h3><a href="">A Super Wonderful Headline</a></h3>
    <p>Lorem ipsum sit dolor amit</p>
  </li> 
</ul></div>
  )
}

export default VideoSection