import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screen/Home'
import ProductDetail from '../screen/ProductDetail'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<ProductDetail/>} />
    </Routes>
  )
}

export default MyRoutes