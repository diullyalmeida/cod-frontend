import React, { useState } from 'react'

function Home() {
    const[inputLogin, setInputlogin]=useState('')
    function efetuarLogin(){
        if(inputLogin == 'diully' || inputLogin == 'alicia'){
            alert('você farma aura')}
            else if (inputLogin == 'nataly'){
                alert('BETA BETA BETA ALERTA BETA SEM AURA !!!!!!!!!!!!')
            }
            else {
            alert('aura média,tente de novo.')
        }

    }
  return (
    <div className="app">
      <h1>inputs controlados</h1>
  <label htmlFor="login">login </label>
  <input type="text" 
  value={inputLogin}
  onChange={(e)=> setInputlogin(e.target.value)}/>
  <p>
    {inputLogin}
  </p>
  <button onClick={efetuarLogin}>Entrar</button>
    </div>
    

  )
}

export default Home