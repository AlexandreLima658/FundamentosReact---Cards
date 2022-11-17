import React from 'react'
import Family from './components/basicos/Family'
import Member from './components/basicos/Member'
import Random from './components/basicos/Random'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Card from './components/layout/Card'
import './App.css'
export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">

        <Card titulo="#06 - Componente" color="#f32aaa">
          <ListaAlunos />
        </Card>
        <Card titulo="#05 - Componente" color="#ff2d0b">
          <Family lastname="Lima" >
            <Member firstname="Alexandre"/>
            <Member firstname="Maria"/>
            <Member firstname="João"/>
          </Family>
        </Card>
        <Card titulo="#04 - Componente" color="#ffbe0b">
          <Random min={1} max={60} />
        </Card>
        <Card titulo="#03 - Componente" color="#5f0f40">
          <Random min={1} max={60} />
        </Card>
        <Card titulo="#02 - Componente" color="#ff006e">
          <Random min={1} max={60} />
        </Card>
        <Card titulo="#01 - Componente" color="#8338ec">
          <Random min={1} max={60} />
        </Card>


      </div>
    </div>
  )
}