import { Route, Routes } from 'react-router-dom'
import LeagueDetails from './Details/LeagueDetails'
import MatchDetails from './Details/MatchDetails'
import Leagues from './Leagues'
import Matches from './Matches'

function FootballMain({ leagues, fixtures, state, onShowOrHide, onStateChange, getMatchDetails, getLeagueDetails }) {
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