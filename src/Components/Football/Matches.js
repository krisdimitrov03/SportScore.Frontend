import React from 'react'
import { CgMediaLive } from 'react-icons/cg'
import Loader from '../Loader'
import MatchesTable from './MatchesTable'

function Matches({ state, fixtures, onStateChange }) {
    return (
        <div className="matches">
            <div className="header-of-content">
                <span>MATCHES</span>
                <div className="left-area">
                    <div className='options' onClick={() => onStateChange(state)}>
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
                    fixtures.length === 0
                        ? <Loader />
                        : <MatchesTable fixtures={fixtures} />
                }
            </div>
        </div>
    )
}

export default Matches