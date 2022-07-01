import React, { useContext } from 'react'
import { BsBell, BsBellFill, BsThreeDots } from 'react-icons/bs'
import { CgMediaLive } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { createGuid } from '../GuidGenerator'

function FootballHome({ leagues, fixtures, state, onShowOrHide, onStateChange }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="main">
      <div className="leagues">
        <div className="header-of-content">
          LEAGUES
        </div>
        <div className="body-of-leagues">
          {
            leagues[0] !== undefined
              ?
              leagues.map(c => (
                <div key={createGuid()}>
                  <div className={`country${c.visible === 'none' ? '' : ' spread'}`} onClick={() => onShowOrHide(c)}>
                    <img src={c.countryLogo} alt="" />
                    <span>{c.country}</span>
                  </div>
                  <div className={`country-leagues ${c.visible === 'none' ? ' hidden' : ''}`}>
                    {c.leagues.map(l => (
                      <div key={createGuid()} className="league">
                        <Link to={`/football/leagues/details/${l.leagueId}`}>
                          {l.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>))
              :
              <div className='loading-background'>
                <div className='loading'></div>
              </div>
          }
        </div>
      </div>
      <div className="matches">
        <div className="header-of-content">
          <span>MATCHES</span>
          <div className="left-area">
            <div className='options' onClick={() => onStateChange(state)}>
              {/* <div className='options-active'> */}
              <div className={state === 'all' ? 'options-active' : ''}>
                ALL
              </div>
              <div className={state !== 'all' ? 'options-active' : ''}>
                <CgMediaLive />
                <span>LIVE</span>
              </div>
            </div>
          </div>
        </div>
        <div className="body-of-matches">
          {
            fixtures[0] === undefined
              ?
              <div className='loading-background'>
                <div className='loading'></div>
              </div>
              :
              <table>
                {
                  fixtures.map(f => (
                    <tbody key={createGuid()}>
                      <tr className='league-in-fixtures'>
                        <td><img src={f.image} alt="" /></td>
                        <td colSpan="4"><Link to={`/football/leagues/details/${f.id}`}>{f.league}</Link></td>
                      </tr>
                      {
                        f.matches.map(m => (
                          <tr key={createGuid()} className='league-match'>
                            <td>
                              <div>{m.startTime}</div>
                              <div className={
                                ['Half Time', 'In Progress'].includes(m.time)
                                  ? 'red'
                                  : ['Canceled', 'Finished'].includes(m.time)
                                    ? 'grey'
                                    : 'green'
                              }>
                                {
                                  m.time === 'Half Time'
                                    ? 'HT'
                                    : m.time === 'Finished'
                                      ? 'FT'
                                      : ['Canceled', 'In Progress', '']
                                        .includes(m.time)
                                        ? m.time
                                        : `${m.time}'`
                                }
                              </div>
                            </td>
                            <td>
                              <div>{m.homeTeam}</div>
                              <div>{m.awayTeam}</div>
                            </td>
                            <td>
                              <div>{m.homeGoals}</div>
                              <div>{m.awayGoals}</div>
                            </td>
                            <td className='details'>
                              <Link to={`/football/matches/details/${m.matchId}`}>Details</Link>
                            </td>
                            <td>
                              <div>
                                {
                                  user === null
                                    ? <Link to="/login"><BsBell /></Link>
                                    : user.favorites.includes(m.matchId)
                                      ? <BsBellFill />
                                      : <BsBell />
                                }
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  ))
                }
              </table>
          }
        </div>
      </div>
    </div >
  )
}

export default FootballHome