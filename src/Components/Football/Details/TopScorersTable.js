import React from 'react'
import Loader from '../../Loader'
import TopScorer from './TopScorer'

function TopScorersTable({ players }) {
    return (
        <table className='tsc'>
            <thead>
                <tr>
                    <th>#</th>
                    <th colSpan={2} className='player-info'>Player</th>
                    <th>G</th>
                    <th>A</th>
                    <th>PG</th>
                </tr>
            </thead>
            <tbody>
                {
                    players.length === 0
                    ? <Loader />
                    : players.map(p => <TopScorer player={p} />)
                }
            </tbody>
        </table>
    )
}

export default TopScorersTable