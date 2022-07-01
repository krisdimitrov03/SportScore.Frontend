import React from 'react'
import Match from './Match'
import { Link } from 'react-router-dom'
import { createGuid } from '../../GuidGenerator'

function Fixture({ fixture }) {
    return (
        <tbody>
            <tr className='league-in-fixtures'>
                <td><img src={fixture.image} alt="" /></td>
                <td colSpan="4">
                    <Link to={`/football/leagues/details/${fixture.id}`}>
                        {fixture.league}
                    </Link>
                </td>
            </tr>
            {
                fixture.matches.map(m => <Match key={createGuid()} match={m} />)
            }
        </tbody>
    )
}

export default Fixture