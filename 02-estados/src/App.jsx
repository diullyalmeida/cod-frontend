import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)
function calcularMedia(){
  let nota1 = Number(prompt("Nota1"))
  let nota2 = Number(prompt("Nota2"))
  let media = (nota1+nota2)/2
}
  function rolarD6(){
    let n = Math.ceil(Math.random()*6);
    setSaida(n);
  }
  
  function rolarD8(){
    let n = Math.ceil(Math.random()*8);
    setSaida(n);
  }
  function rolarD12(){
    let n = Math.ceil(Math.random()*12);
    setSaida(n);
  }
 function rolarD20(){
    let n = Math.ceil(Math.random()*20);
    setSaida(n);
  }
   function rolarD100(){
    let n = Math.ceil(Math.random()*100);
    setSaida(n);
  }
function validarSenha(){
  let senha = Number(prompt("digite sua senha"))
  if (senha === 1234){
  setSaida("acesso permitido")}
  else{
setSaida ("acesso negado")
}-
}
  return (
    <div className='app'>
      <h1>Estados</h1>
      <button onClick={calcularMedia}>Média</button>
      <button onClick={validarSenha}>Senha</button>
      <button onClick={rolarD6}>D6</button>''
      <button onClick={rolarD8}>D8</button>
      <button onClick={rolarD12}>D12</button>
      <button onClick={rolarD20}>D20</button>
      <button onClick={rolarD100}>D100</button>
    
      <p>
        Resultado:{saida}''
      </p>
    </div>
    
  )
}

export default App
