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
                    value={localCart[p.id]}
                    onChange={function internalOnChange(event){
                        handleChange( +event.target.value , p.id)
                    }}                    
                    type="number"  
                    className=' w-20 text-center font-bold border-2 border-gray-300 rounded-md px-1 text-xl my-2 text-orange-500 '
                    />


                    <button
                    className=' text-md font-bold border-2 border-black px-3 py-1 rounded-md my-2 hover:bg-gray-400 '
                    productid = {p.id}
                    onClick={function internalOnClick(){
                        handleRemove(p.id)
                    }}
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