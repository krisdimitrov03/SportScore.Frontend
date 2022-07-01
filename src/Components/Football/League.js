import React from 'react'
import { Link } from 'react-router-dom'

function League({ league }) {
    return (
        <div className="league">
            <Link to={`/football/leagues/details/${league.leagueId}`}>
                {league.name}
            </Link>
        </div>
    )
}

export default League