import React from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../../UserContext'
import {
    BsBell,
    // BsBellFill
} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { validateColor, validateTimeLabel } from '../../DesignValidator'

function Match({ match }) {
    // const { user } = useContext(UserContext);

    return (
        <tr className='league-match'>
            <td>
                <div>{match.startTime}</div>
                <div className={validateColor(match.time)}>
                    {validateTimeLabel(match.time)}
                </div>
            </td>
            <td>
                <div>{match.homeTeam}</div>
                <div>{match.awayTeam}</div>
            </td>
            <td>
                <div>{match.homeGoals}</div>
                <div>{match.awayGoals}</div>
            </td>
            <td className='details'>
                <Link to={`/football/matches/details/${match.matchId}`}>Details</Link>
            </td>
            <td>
                <div>
                    {
                        // user === null ? 
                        <Link to="/comming-soon"><BsBell /></Link>
                        // : user.favorites.includes(match.matchId)
                        //     ? <BsBellFill />
                        //     : <BsBell />
                    }
                </div>
            </td>
        </tr>
    )
}

export default Match