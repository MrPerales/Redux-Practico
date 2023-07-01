import { PokeCard } from "./PokeCard";  
import '../Styles/pokeList.css'
function PokeList({pokes}){
    return(
        <div className='PokeList'>
            {pokes.map(poke => (
                <PokeCard/>
            ))}
        </div>
    )
}

PokeList.defaultProps={
    pokes:Array(10).fill(''), //crea un arreglo de 10 ['','',....]
}



export {PokeList};