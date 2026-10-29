import React, { useState } from 'react'

function Ho() {
  const [ho, setHo] = useState('')
  const [resultado, setResultado] = useState('digita ai')

  function calcularHo() {
    let quantidade = Number(ho)
    let texto = ''

    for (let i = 0; i < quantidade; i++) {
      texto += 'Ho '
    }

    setResultado(texto.trim() + '!')
  }

  return (
    <div className='ho'>
      <h2>Ho Ho Ho</h2>
      <label htmlFor="">Quantidade</label>
      <input type="text"
        value={ho}
        onChange={(e) => setHo(e.target.value)}
      />
      <button onClick={calcularHo}>Calcular</button>
      {resultado}
    </div>
  )
}

export default Ho