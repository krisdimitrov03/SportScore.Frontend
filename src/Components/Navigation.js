import React from 'react'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { BsFillBellFill } from 'react-icons/bs'
import profilePicture from '../img/example-profile-picture.jpg';

function Navigation({ user }) {
  return (
    <>
    {
      user.id === undefined
      ?
      <>
        <a href=""><BiLogIn />Log in</a>
        <a href="" className='sign-up'>Sign up</a>
      </>
      : 
      <>
        <a href=""><BsFillBellFill />Favourites</a>
        <a href="" className="profile">
          <img src={profilePicture} alt="Profile Picture" />
          <span>Profile</span>
        </a>
        <a href=""><BiLogOut />Log out</a>
      </>
      }
      </>
  )
}

export default Navigation