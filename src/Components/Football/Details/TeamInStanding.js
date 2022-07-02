import React from 'react'

function TeamInStanding({ team }) {
    return (
        <tr>
            <td>{team.number}</td>
            <td className='t-i-s'>{team.name}</td>
            <td>{team.gamesPlayed}</td>
            <td><span className='w'>{team.wins}</span></td>
            <td><span className='d'>{team.draws}</span></td>
            <td><span className='l'>{team.losts}</span></td>
            <td><span className='pts'>{team.points}</span></td>
        </tr>
    )
}

export default TeamInStanding