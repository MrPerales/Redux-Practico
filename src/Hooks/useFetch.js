import React from "react";
import { setPokes, setLoading, setError } from "../Actions/Actions";


function useFetch(url) {

    // console.log(pokes);

    // const [data,setData]=React.useState(null);
    // const [loading,setLoading]=React.useState(true);
    // const [error,setError]=React.useState(false);

    React.useEffect(() => {
        // dispatch(setLoading(true))
        fetch(url)
            .then(resp => resp.json())
            // en este caso .results por que es la propiedad 
            // que contiene el array que deseamos 
            .then(data =>dispatch(setPokes(data.results)))
            .catch(error => dispatch(setError(error)))
        // .finally(()=>dispatch(setLoading(false)))

    }, [])


    return { pokes, loading, error }
}
export { useFetch }
