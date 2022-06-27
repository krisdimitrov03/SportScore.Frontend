import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function Logout() {
  return <Navigate to="/" />
}

export default Logout