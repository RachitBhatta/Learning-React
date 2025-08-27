import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todo'

function App() {

  return (
    
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
