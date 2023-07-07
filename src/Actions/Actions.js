import { getPokesDetails } from "../Hooks/get"
import { SET_ERROR, SET_LOADING, SET_POKES } from "./Types"

export const setPokes = (payload) => ({
    type: SET_POKES,
    payload
})
export const setError = (payload) => ({
    type: SET_ERROR,
    payload
})
export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

// redux thunks 
export const getPokemonWithDetails = (pokes = []) => async (dispatch) => {
    const pokesDetails = await Promise.all(pokes.map(poke =>
        getPokesDetails(poke.url)
    )).then(allData => allData)
    dispatch(setPokes(pokesDetails))
}