import React, { useState } from 'react'

function AumentoIngresso() {
  const [precoAntigo, setPrecoAntigo] = useState('')
  const [precoNovo, setPrecoNovo] = useState('')
  const [resultado, setResultado] = useState('digita ai')

  function calcularAumento() {
    let a = Number(precoAntigo)
    let b = Number(precoNovo)

    if (a > 0) {
      let percentual = ((b - a) / a) * 100
      setResultado(`${percentual.toFixed(2)}%`)
    }
  }

  return (
    <div className='aumento'>
      <h2>Aumento do Ingresso</h2>
      <label htmlFor="">Preço Antigo</label>
      <input type="text"
        value={precoAntigo}
        onChange={(e) => setPrecoAntigo(e.target.value)}
      />
      <label htmlFor="">Preço Novo</label>
      <input type="text"
        value={precoNovo}
        onChange={(e) => setPrecoNovo(e.target.value)}
      />
      <button onClick={calcularAumento}>Calcular</button>
      {resultado}
    </div>
  )
}

export default AumentoIngresso