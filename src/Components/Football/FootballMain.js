import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MatchDetails from './Details/MatchDetails'
import LeagueDetails from './Details/LeagueDetails'
import Leagues from './Leagues'
import Matches from './Matches'
import { loadLeaguesByCountry, getLeagueDetails } from '../../Services/leagueService'
import { loadLivescoreByLeague, loadFixturesByLeague, getMatchDetails } from '../../Services/fixtureService'

function FootballMain() {
  const [state, setFixturesState] = useState("live");
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    loadLeaguesByCountry(setLeagues);
    loadLivescoreByLeague(setFixtures);
    setFixturesState('live');
  }, []);

  const onShowOrHide = (country) => {
    setLeagues(leagues.map(e => {
      if (e.countryId === country.countryId) {
        e = e.visible === 'none'
          ? { ...e, visible: 'yes' }
          : { ...e, visible: 'none' }
      }

      return e;
    }));
  }

  const onStateChange = (state) => {
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
    <div className="main">
      <Leagues leagues={leagues} onShowOrHide={onShowOrHide} />

      <Routes>
        <Route path='/' element={
          <Matches state={state} fixtures={fixtures} onStateChange={onStateChange} />}>
        </Route>
        <Route path='/matches/details/:id' element={
          <MatchDetails getMatch={async (id) => await getMatchDetails(id)} />}>
        </Route>
        <Route path='/leagues/details/:id' element={
          <LeagueDetails getLeague={async (id) => await getLeagueDetails(id)} />}>
        </Route>
      </Routes>
    </div >
  )
}

export default FootballMain