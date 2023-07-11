import { fromJS, setIn, getIn, get } from "immutable"
import { SET_ERROR, SET_FAVORITES, SET_LOADING, SET_POKES } from "../Actions/Types"

//fromJS() para que sea una estructura de inmmutable
const initialState = fromJS({
    pokesData: [],
    loading: false,
    error: false,
})

export const PokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKES:
            // return {
            //     ...state,
            //     pokesData: action.payload
            // }
            //////////////////////
            // con immutable
            //setIn  1.-arreglo , nombre de la propiedad o nivel que desea entrar
            // 2do parametro recibe el payload con la estructura  fromjS 
            return setIn(state, ['pokesData'], fromJS(action.payload))

        case SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }
            return setIn(state,['loading'],action.payload);

        case SET_ERROR:
            // return {
            //     ...state,
            //     error: payload
            // }
            return setIn(state,['error'],action.payload)
        case SET_FAVORITES:
            // get para acceder al estado en la posicion de pokesData
            const currentPokeIndex = get(state, 'pokesData').findIndex(poke => {
                return poke.get('id') === action.payload   //.id
            })
            if (currentPokeIndex < 0) {
                return state;
            }

            // const isFavorite= state.get('pokesData').get(currentPokeIndex).get('favorite');
            // ó
            const isFavorite = getIn(state, ['pokesData', currentPokeIndex, 'favorite']);


            return setIn(state, ['pokesData', currentPokeIndex, 'favorite'], !isFavorite);


        default:
            return state
    }
}