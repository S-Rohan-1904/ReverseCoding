import Loader from "../components/Loader/Loader"
import React from 'react'
import './DelayedStart.css'


function DelayedStart() {
  return (
    <div className="abc">   
        <h1 className='textColor'>The event will start @ 20:00:00 PM on 27th February 2023</h1>
        <div className="load"><Loader /></div>
        
        {/* <img src={gif} alt="Wait"></img> */}
        {/* <Spline scene="https://draft.spline.design/z6zpfoM97uLRGs3c/scene.spline" className='design'/> */}
        
    </div>    
        
  )
}
export default DelayedStart 
