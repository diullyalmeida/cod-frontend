import React, { useState } from 'react'

function Automatizada() {
  const [resultado, setResultado] = useState()

  function calcularValores() {
    let visitantesNaArea = Number(prompt("Quantos visitantes estão na área?"))
    let horaAtual = Number(prompt("Qual a hora atual (0 a 23)?"))

    let foraDoExpediente = horaAtual < 8 || horaAtual > 18

    if (visitantesNaArea == 0 && foraDoExpediente) {
      setResultado("Liberação autorizada. Abrindo jaula.")
    } else {
      setResultado("Liberação negada. Área em uso ou fora do horário permitido.")
    }
  }

  return (
    <div className="Automatizada">
      <h3>Liberação de Jaulas</h3>
      <button onClick={calcularValores}>Verificar Jaulas</button>
      <p>{resultado}</p>
    </div>
  )
}

export default Automatizada