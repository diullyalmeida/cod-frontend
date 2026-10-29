import React, { useState } from 'react'

function Pum() {
  const [n, setN] = useState('')
  const [resultado, setResultado] = useState([])

  function gerarPum() {
    let quantidade = Number(n)
    let linhas = []
    let valor = 1

    for (let i = 0; i < quantidade; i++) {
      linhas.push(`${valor} ${valor + 1} ${valor + 2} PUM`)
      valor += 4
    }

    setResultado(linhas)
  }

  return (
    <div className='pum'>
      <h2>PUM</h2>
      <label htmlFor="">Quantidade</label>
      <input type="text"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={gerarPum}>Calcular</button>
      <div>
        {resultado.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  )
}

export default Pum