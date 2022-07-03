import { setCookie, removeCookie } from '../Services/cookieService';
import { getFavoritesByUser } from '../Services/favService'

const logUserIn = async (email, password, setUser) => {
  const userFromServer = await fetchUser(email, password);
  const favorites = await getFavoritesByUser(userFromServer.id)

  if (userFromServer !== null) {
    setCookie("SportScoreUSR", userFromServer.accessToken, 3);
    setUser({ ...userFromServer, favorites });
  } else {
    setUser({});
  }
}

const registerUser = () => { }

const logUserOut = async (setUser) => {
  removeCookie("SportScoreUSR");
  setUser(null);
}

const getUserForNav = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
    }
  }

  const res = await fetch(`https://localhost:5001/user/fornav/${token}`, options);
  const data = res.json();
  
  return data.data;
}

export default {
  logUserIn,
  registerUser,
  logUserOut,
  getUserForNav
}

const fetchUser = async (email, password) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
    },
    body: JSON.stringify({ email, password })
  }

  const res = await fetch('https://localhost:5001/user/login', options);
  const data = await res.json();

  return data.data;
}