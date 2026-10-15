import React, { useState } from 'react'

function Deslocamento() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let estaGripado = prompt("Você está gripado? (sim ou não)")
    let tempoViagem = Number(prompt("Qual o tempo de viagem em minutos?"))

    if (estaGripado == "não" && tempoViagem < 45) {
      setResultado("Viagem autorizada. Rumo ao show!")
    } else {
      setResultado("Deslocamento inviável. Melhor recusar este evento.")
    }
  }

  return (
    <div className="Fumaca">
      <h3>Sarumano e o Deslocamento</h3>
      <button onClick={calcularValores}>Verificar Evento</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Deslocamento