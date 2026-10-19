import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Primeira from './components/Primeira'
import Segunda from './components/Segunda'
import Terceira from './components/Terceira'
import Quarta from './components/Quarta'
import Quinta from './components/Quinta'

function App() {
  const [pagina, setPagina] = useState(1)

  return (
    <div className="app">
      <nav>
        <button onClick={()=> setPagina(0)}>Oração do Fullstack</button>
        <button onClick={()=> setPagina(1)}>Oração do estudante</button>
        <button onClick={()=> setPagina(2)}>Oração do Resiliente</button>
        <button onClick={()=> setPagina(3)}>Oração do Frontend</button>
        <button onClick={()=> setPagina(4)}>Oração do aprendiz</button>
      </nav>

   
   { pagina==0 &&  <Primeira />}
   { pagina==1 &&  <Segunda />}
   { pagina==2 &&  <Terceira />}
   { pagina==3 &&  <Quarta />}
   { pagina==4 &&  <Quinta />}
 
 
   </div>
  )
}
export default App