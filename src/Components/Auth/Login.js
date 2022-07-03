import React from 'react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'

function Login({ logUserIn }) {
  const { user, setUser } = useContext(UserContext);

  const onLogin = (e) => {
    e.preventDefault();
    logUserIn('petar-oborev@gmail.com', 'Petyo@29', setUser);
  }

  if(user !== null){
    return <Navigate to='/' />
  }

  return (
    <div className="login-form">
      <form action="">
        <input type="submit" onClick={onLogin} value="Log in" />
      </form>
    </div>
  )
}

export default Login