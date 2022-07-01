import React from 'react'
import { createGuid } from '../../../GuidGenerator'
import MiniEvent from './MiniEvent'
import NotAvailable from './NotAvailable'

function DTandMiniEvents({ match }) {
    return (
        <>
            <div className="date-and-time">
                {match.startDateAndTime}
            </div>
            {
                match.details.length === 0
                    ? <NotAvailable />
                    : match.details.map(me => <MiniEvent key={createGuid()} miniEvent={me} />)
            }
        </>
    )
}

export default DTandMiniEvents