import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Courses from './Components/Courses/Courses'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/><br></br>
      <Courses/>
    </div>
  )
}

export default App

// npm run dev