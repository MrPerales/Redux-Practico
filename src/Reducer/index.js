import { SET_ERROR, SET_FAVORITES, SET_LOADING, SET_POKES } from "../Actions/Types"

const initialState = {
    pokesData: [],
    loading: false,
    error: false,
}

export const PokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKES:
            return {
                ...state,
                pokesData: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }

        case SET_FAVORITES:

            const newPokeList = [...state.pokesData]
            const currentPokeIndex = newPokeList.findIndex(poke => {
                return poke.id === action.payload    //.id
            })
            if (currentPokeIndex < 0) {
                return state;
            }
            newPokeList[currentPokeIndex].favorite = !newPokeList[currentPokeIndex].favorite
            return { ...state, pokesData: newPokeList }


        default:
            return state
    }
}