import React, { useState } from 'react'
import { IoIosFootball, IoIosSquare } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { useParams, Link } from 'react-router-dom'
import { createGuid } from '../GuidGenerator'

function MatchDetails({ getMatch }) {
    const [match, setMatch] = useState(null);
    const [window, setWindow] = useState('details');

    const params = useParams();
    const id = params.id;

    async function loadMatch() {
        const matchFromServer = await getMatch(id);
        setMatch(matchFromServer);
    }

    loadMatch();

    return (
        <div className='main'>
            {match === null
                ? <div className='loading-background'>
                    <div className='loading'></div>
                </div>
                : <div className="match-details">
                    <div className="header-match-details">
                        <p>{match.country} / <Link to={`/football/leagues/details/${match.leagueId}`}>{match.league}</Link></p>
                    </div>
                    <div className="match-preview">
                        <div className="team">
                            <img src={match.homeTeamLogo} alt="" />
                            <p>{match.homeTeam}</p>
                        </div>
                        <div className="state">
                            <p className='result'>{match.result}</p>
                            <p>{match.time}'</p>
                        </div>
                        <div className="team">
                            <img src={match.awayTeamLogo} alt="" />
                            <p>{match.awayTeam}</p>
                        </div>
                    </div>
                    <div className="dsl">
                        <div onClick={() => setWindow('details')} className={`dsl-tab${window === 'details' ? ' dsl-active' : ''}`}>
                            <span>DETAILS</span>
                        </div>
                        <div onClick={() => setWindow('stats')} className={`dsl-tab${window === 'stats' ? ' dsl-active' : ''}`}>
                            <span>STATISTICS</span>
                        </div>
                    </div>
                    <div className="dsl-body">
                        {
                            window === 'details'
                                ? <>
                                    <div className="date-and-time">
                                        {match.startDateAndTime}
                                    </div>
                                    {
                                        match.details.length === 0
                                            ?
                                            <div className='mini-event'>
                                                There are no mini events availeble yet.
                                            </div>
                                            : match.details.map(me => (
                                                <div key={createGuid()} className={`mini-event ${me.side}`}>
                                                    {
                                                        me.side === 'home'
                                                            ? <>
                                                                {
                                                                    me.type === 'goal'
                                                                        ? <IoIosFootball className='green' />
                                                                        : me.type === 'yellow card'
                                                                            ? <IoIosSquare className='yellow' />
                                                                            : <IoIosSquare className='red' />
                                                                }

                                                                <span className="dsl-time">{me.time}'</span>
                                                                {
                                                                    me.type === 'goal' ? <span className="dsl-res">{me.result}</span> : ''
                                                                }
                                                                <span className="scorer">{me.playerName}</span>
                                                            </>
                                                            :
                                                            <>
                                                                <span className="scorer">{me.playerName}</span>
                                                                {
                                                                    me.type === 'goal' ? <span className="dsl-res">{me.result}</span> : ''
                                                                }
                                                                <span className="dsl-time">{me.time}'</span>
                                                                {
                                                                    me.type === 'goal'
                                                                        ? <IoIosFootball className='green' />
                                                                        : me.type === 'yellow card'
                                                                            ? <IoIosSquare className='yellow' />
                                                                            : <IoIosSquare className='red' />
                                                                }

                                                            </>
                                                    }
                                                </div>
                                            ))
                                    }
                                </>
                                :
                                <>
                                    {
                                        match.statistics.length === 0
                                            ?
                                            <div className='mini-event'>
                                                There are no statistics availeble yet.
                                            </div>
                                            : match.statistics.map(s => {
                                                const all = Number(s.home) + Number(s.away);
                                                const homePercentage = (Number(s.home) * 100) / all;
                                                const awayPercentage = 100 - homePercentage;

                                                return (<div key={createGuid()} className="stat">
                                                    <p>{s.type}</p>
                                                    <div className="stat-text">
                                                        <p>{s.home}</p>
                                                        <p>{s.away}</p>
                                                    </div>
                                                    <div className="stat-line">
                                                        <div className="home-part" style={{ width: `${homePercentage}%` }}>
                                                        </div>
                                                        <div className="away-part" style={{ width: `${awayPercentage}%` }}>
                                                        </div>
                                                    </div>
                                                </div>);
                                            })
                                    }
                                </>
                        }
                    </div>
                    <div className="dsl-footer">
                    </div>
                </div>
            }
        </div>
    )
}

export default MatchDetails