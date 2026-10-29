import React, { useState } from 'react'

function aprovado() {
  const [nota1, setNota1] = useState('')
  const [nota2, setNota2] = useState('')
  const [resultado, setResultado] = useState('digita ai')

  function calcularResultado() {
    let n1 = Number(nota1)
    let n2 = Number(nota2)
    let media = (n1 + n2) / 2

    if (media >= 7) {
      setResultado('Aprovado')
    } else if (media >= 4) {
      setResultado('Recuperacao')
    } else {
      setResultado('Reprovado')
    }
  }

  return (
    <div className='aprovado'>
      <h2>Aprovado ou Reprovado</h2>
      <label htmlFor="">Nota 1</label>
      <input type="text"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />
      <label htmlFor="">Nota 2</label>
      <input type="text"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />
      <button onClick={calcularResultado}>Calcular</button>
      {resultado}
    </div>
  )
}

export default aprovado