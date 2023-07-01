import React from 'react'
import './App.css'
import { Searcher } from './Components/Searcher'
import { Col } from 'antd'
import { PokeList } from './Components/PokeList'

function App() {

  return (
    <>
      <Col span={8} offset={8}>

        <Searcher />
      </Col>
      <PokeList/>

    </>
  )
}

export default App
// Col diseño de Css span and offset para centrar