import './App.css'
function gerenciarFinancas(){
  let custosmensais = Number(prompt('quantidade de custos mensais:'))
  let contribuicao  =Number(prompt('quantidade de dizimos e doaçoes:'))
  let quantidadefalta =  custosmensais-contribuicao
  alert(' a quantidade que falta é: '+ quantidadefalta)
}
function calcularLaranjas(){
  let laranjasinicial = Number(prompt('quantidade inicial de laranjas:'))
  let laranjasfinal =  Number(prompt('quantidade final de laranjas:'))
  let totalvendas =laranjasinicial+laranjasfinal
  alert ('total de laranjas vendidas: '+ totalvendas)
}

function App() {
  function calcularDevs(){
    let clt = Number(prompt('quantidade de clt:'))
    let estagiarios = Number(prompt('quantidade de estagiarios:'))
    let pjs =Number(prompt('quantidade de pjs:'))
    let total = clt+estagiarios+pjs
    alert ('valor total de devs: '+ total )
  }
 
    function trocarSapatos(){
    let qtdPares ,precoPar , valorTotal
    qtdPares = Number(prompt('quantidade de pares:' ))
    precoPar = Number(prompt('preço de cada par:' ))
    valorTotal= qtdPares * precoPar
    alert('valor total da troca R$'+ valorTotal.toFixed(2))

    }


  function calcularPontos(){
    let vitorias = Number(prompt('Número de vitorias:'))
    let empates  = Number(prompt('Número de empates:'))
    let pontos = vitorias*3 + empates
    alert(' o seu time tem ' + pontos + ' pontos ')

  }
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
    <h2>exercicios supimpas</h2>
    <button onClick={calcularPontos}>campeonato</button>
    <button onClick={trocarSapatos} >Trocas pé pequeno</button>
    <button onClick={calcularDevs}>Calcular Total de Dvs</button>
   <button onClick={ gerenciarFinancas}>Gerenciar finanças</button>

    <hr />
    
    <button onClick={testar}>Testar</button>
     <button onClick={calcularMedia}>Média</button>
  </div>
  )
}

export default App
