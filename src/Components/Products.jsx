import React from 'react';
import ProductCard from './ProductCard';


function Produts({products}) {
    return ( 
        <>
            {
                products.map(function(items,index){
                    return <ProductCard {...items} key={index} />
                })
            }
        </>
     );
}

export default Produts;