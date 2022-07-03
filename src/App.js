// import { useState, useMemo } from 'react';
// import authService from './Services/authService'
// import { getCookie } from './Services/cookieService';
// import { UserContext } from './UserContext'
// import Login from './Components/Auth/Login';
// import Register from './Components/Auth/Register';
// import Logout from './Components/Auth/Logout';

import './App.css';
import { Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header';
import FootballMain from './Components/Football/FootballMain';
import ProblemPage from './Components/ProblemPage';
import TeamDetails from './Components/Football/Details/TeamDetails'
import { getTeamDetails } from './Services/teamService'


function App() {
  // let [user, setUser] = useState(null);
  // const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  // if (getCookie("SportScoreUSR") !== "") {
  //   var userFromServer = authService.getUserForNav(getCookie("SportScoreUSR"));
  //   user = userFromServer;
  // }

  return (
    <Router>
      <div className="App">
        {/* <UserContext.Provider value={providerUser}> */}
        <Header />

        <Routes>
          <Route path='/' element={<Navigate to="/football" />}></Route>

          <Route path='/football/*' element={
            <FootballMain />}>
          </Route>

          <Route path='/basketball' element={
            <ProblemPage
              h1={'COMMING SOON'}
              p={'This functionality is in process of development yet.'} />}>
          </Route>
          <Route path='/cricket' element={
            <ProblemPage
              h1={'COMMING SOON'}
              p={'This functionality is in process of development yet.'} />}>
          </Route>
          {/* <Route path='/login' element={<Login logUserIn={authService.logUserIn} />}>
            </Route>
            <Route path='/register' element={<Register />}>
            </Route>
            <Route path='/logout' element={<Logout logUserOut={authService.logUserOut} />}>
            </Route> */}
          <Route path='football/teams/details/:id' element={
            <TeamDetails getTeam={async (id) => await getTeamDetails(id)} />}>
          </Route>
          <Route path='/comming-soon' element={
            <ProblemPage
              h1={'COMMING SOON'}
              p={'This functionality is in process of development yet.'} />
          }>
          </Route>
          <Route path='/*' element={<ProblemPage h1={'NOT FOUND'} />}></Route>
        </Routes>

        {/* </UserContext.Provider> */}
      </div>
    </Router >
  );
}

export default App;
