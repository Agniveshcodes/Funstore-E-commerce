import React, { useEffect, useState } from 'react';
import { ProductsId } from './Api';
import {VscLoading} from "react-icons/vsc"


function Cart({Cart , updateCart }) {
    const ProductsIds = Object.keys(Cart)
    const[product,setProduct] = useState([])
    const[loading,setLoading] = useState(true)
    const[localCart , setLocalCart] = useState(Cart)

    useEffect(()=>{
       setLocalCart(Cart)
    },[Cart])

    useEffect(()=>{
        const myProductPromises = ProductsIds.map(function(id){
            return ProductsId(id)
        })
        

        Promise.all(myProductPromises).then(function(items){
            setProduct(items)
            setLoading(false)
        })

    },[Cart])

    if(loading){
        return <div
        className='h-80 bg-indigo-100 flex items-center justify-center w-full'
        >
            <VscLoading 
            className=' text-4xl font-bold text-orange-600 animate-spin '
            />
        </div>
    }

    function handleRemove (e) {
        const newCart = {...Cart}
        const productId = e.target.getAttribute('productid')
        delete newCart[productId]
        updateCart(newCart)    
        setLoading(true)
    }

    function handleChange (e) {
        const newValue = +e.target.value
        const productid = e.target.getAttribute("productid")

        console.log("new value is " , newValue , "and productid is " , productid )
        const newLoaclCart = {...localCart , [productid]: newValue}
        console.log(newLoaclCart)
        setLocalCart(newLoaclCart)
    }

    function updateCartCount () {
        updateCart(localCart)
        console.log("new cart value is " , localCart)
    }
    

    return ( 
        <>
          
            <div
            className=' grid grid-cols-3 w-200 mx-auto bg-indigo-100 justify-center p-5 '
            >
      {product.map(function(p , index ){
                return <div
                className=' flex justify-center '
                key={index}
                >
                    <div
                className=' h-96 w-60 flex flex-col items-center 
                border-2 border-black px-4 py-2 m-2 justify-center rounded-md hover:bg-yellow-100 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-500 bg-indigo-100'
                >
                    <img src={p.thumbnail} alt="" 
                    className=' object-cover object-center overflow-hidden w-60 rounded-md'
                    />

                    
    
                    <h1
                    className=' text-2xl font-semibold'
                    >
                        {p.title}
                    
                    </h1>
    
                    <h1
                    className=' text-2xl font-semibold'
                    >
                        {p.category}
                    
                    </h1>
    
                    <h1
                    className=' text-2xl font-semibold'
                    >
                        ${p.price}
                    
                    </h1>

                    <input
                    productid={p.id}
                    value={localCart[p.id]}
                    onChange={handleChange}                    
                    type="number"  
                    className=' w-20 text-center font-bold border-2 border-gray-300 rounded-md px-1 text-xl my-2 text-orange-500 '
                    />


                    <button
                    className=' text-md font-bold border-2 border-black px-3 py-1 rounded-md my-2 hover:bg-gray-400 '
                    productid = {p.id}
                    onClick={handleRemove}
                    >
                        remove
                    </button>

                    <button
                className=' text-md font-bold border-2 border-black px-3 py-1 rounded-md my-1 hover:bg-gray-400  '
                onClick={updateCartCount}
                >
                    updateCart
                </button>
    
                </div>
                </div>
            })} 
            </div>
                
        </>
     );
}

export default Cart;