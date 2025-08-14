import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/real.tsx'

function App() {
  

  return (
    <>
      <h1 className='bg-amber-200 text-black p-4 rounded-xl'>TailWindCSS</h1>
      <Card username="Luxury House"/>
      <Card username="ON SALE "/>
      
    </>
  )
}

export default App
