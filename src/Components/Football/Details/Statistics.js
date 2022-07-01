import React from 'react'
import NotAvailable from './NotAvailable';
import { createGuid } from '../../../GuidGenerator'
import Stat from './Stat';

function Statistics({ match }) {
    return (
        <>
            {
                match.statistics.length === 0
                    ? <NotAvailable />
                    : match.statistics.map(s => <Stat key={createGuid()} stat={s} />)
            }
        </>
    )
}

export default Statistics