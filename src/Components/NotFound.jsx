import React, { memo } from 'react';
import NotFoundImage from "./NotFound.jpeg"
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <>
            <div
        className=' min-h-screen w-full flex flex-col items-center justify-center bg-indigo-100'
        >
            <img src={NotFoundImage} alt="Not found" 
            className=' w-60 object-cover object-center '
            />

            <Link
            className=' text-3xl border-2 hover:bg-orange-400 rounded-md px-4 py-2 '
            to={"/"}
            >
             Back to shopping
            </Link>
        </div>
        </>
     );
}

export default memo(NotFound);