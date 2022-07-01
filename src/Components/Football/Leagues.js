import React from 'react'
import CountryWithLeagues from './CountryWithLeagues'
import Loader from '../Loader'
import { createGuid } from '../../GuidGenerator'

function Leagues({ leagues, onShowOrHide }) {
  return (
    <div className="leagues">
        <div className="header-of-content">
          LEAGUES
        </div>
        <div className="body-of-leagues">
          {
            leagues.length === 0
            ? <Loader />
            : leagues.map(c => <CountryWithLeagues key={createGuid()} country={c} onShowOrHide={onShowOrHide} />)
          }
        </div>
      </div>
  )
}

export default Leagues