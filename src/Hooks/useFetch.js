import React from "react";  

function useFetch(url){

const [data,setData]=React.useState(null);
const [loading,setLoading]=React.useState(true);
const [error,setError]=React.useState(false);

React.useEffect(()=>{
    setLoading(true);
    fetch(url)
        .then(resp=>resp.json())
        // en este caso .results por que es la propiedad 
        // que contiene el array que deseamos 
        .then(data=>setData(data.results))
        .catch(error=>setError(error))
        .finally(()=>setLoading(false))




},[])

    return {data,loading,error}
}

export {useFetch}