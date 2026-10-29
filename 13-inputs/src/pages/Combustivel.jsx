import React, { useState } from 'react'

function Combustivel() {
  const [entrada, setEntrada] = useState('')
  const [resultado, setResultado] = useState([])

  function processarCombustivel() {
    let valores = entrada.trim().split(/\s+/)
    let alcool = 0
    let gasolina = 0
    let diesel = 0

    for (let i = 0; i < valores.length; i++) {
      let codigo = Number(valores[i])

      if (codigo === 1) {
        alcool++
      } else if (codigo === 2) {
        gasolina++
      } else if (codigo === 3) {
        diesel++
      } else if (codigo === 4) {
        break
      }
    }

    setResultado([
      'MUITO OBRIGADO',
      `Alcool: ${alcool}`,
      `Gasolina: ${gasolina}`,
      `Diesel: ${diesel}`
    ])
  }

  return (
    <div className='combustivel'>
      <h2>Tipo de Combustível</h2>
      <label htmlFor="">Códigos</label>
      <input type="text"
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
      />
      <button onClick={processarCombustivel}>Calcular</button>
      <div>
        {resultado.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  )
}

export default Combustivel