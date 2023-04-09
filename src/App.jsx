import React from 'react'
import Weather from './pages/Weather'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='weather' element={<Weather />} />

      </Routes>
    </div>
  )
}

export default App