import React from 'react'
import Navigation from './Navigation'

function Header(user) {
  return (
    <div className='Header'>
      <nav>
        <div className="left">
          <img src="" alt="logo" />
          <span>SportScore</span>
        </div>
        <div className="right">
          <Navigation client={user} />
        </div>
      </nav>
    </div>
  )
}

export default Header