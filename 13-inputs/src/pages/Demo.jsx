import React, { useState } from 'react'

function Demo() {
    const[inputNota1, setInputNota1]=useState('')
     const[inputNota2, setInputNota2]=useState('')
     const[ resultado ,setResultado]=useState("digite suas notas e aperte o botão")
     function calcularMedia(){
        let nota1 = Number(inputNota1)
        let nota2 =Number (inputNota2)
        let media = (nota1 + nota2) / 2
setResultado(media)
     }
     
  return (
    <div className='demo'>
        <h1>Demo - médias</h1>
 <label htmlFor="">nota 1</label>
 <input type="text" 
  value={inputNota1}
  onChange={(e)=> setInputNota1(e.target.value)}
  />
 <label htmlFor="">nota 2</label>
 <input type="text" 
  value={inputNota2}
  onChange={(e)=> setInputNota2(e.target.value)}
 />
 <button onClick={calcularMedia}>Calcular média</button>
 <p>{resultado}</p>
    </div>
    
  )
}

export default Demo