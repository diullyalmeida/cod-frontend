import './App.css'

function App() {



   function calcularSalario() {
  let salario = Number(prompt('Manda o salário mensal:'))
  let dias = Number(prompt('Manda os dias trabalhados:'))

  let valorDia = 0

  if (dias > 0) {
    valorDia = salario / dias
  }

  alert('Valor por dia: ' + valorDia)
}

function calcularSemanal() {
  let salario = Number(prompt('Manda o salário mensal:'))
  let dias = Number(prompt('Manda os dias trabalhados:'))

  let valorDia = 0

  if (dias > 0) {
    valorDia = salario / dias
  }

  let salarioSemanal = valorDia * 5

  alert('Salário semanal: ' + salarioSemanal) 
}

function calcularCarga() {
  let pesoBruto = Number(prompt('Manda o peso bruto:'))
  let tara = Number(prompt('Manda a tara:'))

  let carga = pesoBruto - tara

  alert('Peso da carga: ' + carga)
}
   function calcularCustos() {
  let custos = Number(prompt('Manda os custos mensais:'))
  let recebido = Number(prompt('Manda quanto foi recebido no dia:'))

  let falta = custos - recebido

  alert('Falta pagar: ' + falta)
}

function calcularChance() {
  let n = Number(prompt('Manda o número de vezes que olhou o celular:'))

  let chance = (0.1 / (1 + 500 * n)) * 100

  alert('Chance de sucesso: ' + chance + '%')
}
function calcularVendas() {
  let inicial = Number(prompt('Digite a quantidade inicial de laranjas:'))
  let final = Number(prompt('Digite a quantidade final de laranjas:'))

  let vendas = inicial - final

  alert('Foram vendidas ' + vendas + ' laranjas.')
}

   function calcularFrete() {
  let peso = Number(prompt("Digite o peso:"));
  let distancia = Number(prompt("Digite a distância:"));
  let volume = Number(prompt("Digite o volume:"));

  let frete = 15 + (2 * peso) + (0.05 * distancia) + (10 * volume);

  alert("O preço do frete é: R$ " + frete);
}
function calcularLucro() {
  let bruto = Number(prompt("Digite o valor bruto:"));
  let premiacoes = Number(prompt("Digite o valor das premiações:"));
  let presentes = Number(prompt("Digite o valor dos presentes:"));
  let comissoes = Number(prompt("Digite o valor das comissões:"));

  let lucro = bruto - premiacoes - presentes - comissoes;

  alert("O lucro foi: R$ " + lucro);
}
function calcularLucroCapitao() {
  let gastos = Number(prompt("Digite os gastos:"));
  let fatIngressos = Number(prompt("Digite o faturamento dos ingressos:"));
  let fatItens = Number(prompt("Digite o faturamento dos itens:"));

  let faturamento = fatIngressos + fatItens;
  let lucro = faturamento - gastos;
  let percentual = (lucro / gastos) * 100;

  alert(
    "Lucro: R$ " + lucro +
    "\nLucro percentual: " + percentual + "%"
  );
}

function calcularLucroCapitao() {
  let gastos = Number(prompt("Digite os gastos:"));
  let fatIngressos = Number(prompt("Digite o faturamento dos ingressos:"));
  let fatItens = Number(prompt("Digite o faturamento dos itens:"));

  let faturamento = fatIngressos + fatItens;
  let lucro = faturamento - gastos;
  let pe

  alert(
    "Lucro: R$ " + lucro +
    "\nLucro percentual: " + percentual + "%"
  );
}
function calcularBombas() {
  let shows = Number(prompt("Digite a quantidade de shows:"));
  let preco = Number(prompt("Digite o preço de cada bomba:"));

  let bombas = shows * 7;
  let custo = bombas * preco;

  alert("Bombas necessárias: " + bombas + "\nCusto total: R$ " + custo);
}

function calcularSobra() {
  let salario = Number(prompt("Digite o salário:"));
  let moradia = Number(prompt("Digite o valor da moradia:"));
  let agua = Number(prompt("Digite o valor da água:"));
  let luz = Number(prompt("Digite o valor da luz:"));
  let internet = Number(prompt("Digite o valor da internet:"));
  let gasolina = Number(prompt("Digite o valor da gasolina:"));
  let streamings = Number(prompt("Digite o valor dos streamings:"));
  let telefone = Number(prompt("Digite o valor do telefone:"));
  let outros = Number(prompt("Digite o valor de outros gastos:"));

  let total = moradia + agua + luz + internet + gasolina + streamings + telefone + outros;
  let sobra = salario - total;

  alert("O dinheiro que sobrou foi: R$ " + sobra);
}
function calcularPreco() {
  let custo = Number(prompt("Digite quanto você pagou pela obra:"));

  let precoVenda = custo * 3;

  alert("O preço de venda é: R$ " + precoVenda);
}

function calcularRacao() {
  let peso = Number(prompt("Digite o peso em gramas:"));

  let preco = (peso / 1000) * 10;

  alert("O preço da ração é: R$ " + preco);
}

function calcularChurrasco() {
  let pessoas = Number(prompt("Digite o número de pessoas:"));

  let carne = pessoas * 0.5;
  let cerveja = pessoas * 1;
  let agua = pessoas * 0.5;
  let refri = pessoas * 0.2;

  alert(
    "Carne: " + carne + " kg" +
    "\nCerveja: " + cerveja + " litros" +
    "\nÁgua: " + agua + " litros" +
    "\nRefri: " + refri + " litros"
  );
}
   function calcularDevs() {
let clt = Number(prompt('Quantos clts tem na sua empresa?'))
 let estagiarios = Number(prompt('Quantos estágiarios tem na sua empresa?'))
 let pj = Number(prompt('Quantas pjs tem na sua empresa?'))
let resultado = clt + estagiarios + pj
alert('Você tem '+ resultado + ' devs na sua empresa.')
}

function trocarSapatos(){
let qtdPares, precoPar, valorTotal
qtdPares = Number(prompt('Quantidade de pares:'))
precoPar = Number(prompt('Preco de cada par:'))

valorTotal = qtdPares * precoPar

alert('Valor total de troca: R$'  + valorTotal.toFixed(2))

}
function calcularPontos(){
let vitorias = Number(prompt('Numero de vitorias:'))
let empates = Number(prompt('Numero de empates:'))
let pontos = vitorias*3 + empates //*1
alert('O time teu tem ' + pontos + ' pontos')
   }

  function testar(){

     let nome = prompt('Qual seu nome?')
     let bocaDoSapo = nome
     alert(nome+ ', seu nome ta na bocadoSapo')
  }
     function calcularMedia(){

      let nota1 = Number(prompt('Manda a primeira nota: '))
      let nota2 = Number(prompt('Manda a segunda nota: '))

      let media = (nota1+nota2) / 2
      alert('Sua média: ' + media)
  }
  return (
  
   <div className="cont-app">
   
    
 {
  
  ( <div className="header-container">
      <div className="title-wrapper">
        <span className="sparkles"></span>
        <h1 className="title">Javascript no React</h1>
        <span className="sparkles right"></span>
      </div>
      <p className="subtitle">exercicios</p>
    </div>
  )
}

    <h2>bloco a </h2>
<button onClick={calcularPontos} >Campeonato</button>
<button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
<button onClick={calcularDevs}>Guilherme Portões</button>
<button onClick={calcularVendas}>Vendas de laranjas</button>
<button onClick={calcularCustos}>Custos da Igreja</button>
<button onClick={calcularSalario}>Salário diário</button>
<button onClick={calcularSemanal}>Salário semanal</button>
<button onClick={calcularCarga}>Peso da carga</button>
<button onClick={calcularChance}>Chance</button>
<hr />
<h2>bloco b</h2>
<button onClick={calcularFrete}>Calcular Frete</button>
<button onClick={calcularLucro}>Calcular Lucro</button>
<button onClick={calcularLucroCapitao}>Calcular Lucro</button>
<button onClick={calcularBombas}>Calcular Bombas</button>
<button onClick={calcularSobra}>Calcular Sobra</button>
<button onClick={calcularPreco}>Calcular Preço</button>
<button onClick={calcularRacao}>Calcular Ração</button>
<button onClick={calcularChurrasco}>Calcular Churrasco</button>


<hr />
<h2></h2>
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>Média</button>
   </div>
  

  )
}

export default App