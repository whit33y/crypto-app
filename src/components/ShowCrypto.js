import React, { useState } from "react"
import { Link } from 'react-router-dom'


function ShowCrypto(props) {
    const [details, setDetails] = useState(false)
    function handleDetails() {
        setDetails(current => !current)
    }

    return (
        <div className="flex flex-col justify-between">
            <img src={`${props.image}`} className='h-30 w-40 mx-auto' />
            <h3 className='text-center text-3xl'>{props.name}</h3>
            <div className="flex justify-center">
                <Link className='bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center text-1' to={`/alldetails?q=${props.id}`}>View  more</Link>
            </div>
        </div>
    );
}

export default ShowCrypto