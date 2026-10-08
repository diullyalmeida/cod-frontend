
import './App.css'
import './Joguinho'
import Joguinho from './Joguinho'
import Pousada from './pousada'
import Votar from './components/votar'
import Peso from './components/Peso'
import Total from './components/Total'
function App() {
 
  return (
   <div className='app'>
    <h1>03 Estados e componentes</h1>
   
<Joguinho></Joguinho>
<Pousada></Pousada>
<Votar></Votar>
<Peso></Peso>
<Total></Total>

   </div>
  )
}

export default App
