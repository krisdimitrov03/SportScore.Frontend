import React from 'react'
import { Link } from 'react-router-dom'
import { GrHostMaintenance } from 'react-icons/gr'
import { TbError404 } from 'react-icons/tb'

function ProblemPage({ h1, p }) {
  return (
    <div className="main">
      <div className="comming-soon">
        {
          h1 === 'COMMING SOON'
          ? <GrHostMaintenance />
          : <TbError404 />
        }
        <h1>{h1}</h1>
        <p>{p}</p>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  )
}

export default ProblemPage