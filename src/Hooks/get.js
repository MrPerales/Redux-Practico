
const API = 'https://pokeapi.co/api/v2/pokemon?limit=151'

export const getPokemon = (API) => {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(resp => resp.json())
        .then(data => data.results)
        .catch(error => console.log(error))
}

export const getPokesDetails = (url) => {
    return fetch(url)
        .then(resp => resp.json())
        .then(data => data)
        .catch(error => console.log(error))
}