export const logger = (store) => (next) => (action) => {
    // console.log(action);
    next(action);
}

// export const featuring=(store)=>(next)=>(actionInfo)=>{
//     const featured=[{name:'edy'},...actionInfo.action.payload];
//     const updatedActionInfo={
//         ...actionInfo,
//         action:{...actionInfo.action, payload:featured}
//     };
//     next(updatedActionInfo);
// }

export const capitalLetter=(store)=>(next)=>(actionInfo)=>{
    console.log(actionInfo,'actionInfo');
    // console.log('actionInfo');
    const editLetter=[
        ...actionInfo.action.payload.map(poke=>({
            ...poke,
            // charAt() metodo que toma una parte del texto dependiedo del index que pongamos
            // en este caso 0 la primera letra del nombre 
            // ya que la primera parte te regrasa una sola letra le concatenamos el resto del nombre 
            // usando el metodo slice que regresa un nuevo array eliminando la parte que deseemos 
            // dependiendo del index que le mandemos 
            name:`${poke.name.charAt(0).toUpperCase()}${poke.name.slice(1)}` 
        })),
    ];
    const updatedActionInfo={
        ...actionInfo,
        action:{...actionInfo.action ,payload:editLetter},
    };
    
    next(updatedActionInfo);
}