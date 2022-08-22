import React from "react"
import { Link } from 'react-router-dom'


function ShowCrypto(props) {

    return (
        <div className="flex flex-col justify-between">
            <img src={`${props.image}`} className='h-30 w-40 mx-auto' alt={`${props.name} crypto`} />
            <p className='text-center text-xl font-bold'>{props.name}</p>
            <div className="flex justify-center">
                <Link className='bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center text-1' to={`/alldetails?q=${props.id}`}>View  more</Link>
            </div>
        </div>
    );
}

export default ShowCrypto