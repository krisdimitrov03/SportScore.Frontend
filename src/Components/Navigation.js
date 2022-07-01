import React from 'react'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { BsFillBellFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../UserContext'
import authService from '../Services/authService'

function Navigation() {
  const { user, setUser } = useContext(UserContext);

  function OnLogout() {
    authService.logUserOut(setUser);
  }
  
  return (
    <>
    {
      user === null
      ?
      <>
        <Link to="/login"><BiLogIn />Log in</Link>
        <Link to="/register" className='sign-up'>Sign up</Link>
      </>
      : 
      <>
        <Link to="/favourites"><BsFillBellFill />Favourites</Link>
        <Link to={`/profile/${user.id}`} className="profile">
          <img src={user.profileImage} alt="Profile Picture" />
          <span>Profile</span>
        </Link>
        <Link onClick={OnLogout} to="/logout"><BiLogOut />Log out</Link>
      </>
      }
      </>
  )
}

export default Navigation