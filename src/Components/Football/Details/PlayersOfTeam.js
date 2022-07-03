import React from 'react'
import NotAvailable from './NotAvailable'
import { createGuid } from '../../../GuidGenerator'
import Player from './Player'

function PlayersOfTeam({ players }) {
  return (
    <div className="team-players">
        {
            players.length === 0
            ? <NotAvailable text={'players'} />
            : players.map(p => <Player key={createGuid()} player={p} />)
        }
    </div>
  )
}

export default PlayersOfTeam