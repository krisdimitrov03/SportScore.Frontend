import React from 'react'
import { createGuid } from '../../GuidGenerator'
import League from './League'

function CountryWithLeagues({ country, onShowOrHide }) {
    return (
        <div key={createGuid()}>
            <div className={`country${country.visible === 'none' ? '' : ' spread'}`} onClick={() => onShowOrHide(country)}>
                <img src={country.countryLogo} alt="" />
                <span>{country.country}</span>
            </div>
            <div className={`country-leagues ${country.visible === 'none' ? ' hidden' : ''}`}>
                {country.leagues.map(l => <League key={createGuid()} league={l} />)}
            </div>
        </div>
    )
}

export default CountryWithLeagues