import React, { useState } from 'react'

function CorridaDeLesmas() {
  const [velocidades, setVelocidades] = useState('')
  const [resultado, setResultado] = useState('digita ai')

  function calcularNivel() {
    let lista = velocidades.trim().split(/\s+/).map(Number)
    let maiorVelocidade = Math.max(...lista)

    if (maiorVelocidade >= 20) {
      setResultado('3')
    } else if (maiorVelocidade >= 10) {
      setResultado('2')
    } else {
      setResultado('1')
    }
  }

  return (
    <div className='corrida'>
      <h2>A Corrida de Lesmas</h2>
      <label htmlFor="">Velocidades</label>
      <input type="text"
        value={velocidades}
        onChange={(e) => setVelocidades(e.target.value)}
      />
      <button onClick={calcularNivel}>Calcular</button>
      {resultado}
    </div>
  )
}

export default CorridaDeLesmas