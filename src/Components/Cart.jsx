import React, { useEffect, useState } from 'react';
import { ProductsId } from './Api';
import {VscLoading} from "react-icons/vsc"
import CartList from './CartList';



function Cart({Cart , updateCart }) {
    const ProductsIds = Object.keys(Cart)
    const[product,setProduct] = useState([])
    const[loading,setLoading] = useState(true)
    

    

    useEffect(()=>{
        setLoading(true)
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

    

    

    
    

    return ( 
        <>
          
            <CartList products={product} cart={Cart} updateCart={updateCart} /> 
                
        </>
     );
}

export default Cart;