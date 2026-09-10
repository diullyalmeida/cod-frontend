import './App.css'

function App() {
 

  function testar (){
    let nome =prompt("qual e seu nome")
    let bocadoSapo = nome
  alert(nome+ ' , seu nome tá na bocadoSapo')
  }

  function calcularMedia (){
    let nota1 = Number(prompt('manda a primeira nota;'))
    let nota2 =Number(prompt('manda a segunda nota;'))
    let media = (nota1+nota2)/ 2 
    alert ('sua média: ' + media)
  }

  return (
  <div className="cont-app">
    <h1>Javascript no React</h1>
    <button onClick={testar}>Testar</button>
     <button onClick={calcularMedia}>Média</button>
  </div>
  )
}

export default App
