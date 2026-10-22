import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'


function App() {
  
  return (
   <div className="app">
<Home />
<Demo />
   </div>
  )
}

export default App
