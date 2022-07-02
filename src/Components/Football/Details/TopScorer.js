import React from 'react'

function TopScorer({ player }) {
    return (
        <tr>
            <td>{player.number}</td>
            <td><img src="https://bit.ly/3I91qTo" alt="" /></td>
            <td className='player-info'>
                <p>{player.name}</p>
                <span>{player.team}</span>
            </td>
            <td>{player.goals}</td>
            <td>{player.assists}</td>
            <td>{player.penaltyGoals}</td>
        </tr>
    )
}

export default TopScorer