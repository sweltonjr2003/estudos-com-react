import './App.css'

import { useState } from 'react'

import OTeuNomePorFavor from './components/stateLift/OTeuNomePorFavor'
import Saudacao from './components/stateLift/Saudacao'


function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <OTeuNomePorFavor setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default App
