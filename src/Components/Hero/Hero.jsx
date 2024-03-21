import React from 'react'
import './Hero.css'
import Photos1 from '../../assets/photo-1.png'
import Photos2 from '../../assets/photo-2.png'
import Photos3 from '../../assets/photo-3.png'
import Photos4 from '../../assets/photo-4.png'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-text-left">
            <h1 className='tagline'>Search, save, learn, share <br></br>your knowledge.</h1><br></br>
            <p className='description'>Access the best educational resources for your <br></br>skills. Save your favorites. Join the community.</p><br></br>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Search for skills, topics or resources" type="search" className="input"></input>
            </div>
        </div>
        <div className="hero-text-right">
            <div className="right-1r">
                <img className='photo-1' src={Photos1}></img>
            </div>
            <div className="right-2r">
                <img className='photo-2' src={Photos2}></img>
            </div>
            <div className="right-3r">
                <img className='photo-3' src={Photos4}></img>
            </div>
            <div className="right-4r">
               <img className='photo-4' src={Photos3}></img> 
            </div>
            
        </div>
      
    </div>
    
  )
}

export default Hero
