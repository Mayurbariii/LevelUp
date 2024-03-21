import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import login from '../../Components/login/login.jsx'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} className='logo'></img>
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Contact</li>
        
      </ul>
      <div className="btn">
        <a><button className='btn-login' href='www.google.com' onClick={login}>Log in</button></a>
        <button className='btn-signup'>Sign Up</button>
      </div>
        
    </nav>
  )
}

export default Navbar
