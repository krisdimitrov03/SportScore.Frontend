import React from 'react'

function Stat({ stat }) {
    const all = Number(stat.home) + Number(stat.away);
    const homePercentage = (Number(stat.home) * 100) / all;
    const awayPercentage = 100 - homePercentage;

    return (
        <div className="stat">
            <p>{stat.type}</p>
            <div className="stat-text">
                <p>{stat.home}</p>
                <p>{stat.away}</p>
            </div>
            <div className="stat-line">
                <div className="home-part" style={{ width: `${homePercentage}%` }}>
                </div>
                <div className="away-part" style={{ width: `${awayPercentage}%` }}>
                </div>
            </div>
        </div>
    );
}

export default Stat