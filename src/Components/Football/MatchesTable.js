import React from 'react'
import Fixture from './Fixture'
import { createGuid } from '../../GuidGenerator'

function MatchesTable({ fixtures }) {

    return (
        <table>
            {
                fixtures.map(f => <Fixture key={createGuid()} fixture={f} />)
            }
        </table>
    )
}

export default MatchesTable