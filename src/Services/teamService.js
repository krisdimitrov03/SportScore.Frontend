import { footballUrl } from '../Constants'

export const getTeamDetails = async (id) => {
    return await fetchTeam(`teamDetails/${id}`);
}

const fetchTeam = async (url) => {
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