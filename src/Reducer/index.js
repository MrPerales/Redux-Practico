import { SET_ERROR, SET_LOADING, SET_POKES } from "../Actions/Types"

const initialState = {
    pokesData: [],
    loading:false,
    error:false,
}

export const PokesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_POKES:
            return {
                ...state,
                pokesData: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading:action.payload
            }
        case SET_ERROR:
            return{
                ...state,
                error:payload
            }
        default:
            return state
    }
}