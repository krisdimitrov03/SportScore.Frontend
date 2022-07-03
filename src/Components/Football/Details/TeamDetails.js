import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader';
import MatchesTable from '../MatchesTable';
import PlayersOfTeam from './PlayersOfTeam';

function TeamDetails({ getTeam }) {
    const [team, setTeam] = useState(null);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        async function loadTeam(id) {
            const teamFromServer = await getTeam(id);
            setTeam(teamFromServer);
        }
        loadTeam(id);
    });

    return (
        <div className="main">
            {
                team === null
                    ? <Loader />
                    :
                    <div className="team-details">
                        <div className="team-details-header">
                            <img src={team.image} alt="" />
                            <h2>{team.name}</h2>
                        </div>
                        <div className="team-details-body">
                            <div className="left-td">
                                <h3>Matches of {team.name}</h3>
                                <MatchesTable fixtures={team.matches} />
                            </div>
                            <div className="right-td">
                                <h3>Players of {team.name}</h3>
                                <PlayersOfTeam players={team.players} />
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default TeamDetails