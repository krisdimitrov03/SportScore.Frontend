import React from 'react'
import { BiLogIn } from 'react-icons/bi'

function Navigation(user) {
  if (user.id) {
    return (
      <>
        <a href=""><BiLogIn />Log in</a>
        <a href="">Sign up</a>
      </>
    )
  } else {
    return (
      <>
        <a href="" className="profile">
          <img src={client.profilePicture} alt="Profile Picture" />
          <span>{client.username}</span>
        </a>
        <a href="">Watch</a>
        <a href="">Log out</a>
      </>
    )
  }
}

export default Navigation