import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Routers