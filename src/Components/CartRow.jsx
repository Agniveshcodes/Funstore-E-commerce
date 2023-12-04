import React from 'react';


function CartRow ({ products ,  quantity , onCartQuantityChange , CartDelete }) {

    function handleCartQuantity (event) {
        onCartQuantityChange(products.id , +event.target.value)
    }

    function handleRemove () {
        CartDelete(products.id)
    }

    

    return ( 
        <>
            <div
            className='flex space-x-8 border-2 border-gray-600 px-4 py-1 items-center w-150 mx-auto mb-2 h-15 rounded-md justify-around '
            >
                <button
                className=' text-md font-serif font-minibold text-orange-500 '
                onClick={handleRemove}
                >
                    remove
                </button>
                <div
                className=' w-10 '
                >
                    <img className=' w-full h-full object-cover' src={products.thumbnail} alt="" />
                </div>

                    <h3
                className='text-md font-serif w-25 font-minibold text-orange-500'
                >{products.title}</h3>

                <span
                className='text-md font-serif font-minibold text-orange-500 '
                >${products.price}</span>

                <input 
                type="number"
                value={quantity}
                onChange={handleCartQuantity}
                className=' w-10 text-xl pl-2 font-serif font-minibold text-orange-500'
                />


                <span
                className='text-md font-serif font-minibold text-orange-500'
                >${products.price * quantity }</span>

            </div>
        
        </>
     );
}

export default CartRow ;