import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Pneu from './pages/Pneu'
import Exerc0081 from './pages/Exerc0081'
import Ho from './pages/Ho'
import Aprovado from './pages/Aprovado'
import Bondinho from './pages/Bondinho'
import CorridaDeLesmas from './pages/CorridaDeLesmas'
import AumentoIngresso from './pages/AumentoIngresso'
import Combustivel from './pages/Combustivel'
import Pum from './pages/Pum'



function App() {
  
  return (
   <div className="app">
<Exerc0081 />
<Home />
<Demo />
<Ho />
<Aprovado />
<Bondinho />
<CorridaDeLesmas />
<AumentoIngresso />
<Combustivel />
<Pum />

   </div>
  )
}

export default App
