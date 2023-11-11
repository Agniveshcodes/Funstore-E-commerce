import React, { useState , useEffect} from 'react';
import { ProductsId } from './Api';
import { Link, useParams } from 'react-router-dom';
import {VscLoading} from "react-icons/vsc"
import { TiPlus , TiMinus } from "react-icons/ti"
import NotFound from './NotFound';


function ProductDetail({onAddToCart}) {

    const[product,setProduct] = useState("")
    const[loading,setLoading] = useState(true)
    const[count,setCount] = useState(1)
    const id = +useParams().id

    useEffect(() => {
        ProductsId(id).then(function(response){
            setProduct(response)
            setLoading(false)
        })
    }, [id]);


    if(loading){
        return <div
        className='h-80 bg-indigo-100 flex items-center justify-center w-full'
        >
            <VscLoading 
            className=' text-4xl font-bold text-orange-600 animate-spin '
            />
        </div>
    }

    if(!product){
        return <NotFound />
    } 


    if(count < 0 ){
        setCount(0)
    }

   
  

    return ( 
        <>
            <div>
                    <Link
                    className=' text-3xl text-orange-400 px-8'
                    to={"/"}
                    >
                        Back
                    </Link>
                </div>

            <div
            className=' w-200 mx-auto bg-indigo-100 p-5 flex items-center justify-center flex-col '
            >
                
                <div
            className=' h-96 w-60 flex flex-col items-center bg-indigo-100 
            border-2 border-black px-4 py-2 m-2 justify-center rounded-md   hover:bg-yellow-100 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-500'
            >
                <img src={product.thumbnail} alt="" 
                className=' object-cover object-center overflow-hidden w-60 rounded-md'
                />

                <h1
                className=' text-2xl font-semibold'
                >
                    {product.title}
                
                </h1>

                <h1
                className=' text-2xl font-semibold'
                >
                    {product.category}
                
                </h1>

                <h1
                className=' text-2xl font-semibold'
                >
                    ${product.price}
                
                </h1>

              
                    <input type="text"
                    className=' w-10 rounded-md text-xl text-orange-400 font-bold text-center'
                    value={count}
                    onChange={(e)=>{
                        setCount(+(e.target.value))
                    }}
                    />


                    <div
                    className=' flex items-center m-2 '
                    >
                        <TiMinus
                        className=' text-2xl text-orange-400 '
                        onClick={()=>{
                            setCount(count -1 )
                        }}

                        />
                    <button
                    className=' border-2 text-xl px-2 py-1 hover:bg-gray-400'
                    onClick={()=>{
                        onAddToCart( id , count)
                    }}
                    >
                        add to cart 
                    </button>
                    <TiPlus
                        className=' text-2xl text-orange-400 '
                        onClick={()=>{
                            setCount(count + 1)
                        }}
                        />
                </div>


                </div>
                <div
                className=' text-2xl text-orange-400 '
                > 
                    {product.description}
                </div>
            </div>

            <div
            className=' w-full flex justify-between px-8 '
            >
                <Link
                className=' text-3xl text-orange-400 '
                to={"/productdetail/" + (id-1)}
                onClick={()=>{
                    setCount(1)
                }}
                >
                 previous
                </Link>

                <Link
                className=' text-3xl text-orange-400 '
                to={"/productdetail/" + (id+1)}
                onClick={()=>{
                    setCount(1)
                }}
                >
                 next
                </Link>
            </div>
        </>
     );
}

export default ProductDetail;