import React, { useState } from 'react'

function Gansooo() {
    const [resultado, setResultado]=useState()
        function calcularProvisoes(){
            let marujos = Number(prompt("quantos marujos tem"))
             let comida= Number(prompt("quantos quilos de comida"))
             let comidaPorMarujo= comida/marujos;
             if (marujos >=10 && comidaPorMarujo >= 1.5){
                setResultado("provisoes suficientes rumo ao horizonte!")
             }else
             setResultado("algo está errado. posseidon não quer ninguém no mart hoje")
            
        
        }
  return (
    <div className="gansooo">
        <h3>Ganso</h3>
        <button onClick={calcularProvisoes}>calcular Provisoes</button>
      {resultado}
    </div> 
      
    
  )
}
export default Gansooo

