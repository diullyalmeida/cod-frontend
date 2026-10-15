import React, { useState } from 'react'

function Palco() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let somFuncionando = prompt("O som está funcionando? (sim ou não)") == "sim"
    let figurinoCompleto = prompt("O figurino está completo? (sim ou não)") == "sim"

    if (somFuncionando && figurinoCompleto) {
      setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!")
    } else if (somFuncionando && figurinoCompleto) {
      setResultado("Sem som. Realizar apresentação alternativa no salão.")
    } else if (somFuncionando && figurinoCompleto) {
      setResultado("Faltando parte do figurino. Te vira no improviso!")
    } else {
      setResultado("Apresentação cancelada. Hora da mágica de desaparecer…")
    }
  }

  return (
    <div className="Palco">
      <h3>Apresentação de Sarumano</h3>
      <button onClick={calcularValores}>Verificar Palco</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Palco