import React, { useState } from 'react'
import Loader from '../../Loader'
import { useParams, Link } from 'react-router-dom'
import DTandMiniEvents from './DTandMiniEvents'
import Statistics from './Statistics'

function MatchDetails({ getMatch }) {
    const [match, setMatch] = useState(null);
    const [window, setWindow] = useState('details');

    const params = useParams();
    const id = params.id;

    async function loadMatch() {
        const matchFromServer = await getMatch(id);
        setMatch(matchFromServer);
    }

    loadMatch();

    return (
        match === null
            ? <Loader />
            : <div className="match-details">
                <div className="header-match-details">
                    <p>{match.country} / <Link to={`/football/leagues/details/${match.leagueId}`}>{match.league}</Link></p>
                </div>
                <div className="match-preview">
                    <div className="team">
                        <img src={match.homeTeamLogo} alt="" />
                        <p>{match.homeTeam}</p>
                    </div>
                    <div className="state">
                        <p className='result'>{match.result}</p>
                        <p>{match.time}'</p>
                    </div>
                    <div className="team">
                        <img src={match.awayTeamLogo} alt="" />
                        <p>{match.awayTeam}</p>
                    </div>
                </div>
                <div className="dsl">
                    <div onClick={() => setWindow('details')} className={`dsl-tab${window === 'details' ? ' dsl-active' : ''}`}>
                        <span>DETAILS</span>
                    </div>
                    <div onClick={() => setWindow('stats')} className={`dsl-tab${window === 'stats' ? ' dsl-active' : ''}`}>
                        <span>STATISTICS</span>
                    </div>
                </div>
                <div className="dsl-body">
                    {
                        window === 'details'
                            ? <DTandMiniEvents match={match} />
                            : <Statistics match={match} />
                    }
                </div>
                <div className="dsl-footer">
                </div>
            </div>
    )
}

export default MatchDetails