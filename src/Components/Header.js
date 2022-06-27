import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import Navigation from './Navigation'
import {
  IoIosFootball,
  IoIosBasketball,
  IoIosBaseball
} from 'react-icons/io'
import logo from '../img/Logo.png'

function Header() {
  return (
    <div className='Header'>
        <nav>
          <div className="left">
            <Link to="/">
              <img src={logo} alt="logo" />
              <span>SportScore</span>
            </Link>
          </div>
          <div className="right">
            <Navigation />
          </div>
        </nav>
        <div className="sport-tabs">
          <Link to="/football" className='left-sport-tab active'>
            <IoIosFootball />
            Football
          </Link>
          <Link to="/basketball">
            <IoIosBasketball />
            Basketball
          </Link>
          <Link to="/cricket" className='right-sport-tab'>
            <IoIosBaseball />
            Cricket
          </Link>
        </div>
    </div>
  )
}

export default Header