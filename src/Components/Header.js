import React from 'react'
import Navigation from './Navigation'
import { 
  IoIosFootball,
  IoIosBasketball,
  IoIosBaseball 
} from 'react-icons/io'
import logo from '../img/Logo.png'

function Header({ user }) {
  return (
    <div className='Header'>
      <nav>
        <div className="left">
          <img src={logo} alt="logo" />
          <span>SportScore</span>
        </div>
        <div className="right">
          <Navigation user={user} />
        </div>
      </nav>
      <div className="sport-tabs">
        <a href="" className='left-sport-tab active'>
          <IoIosFootball />
          Football
        </a>
        <a href="">
          <IoIosBasketball />
          Basketball
        </a>
        <a href="" className='right-sport-tab'>
          <IoIosBaseball />
          Cricket
        </a>
      </div>
    </div>
  )
}

export default Header