import { footballUrl } from '../Constants.js'

export const loadLivescoreByLeague = async (setFixtures) => {
    const fixtures = await fetchFixtures('livescore');
    setFixtures(fixtures);
}

export const loadFixturesByLeague = async (setFixtures) => {
    const today = new Date();
    const formattedDate = 
    `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const data = await fetchFixtures(`fixtures?from=${formattedDate}&to=${formattedDate}`);
    setFixtures([]);
    setFixtures(data);
}

export const getMatchDetails = async (id) => await fetchFixtures(`matchDetails/${id}`);

// Help Functions

const fetchFixtures = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
        }
    };

    const res = await fetch(`${footballUrl}/${url}`, options);
    const data = await res.json();

    return data.data;
}