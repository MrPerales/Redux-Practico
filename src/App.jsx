import React from 'react'
import './App.css'
import { Searcher } from './Components/Searcher'
import { Col, Spin } from 'antd'
import { PokeList } from './Components/PokeList'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokesWithDetails, setSearchPoke } from './Slices/DataSlice'


const API = 'https://pokeapi.co/api/v2/pokemon?limit=151'

function App() {
  // para que podamos usar como objeto plano
  const pokes = useSelector((state) => state.data.searchPokes, shallowEqual);
  // const pokesFilter = useSelector(state => state.data.searchPokes);
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();
  console.log(pokes);



  React.useEffect(() => {


    dispatch(fetchPokesWithDetails())

  }, [])


  return (
    <>
      <Col span={8} offset={8}>

        <Searcher />
      </Col>
      {loading ?
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        : <PokeList pokes={pokes} />
      }
    </>
  )
}

export default App
// Col diseño de Css span and offset para centrar