import React from 'react'

function Player({ player }) {
  return (
    <div className="plyr">
        <img src={player.image} alt="" />
        <p className="name">{player.name}</p>
        <p className="pstn">{player.position}</p>
    </div>
  )
}

export default Player