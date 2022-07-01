import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

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
        <div>{league}</div>
    )
}

export default LeagueDetails