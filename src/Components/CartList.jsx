import  {useState , useEffect} from 'react';
import CartRow from './CartRow';


function CartList ({ products , cart , updateCart}) {
    const[localCart , setLocalCart] = useState(cart)

    useEffect(()=>{
        setLocalCart(cart)
     },[cart])

     function handleChange (productId , newValue) {
        const newLoaclCart = {...localCart , [productId]: newValue}
        setLocalCart(newLoaclCart)
    }

    function updateCartCount () {
        updateCart(localCart)
    }

    function handleRemove (productId) {
        const newCart = {...cart}
        delete newCart[productId]
        updateCart(newCart)    
    }


    return ( 
        <>
            <div
            className=' h-fit w-fit  mx-auto p-8 bg-indigo-100'
            >
                <div
                className=' text-md font-serif font-minibold text-orange-500 space-x-8 flex justify-around w-100 ml-96  mr-20 mb-4'
                >
                    <span
                    className=' mr-6'
                    > product</span>
                    <span> price </span>
                    <span> quantity</span>
                    <span> subtotal</span>

                </div>

              <div
              className=''
              >
               {products.map(function(p , index ){
               return  <CartRow key={index} products={p} quantity={localCart[p.id]} onCartQuantityChange={handleChange} CartDelete={handleRemove} />
            })}
              </div>


            </div>

            <div
            className=' flex justify-end w-180 mx-auto my-2  border-2 border-gray-200 px-4'
            >
                <button
                className=' text-md font-bold border-2 bg-orange-400  border-black px-3 py-1 rounded-md my-1 hover:bg-gray-400 '
                onClick={updateCartCount}
                >
                    updateCart
                </button>
            </div>

        </>
     );
}

export default CartList ;