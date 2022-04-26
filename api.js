const path = 'https://coronavirus-19-api.herokuapp.com/tabs/tab2'

const headers = {
    method: 'get', 
    mode: 'cors', 
    cache: 'default'
}

function getCountry(country) {
    return fetch (`${path}/${country}`, headers)
    .then((Response) => Response.json())
}

export default {
    getCountry
}