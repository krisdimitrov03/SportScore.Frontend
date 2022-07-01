import React, { useState } from 'react'
import { IoIosFootball, IoIosSquare } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import { GiCardPlay } from 'react-icons/gi'
import { useParams, Link } from 'react-router-dom'
import pitch from '../img/football-pitch.jpg'

function MatchDetails({ getMatch }) {
    const [match, setMatch] = useState(null);

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
                ? <div className='loading'><BsThreeDots /></div>
                :
                <div className="match-details">
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
                        <div className="dsl-tab dsl-active">
                            <span>DETAILS</span>
                        </div>
                        <div className="dsl-tab">
                            <span>STATISTICS</span>
                        </div>
                        <div className="dsl-tab">
                            <span>LINEUPS</span>
                        </div>
                    </div>
                    <div className="dsl-body">
                        <div className="date-and-time">
                            {match.startDateAndTime}
                        </div>
                        {
                            match.details.map(me => (
                                <div key={me.id} className={`mini-event ${me.side}`}>
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
                        {
                            match.statistics.map(s => {
                                const all = Number(s.home) + Number(s.away);
                                const homePercentage = (Number(s.home) * 100) / all;
                                const awayPercentage = 100 - homePercentage;

                                return (<div className="stat">
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

                        <div className="lineup-headers">
                            <div className="lp-header active-lp">
                                {match.homeTeam.toUpperCase()}
                            </div>
                            <div className="lp-header">
                                {match.awayTeam.toUpperCase()}
                            </div>
                        </div>
                        {/* <div className="pitch">
                            <div className="players">
                                <div className="player">
                                    <p>1</p>
                                    <p>Ter Stegen</p>
                                </div>
                            </div>
                            <div className="players">
                                <div className="player">
                                    <p>13</p>
                                    <p>Roberto</p>
                                </div>
                                <div className="player">
                                    <p>54</p>
                                    <p>Pique</p>
                                </div>
                                <div className="player">
                                    <p>6</p>
                                    <p>Lenglet</p>
                                </div>
                                <div className="player">
                                    <p>12</p>
                                    <p>Alba</p>
                                </div>
                            </div>
                            <div className="players">
                                <div className="player">
                                    <p>71</p>
                                    <p>Ter Stegen</p>
                                </div>
                                <div className="player">
                                    <p>71</p>
                                    <p>Ter Stegen</p>
                                </div>
                                <div className="player">
                                    <p>71</p>
                                    <p>Ter Stegen</p>
                                </div>
                                <div className="players">
                                    <div className="player">
                                        <p>71</p>
                                        <p>Ter Stegen</p>
                                    </div>
                                    <div className="player">
                                        <p>71</p>
                                        <p>Ter Stegen</p>
                                    </div>
                                    <div className="player">
                                        <p>71</p>
                                        <p>Ter Stegen</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="dsl-footer">
                    </div>
                </div>
            }
        </div>
    )
}

export default MatchDetails