import React, { useState } from 'react'
function Recrutamento() {
    const [resultado, setResultado]= useState()
        function calcularValores(){
            let sabeNadar= (prompt("você sabe nadar? (sim ou não)"))
             let idade= Number(prompt("quantos anos você tem?"))
             let recomendacao =(prompt("você tem alguma carta de recomendação?(sim ou não)"))
             let talvez = recomendacao == "sim" && idade >= 14
             if ( sabeNadar == "sim" && idade >16){
                setResultado("Aprovado para o navio")
             }else if (talvez )
            { setResultado(" Aprovado sob recomendação. Monitorar nas primeiras viagens.")
            }else ("Reprovado. Volte quando estiver mais preparado para o mar.")

             
            
        
        }
  return (
    <div className="Recrutamento">
        <h3>Recrutamento</h3>
        <button onClick={calcularValores}>Recrutamento</button>
      <p>{resultado}</p>
    </div> 
      
    
  )
}
export default Recrutamento

