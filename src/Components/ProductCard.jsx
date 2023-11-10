import React from 'react';
import { Link } from "react-router-dom"

function ProductCard({thumbnail,title,price,category,id}) {
    return ( 
        <>
            <div
            className=' h-96 w-60 flex flex-col items-center bg-indigo-100 
            border-2 border-black px-4 py-2 m-2 justify-center rounded-md hover:bg-yellow-100 hover:cursor-pointer hover:shadow-lg hover:shadow-gray-500'
            >
                <img src={thumbnail} alt="" 
                className=' object-cover object-center overflow-hidden w-60 rounded-md'
                />

                <h1
                className=' text-2xl font-semibold'
                >
                    {title}
                
                </h1>

                <h1
                className=' text-2xl font-semibold'
                >
                    {category}
                
                </h1>

                <h1
                className=' text-2xl font-semibold'
                >
                    ${price}
                
                </h1>

                <Link
                to={"/productdetail/" + id }
                className=' border-2 hover:bg-orange-400 text-2xl px-2 py-1 '
                >
                 view details
                </Link>

            </div>
        </>
     );
}

export default ProductCard; 