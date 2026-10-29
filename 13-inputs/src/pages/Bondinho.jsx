import React, { useState } from 'react'

function Bondinho() {
  const [alunos, setAlunos] = useState('')
  const [monitores, setMonitores] = useState('')
  const [resultado, setResultado] = useState('digita ai')

  function calcularViagem() {
    let total = Number(alunos) + Number(monitores)

    if (total <= 50) {
      setResultado('S')
    } else {
      setResultado('N')
    }
  }

  return (
    <div className='bondinho'>
      <h2>Bondinho</h2>
      <label htmlFor="">Alunos</label>
      <input type="text"
        value={alunos}
        onChange={(e) => setAlunos(e.target.value)}
      />
      <label htmlFor="">Monitores</label>
      <input type="text"
        value={monitores}
        onChange={(e) => setMonitores(e.target.value)}
      />
      <button onClick={calcularViagem}>Calcular</button>
      {resultado}
    </div>
  )
}

export default Bondinho