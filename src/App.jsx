import React from 'react'
import './App.css'
import { Searcher } from './Components/Searcher'
import { Col } from 'antd'
import { PokeList } from './Components/PokeList'
import { useSelector, useDispatch } from "react-redux";
import { getPokemon, getPokesDetails } from './Hooks/get'
import { SET_POKES } from './Actions/Types'
import { setPokes } from './Actions/Actions'

const API = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function App() {
  const pokes = useSelector(state => state.pokesData);
  const dispatch = useDispatch();
  console.log(pokes);

  React.useEffect(() => {
    const fetchData = async () => {

      const pokeRes = await getPokemon();
      // console.log(pokeRes);

      const pokesDetails = await Promise.all(pokeRes.map(poke => 
        getPokesDetails(poke.url)
      )).then(allData =>allData)
      dispatch(setPokes(pokesDetails))
    }

    fetchData();
  }, [])


  return (
    <>
      <Col span={8} offset={8}>

        <Searcher />
      </Col>
      <PokeList pokes={pokes} />

    </>
  )
}

export default App
// Col diseño de Css span and offset para centrar