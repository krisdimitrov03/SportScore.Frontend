import React from 'react'

function NotAvailable({ text }) {
    return (
        <div className='mini-event'>
            There are no {text} available.
        </div>
    )
}

export default NotAvailable