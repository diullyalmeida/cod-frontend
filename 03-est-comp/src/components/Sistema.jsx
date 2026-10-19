import React, { useState } from 'react'

function Sistema() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let emManutencao = prompt("Está em manutenção? (sim ou não)") == "sim"
    let emergenciaAtiva = prompt("A emergência está ativa? (sim ou não)") == "sim"

    if (emManutencao && !emergenciaAtiva) {
      setResultado("Transporte liberado para uso.")
    } else {
      setResultado("Transporte indisponível por motivo de segurança.")
    }
  }

  return (
    <div className="Sistema">
      <h3>Controle do Transporte do Parque</h3>
      <button onClick={calcularValores}>Verificar Transporte</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Sistema