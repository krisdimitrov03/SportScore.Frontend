import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader';
import NotAvailable from './NotAvailable'
import StandingsTable from './StandingsTable';
import TopScorersTable from './TopScorersTable';

function LeagueDetails({ getLeague }) {
    const [league, setleague] = useState(null);

    const params = useParams();
    const id = params.id;

    async function loadLeague() {
        const leagueFromServer = await getLeague(id);
        setleague(leagueFromServer);
    }

    loadLeague();

    return (
        league === null
            ? <Loader />
            :
            <div className='league-details'>
                <div className="league-main">
                    <img className='league-logo' src={league.leagueImage} alt="" />
                    <div className="main-data">
                        <p className='league-name'>{league.leagueName}</p>
                        <p className='season'>Season 2021/2022</p>
                        <div className="country-data">
                            <img src={league.countryImage} alt="" />
                            <p>{league.countryName}</p>
                        </div>
                    </div>
                </div>
                <div className="league-statistics">
                    <div className="standings">
                        <h3>Standings</h3>
                        {
                            league.standings === null ||
                            league.standings === undefined ||
                            league.standings.length === 0 
                                ? <NotAvailable text={'standings'} />
                                : <StandingsTable standings={league.standings} />
                        }
                    </div>
                    <div className="topscorers">
                        <h3>Top Players</h3>
                        {
                            league.topscorers === null ||
                            league.topscorers === undefined ||
                            league.topscorers.length === 0 
                                ? <NotAvailable text={'top players'} />
                                : <TopScorersTable players={league.topscorers} />
                        }
                    </div>
                </div>
            </div>
    )
}

export default LeagueDetails