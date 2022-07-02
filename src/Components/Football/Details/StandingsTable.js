import React from 'react'
import TeamInStanding from './TeamInStanding';
import { createGuid } from '../../../GuidGenerator'

function StandingsTable({ standings }) {
    return (
        <table className="st">
            <thead>
                <tr>
                    <th>#</th>
                    <th className='t-i-s'>Team</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody>
                {
                    standings.map(t => <TeamInStanding key={createGuid()} team={t} />)
                }
            </tbody>
        </table>
    )
}

export default StandingsTable