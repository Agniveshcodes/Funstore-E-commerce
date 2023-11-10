import React, { useState } from 'react'
import './App.css'
import ProductShow from './Components/ProductShow'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import NavBar from './Components/Nav'

function App() {
      const CartObject = localStorage.getItem("my-product") || "{}"
      const ProductCart = JSON.parse(CartObject)
      const[cart,setCart] = useState(ProductCart)

      function handeCart (productId , productCount ){
        const oldCount = cart[productId] || 0 
        const newCount = {...cart , [productId] : oldCount + productCount}
        setCart(newCount)
        const CartString = JSON.stringify(newCount)
        localStorage.setItem("my-product" , CartString)
      }
  
    const totalCount = Object.keys(cart).reduce(function(output , current ){
      return output + cart[current]
    },0)

  return (
    <>
        <NavBar cartCount={totalCount} />

        <Routes>
          <Route index element={<ProductShow />} ></Route>
          <Route path='/productdetail/:id' element= {<ProductDetail onAddToCart = {handeCart} />} ></Route>
        </Routes>
    </>
  )
}

export default App
