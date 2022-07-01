import { setCookie, getCookie, removeCookie } from '../Services/cookieService';
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

const logUserOut = (setUser) => {
    removeCookie("SportScoreUSR");
    setUser(null);
 }


export default {
    logUserIn,
    registerUser,
    logUserOut
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