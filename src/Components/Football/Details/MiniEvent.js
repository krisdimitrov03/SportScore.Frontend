import React from 'react'
import { validateMiniEvent, validateMiniEventResult } from '../../../DesignValidator'

function MiniEvent({ miniEvent }) {
    return (
        <div className={`mini-event ${miniEvent.side}`}>
            {
                miniEvent.side === 'home'
                    ?
                    <>
                        {validateMiniEvent(miniEvent.type)}
                        <span className="dsl-time">{miniEvent.time}'</span>
                        {validateMiniEventResult(miniEvent)}
                        <span className="scorer">{miniEvent.playerName}</span>
                    </>
                    :
                    <>
                        <span className="scorer">{miniEvent.playerName}</span>
                        {validateMiniEventResult(miniEvent)}
                        <span className="dsl-time">{miniEvent.time}'</span>
                        {validateMiniEvent(miniEvent.type)}
                    </>
            }
        </div>
    )
}

export default MiniEvent