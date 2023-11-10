import React, { useState , useEffect } from 'react';
import { ProductInfo } from './Api';
import Produts from './Products';
import {VscLoading} from "react-icons/vsc"

function ProductShow () {
    const[product,setProduct] = useState([])
    const[search , setSearch ] = useState('')
    const[sort,setSort] = useState("default")
    const[loading,setLoading] = useState(true)
    let data = []

    useEffect(() => {
        ProductInfo().then(function(items){
            setProduct(items)
            console.log(items)
            setLoading(false)
        })
    }, []);

    data = product.filter(function(items){
        return items.title.toLowerCase().indexOf(search.toLowerCase()) != -1 
    })

    if( sort == "price"){
        data.sort(function(x,y){
            return x.price - y.price 
        })
    }
    if( sort == "title"){
        data.sort(function(x,y){
            return x.title < y.title ? -1 : 1 
        })
    }
   
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
            <div
            className='  w-200 bg-indigo-100 p-8 mx-auto '
            >
                <div
                className=' flex justify-end mb-4 '
                >
                     <input 
                    className=" text-xl border-2 border-black px-2 py-1 rounded-md mx-2 "
                    placeholder="search"
                    type="text" 
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    />

                    <select name="" id=""
                    className="text-xl border-2 cursor-pointer border-black px-2 py-1 rounded-md"
                    value={sort}
                    onChange={(e)=>{
                        setSort(e.target.value)
                    }}
                    >
                        <option value="title"> sort by title</option>
                        <option value="default"> sort by default</option>
                        <option value="price"> sort by price</option>
                    </select>

                </div>
               
                <div
                className='grid grid-cols-3 w-150 mx-auto '
                >
                <Produts products={data} />
                </div>


                </div>
               
            
        </>
     );
    
}

export default ProductShow ;