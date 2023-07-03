import { SET_ERROR, SET_LOADING, SET_POKES } from "./Types"

export const setPokes=(payload)=>({
    type:SET_POKES,
    payload
})
export const setError=(payload)=>({
    type:SET_ERROR,
    payload
})
export const setLoading=()=>({
    type:SET_LOADING,
})
