import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function Login({ logUserIn }) {
  const { user, setUser } = useContext(UserContext);

  const onLogin = () => {
    logUserIn('petar-oborev@gmail.com', 'Petyo@29', setUser);
  }

  if(user !== null){
    return <Navigate to='/' />
  }

  return (
    <div>
      <button onClick={onLogin}>Log in</button>
    </div>
  )
}

export default Login