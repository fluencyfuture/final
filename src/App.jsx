import { useState } from 'react'
import './App.scss'
import { Greeting } from './components/greeting'
import { Title } from './components/title'
import { Counter } from './components/counter'

function App() {

  return (
    <div className='container'>
      <Title>Título de boas-vindas! Modal Included!</Title>
      <Greeting firstName='Joana' lastName='Ferreira'/>
      <Counter/>
    </div>
  )
}

export default App
