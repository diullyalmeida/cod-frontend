import React,{ useState }  from 'react'

function Peso() {
  const [resultado ,setResultado] =useState ()
     function ideal(){
      let altura = Number(prompt("qual é sua altura"))
      let genero =(prompt("qual é seu gênero?"))
      let peso 
    
      if(genero =="mulher"){
        peso = 62.1 *altura-44.7
    }else if(genero =="homem" ){
        peso =72.7 *altura-58
    
    }

    setResultado (ideal)

  }
    return (
      <div className='jogo'>
          <h2>Total peso</h2>
           <button onClick={ideal}>Peso ideal</button>
           {resultado}
          </div>
  )
  }

export default Peso