import React from "react";
import { PokeCard } from "./PokeCard";
import '../Styles/pokeList.css'


function PokeList({pokes}) {



    return (
        <div className='PokeList'>
            {pokes.map(poke => (
                <PokeCard
                    name={poke.name}
                    image={poke.sprites.front_shiny}
                    key={poke.name}
                    types={poke.types}
                    pokeDexNum={poke.order}
                    id={poke.id}
                    favorite={poke.favorite}
                />
            ))}
        </div>
    )
}

// PokeList.defaultProps={
//     pokes:Array(10).fill(''), //crea un arreglo de 10 ['','',....]
// }



export { PokeList };