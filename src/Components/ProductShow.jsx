import React, { useState , useEffect } from 'react';
import { ProductInfo } from './Api';
import Produts from './Products';
import {VscLoading} from "react-icons/vsc"
import Nomatch from './Nomatch';
import { range } from 'lodash';
import { Link, useSearchParams  } from 'react-router-dom';

function ProductShow () {
    const[productdata ,setProductData ] = useState({})
    const[loading,setLoading] = useState(true)
    
    const [ searchParams , setSearchParams ] = useSearchParams()

    const params = Object.fromEntries([...searchParams])

    let { search , sort , page } = params;

     search = search || "" ;
     sort = sort || "default" ;
     page = +page || 1 ;

  


    useEffect(() => {

        let sortBy;
        let sortType;

        if( sort == "title"){
            sortBy = "title"
        }else if (sort === "price" ){
            sortBy = "price"
            sortType = "desc"
        }


        ProductInfo( sortBy , search , page , sortType ).then(function(items){
            setProductData(items)
            setLoading(false)
        })
    }, [ sort , page , search ]);

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
                        setSearchParams(  { ...params , search:e.target.value ,  page : 1 } , { replace : false  })
                    }}
                    />

                    <select name="" id=""
                    className="text-xl border-2 cursor-pointer border-black px-2 py-1 rounded-md"
                    value={sort}
                    onChange={(e)=>{
                        setSearchParams({ ...params , sort:e.target.value   } ,
                        {replace : false })
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
                { productdata.data.length > 0 && <Produts products={productdata.data} />}
                { productdata.data.length == 0 && <Nomatch /> }
                </div>

                    <div
                    className=' flex gap-2 my-2 p-2 w-fit  items-center font-bold bg-white'
                    
                    >
                        { range( 1 , productdata.meta.last_page + 1).map(
                          function  (pageNo)  {
                             return   <Link 
                                key={pageNo}
                                to={"?" + new URLSearchParams({...params , page : pageNo})}
                                className={' p-2 m-1 rounded-md ' + ( page === pageNo ? "bg-orange-100" : "bg-orange-600 ")}
                                >
                                {pageNo}
                                </Link>
                            }
                        )}                
                    </div>
                </div>
        </>
     );
    
}

export default ProductShow ;