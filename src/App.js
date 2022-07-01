import './App.css';
import { useEffect, useState, useMemo } from 'react';
import { Navigate, Routes, Route, BrowserRouter as Router, useParams } from 'react-router-dom'
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
import MatchDetails from './Components/MatchDetails';
import LeagueDetails from './Components/LeagueDetails';

import { loadLeaguesByCountry, getLeagueDetails } from './Services/leagueService'
import { loadLivescoreByLeague, loadFixturesByLeague, getMatchDetails } from './Services/fixtureService'


function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [fixturesState, setFixturesState] = useState("live");
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);

  if (getCookie("SportScoreUSR") !== "") {
  }

  useEffect(() => {
    loadLeaguesByCountry(setLeagues);
    loadLivescoreByLeague(setFixtures);
    setFixturesState('live');

  }, []);

  // setInterval(() => {
  //   if (fixturesState === 'live') {
  //     setFixturesState('live');
  //     loadLivescoreByLeague(setFixtures);
  //   } else {
  //     setFixturesState('all');
  //     loadFixturesByLeague(setFixtures);
  //   }
  // }, 3000);

  const onShowOrHideLeagues = (country) => {
    setLeagues(leagues.map(e => {
      if (e.countryId === country.countryId) {
        e = e.visible === 'none'
          ? { ...e, visible: 'yes' }
          : { ...e, visible: 'none' }
      }

      return e;
    }));
  }

  const onFixturesStateChange = (state) => {
    setFixtures([]);
    if (state === 'all') {
      setFixturesState('live');
      loadLivescoreByLeague(setFixtures, setFixturesState);
    } else {
      setFixturesState('all');
      loadFixturesByLeague(setFixtures, setFixturesState);
    }
  }

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={providerUser}>
          <Header />

          <Routes>
            <Route path='/' element={<Navigate to="/football" />}></Route>

            <Route path='/football' element={
              <FootballHome
                leagues={leagues}
                fixtures={fixtures}
                state={fixturesState}
                onShowOrHide={onShowOrHideLeagues}
                onStateChange={onFixturesStateChange} />}>
            </Route>

            <Route path='/basketball' element={<CommingSoon />}>
            </Route>
            <Route path='/cricket' element={<CommingSoon />}>
            </Route>
            <Route path='/login' element={<Login logUserIn={authService.logUserIn} />}>
            </Route>
            <Route path='/register' element={<Register />}>
            </Route>
            <Route path='/logout' element={<Logout logUserOut={authService.logUserOut} />}>
            </Route>
            <Route path='/football/matches/details/:id' element={
              <MatchDetails getMatch={async (id) => await getMatchDetails(id)} />}>
            </Route>
            <Route path='/football/leagues/details/:id' element={
              <LeagueDetails getLeague={async (id) => await getLeagueDetails(id)} />}>
            </Route>
          </Routes>

          <Footer />
        </UserContext.Provider>
      </div>
    </Router >
  );
}

export default App;
