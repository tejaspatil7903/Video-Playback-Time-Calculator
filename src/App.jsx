import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Calculator from './Pages/Calculator'

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/calculator' element={<Calculator/>}></Route>
      </Routes>
    </div>
  )
}
