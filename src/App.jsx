 import React, { useState } from 'react'
 
import './App.css'
import StartGame from './Component/StartGame'
import GamePlay from './Component/GamePlay'

 

function App() {
  const [Isgameplay, setgameplay] = useState(false)

  const toggleBtn= ()=>{
    setgameplay(!Isgameplay)
  }

  
  

  return (
    <>
     
    {Isgameplay ? <GamePlay/>:<StartGame toggle={toggleBtn}/>}
    </>
    
  )
}

export default App
