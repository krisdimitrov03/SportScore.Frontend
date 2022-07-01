import { baseUrl } from '../Constants'

export const getFavoritesByUser = async (id) => {
    const data = await fetchFavorites(id);

    return data.map(f => f.matchId);
}

const fetchFavorites = async (userId) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-Auth-Token-x': '9dc97af7-5b7e-466b-9fc1-1ca2873bc4'
        }
    };

    const res = await fetch(`${baseUrl}/favorites/getbyuser/${userId}`, options);
    const data = await res.json();

    return data.data;
}