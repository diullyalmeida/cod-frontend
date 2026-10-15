import React, { useState } from 'react'

function Acesso() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let crachaValido = prompt("O crachá está válido? (sim ou não)") == "sim"
    let digitalReconhecida = prompt("A digital foi reconhecida? (sim ou não)") == "sim"

    if (crachaValido && digitalReconhecida) {
      setResultado("Acesso liberado ao Centro de Comando")
    } else if (crachaValido && digitalReconhecida) {
      setResultado("Crachá inválido. Dirija-se à recepção")
    } else if (crachaValido && !digitalReconhecida) {
      setResultado("Falha na digital. Tente novamente ou chame o suporte")
    } else {
      setResultado("Acesso negado. Verifique sua identificação.")
    }
  }

  return (
    <div className="Acesso">
      <h3>Controle de Acesso - Centro de Comando</h3>
      <button onClick={calcularValores}>Verificar Acesso</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Acesso