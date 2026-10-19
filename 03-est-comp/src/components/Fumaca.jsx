import React, { useState } from 'react'

function Fumaca() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let criancasPequenas = Number(prompt("Quantas crianças pequenas estão próximas?"))
    let velocidadeVento = Number(prompt("Qual a velocidade do vento (em m/s)?"))

    if (criancasPequenas == 0 && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!")
    } else {
      setResultado("Fumaça bloqueada. Aguardar condições ideais.")
    }
  }

  return (
    <div className="Fumaca">
      <h3>Sarumano e a Máquina de Fumaça Mística</h3>
      <button onClick={calcularValores}>Verificar Fumaça</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Fumaca