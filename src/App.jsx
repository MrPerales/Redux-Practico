import React from 'react'
import './App.css'
import { Searcher } from './Components/Searcher'
import { Col } from 'antd'
import { PokeList } from './Components/PokeList'
import { useFetch } from './Hooks/useFetch'

const API='https://pokeapi.co/api/v2/pokemon?limit=151'
function App() {
  const {data}=useFetch(API);
  // console.log(data);
  return (
    <>
      <Col span={8} offset={8}>

        <Searcher />
      </Col>
      <PokeList pokes={data}/>

    </>
  )
}

export default App
// Col diseño de Css span and offset para centrar