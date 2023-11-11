import React from 'react';
import {BsCart3} from "react-icons/bs"
import { Link } from 'react-router-dom';

function NavBar ({cartCount}) {
    return ( 
        <>
            <div
            className=' w-200 bg-indigo-400 px-8 py-2 flex justify-between mb-10 mx-auto rounded-sm'
            >
                <Link
                to={"/"}
                >
                <img className=' w-10 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtE8PwkA2EOQThQn6lzjcH47oPAy09keZ8A&usqp=CAU" alt="" />
                </Link>

                <div 
                className=' flex cursor-pointer '
                >
                <Link
                to={"cart"}
                >
                <BsCart3 
                className=' text-4xl text-orange-600 '
                />
                </Link>
                <span
                className='  text-3xl font-bold '
                >
                    {cartCount}
                </span>
                </div>
            </div>
        </>
     );
}

export default NavBar ;