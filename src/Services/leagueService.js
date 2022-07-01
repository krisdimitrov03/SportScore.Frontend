import { footballUrl } from '../Constants.js'

export const loadLeaguesByCountry = async (setLeagues) => {
    const data = await fetchLeagues();

    const leagues = data.map(e => e = { ...e, visible: 'none' })

    setLeagues(leagues);
}

// Help Functions

const fetchLeagues = async () => {
    const options = {
        method: 'GET',
        headers: {
            'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
        }
    };

    const res = await fetch(`${footballUrl}/leagues`, options);
    const data = await res.json();

    return data.data;
}