import { useState } from 'react'
import './App.css'
import React from 'react'
import User from './Context/user'
import Login from './componets/Login.jsx'
import Profile from './componets/profile.jsx'

function App() {
  return (
    <User>
      <Login/>
      <Profile/>
    </User>
  )
}

export default App
