import { PokeCard } from "./PokeCard";  
import '../Styles/pokeList.css'
function PokeList({pokes}){
    console.log(pokes);
    return(
        <div className='PokeList'>
            {pokes?.map(poke => (
                <PokeCard
                    name={poke.name}
                    url={poke.url}
                    key={poke.name}
                />
            ))}
        </div>
    )
}

// PokeList.defaultProps={
//     pokes:Array(10).fill(''), //crea un arreglo de 10 ['','',....]
// }



export {PokeList};