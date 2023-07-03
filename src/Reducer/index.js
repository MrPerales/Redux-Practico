import { SET_ERROR, SET_LOADING, SET_POKES } from "../Actions/Types"

const initialState = {
    pokesData: [],
    loading:true,
    error:false,
}

export const PokesReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_POKES:
            return {
                ...state,
                loading:false,
                pokesData: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
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