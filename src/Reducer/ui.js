import { fromJS, setIn } from "immutable"
import { SET_ERROR, SET_LOADING } from "../Actions/Types"

//fromJS() para que sea una estructura de inmmutable
const initialState = fromJS({
    loading: false,
    error: false,
})

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      
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
       

        default:
            return state
    }
}