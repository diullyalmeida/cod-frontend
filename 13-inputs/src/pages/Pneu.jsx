import React, { useState } from 'react'

function Pneu() {
    const[pneu , setPneu]= useState ('')
    const[digitada, setDigitada]= useState ('')
    const[diferenca, setDiferenca]= useState ('digita ai')
    function calcularPressao(){
let pressao = Number(digitada) - Number(pneu)
setDiferenca(pressao)
    }
  return (
    <div className='pneu'>
      <h2>Pneu</h2>
      <label htmlFor="">Presão Pneu</label>
      <input type="text" 
      value={pneu}
      onChage={(e) => setPneu(e.target)}
      />
       <label htmlFor="">Presão Desejada</label>
      <input type="text" 
      value={digitada}
      onChage={(e) => setDigitada(e.target)}/>
      <button onClick={calcularPressao}>Calcular</button>
      {diferenca}
    </div>
  )
}

export default Pneu