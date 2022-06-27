import './App.css';
import { useEffect, useState, useMemo } from 'react';
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import authService from './Services/authService'
import { getCookie } from './Services/cookieService';
import { UserContext } from './UserContext'

import Header from './Components/Header';
import Footer from './Components/Footer';
import FootballHome from './Components/FootballHome';
import CommingSoon from './Components/CommingSoon';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Logout from './Components/Auth/Logout';


function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);

  if (getCookie("SportScoreUSR") !== "") {
  }

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={ providerUser }>
          <Header />

          <Routes>
            <Route path='/' element={<Navigate to="/football" />}></Route>
            <Route path='/football' element={<FootballHome />}></Route>
            <Route path='/basketball' element={<CommingSoon />}></Route>
            <Route path='/cricket' element={<CommingSoon />}></Route>
            <Route path='/login' element={<Login logUserIn={authService.logUserIn} />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/logout' element={<Logout logUserOut={authService.logUserOut} />}></Route>
          </Routes>

          <Footer />
        </UserContext.Provider>
      </div>
    </Router >
  );
}

export default App;
