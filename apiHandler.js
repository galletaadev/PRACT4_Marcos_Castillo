function fetchRandomUser() {
    return fetch('https://randomuser.me/api/')
        .then(response => response.json());
}
function fetchCurrentTime() {
    const url = 'https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=Madrid';
    return fetch(url, {
        headers: {
            'X-RapidAPI-Key': '8281212906msh48af87fd79122cfp17b64djsn046f6896c9ac',
            'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
        }
    })
        .then(response => response.json());
}

export { fetchRandomUser, fetchCurrentTime };