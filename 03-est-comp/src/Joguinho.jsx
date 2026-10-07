import React, { useState } from 'react'

function Joguinho(){
    const [resultado ,setResultado] =useState ()
   function classificar(){
    let pontos = Number(prompt("quantos pontos?"))
    if(pontos <= 10){
        setResultado("mogo o betinha...")
    }else if(pontos >=100){
        setResultado("mantenha esperança, o sol nasce ate pra cachorro...")
   }else if(pontos <= 200){
    setResultado("supimpa!")


   }else {setResultado("farmou aura")
   }
}
  return (
    <div className='jogo'>
        <h2>Jogo da diully</h2>
         <button onClick={classificar}>Classificar</button>
         {resultado}



    </div>
  )
}

export default Joguinho