import React from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Loader from '../../Loader';

function LeagueDetails({ getLeague }) {
    // const [league, setleague] = useState(null);

    // const params = useParams();
    // const id = params.id;

    // async function loadLeague() {
    //     const leagueFromServer = await getLeague(id);
    //     setleague(leagueFromServer);
    // }

    // loadLeague();

    return (
        // league === null
        //     ? <Loader />
        //     : 
        <div className='league-details'>
            <div className="header-of-content">
                <span>LaLiga Santander</span>
            </div>
        </div>
    )
}

export default LeagueDetails