import React from "react"

import {Link} from 'react-router-dom'

function CryptoDetails(props) {
    return (
        <div className="flex flex-col justify-center">
            <p className="text-center"><b>{props.symbol.toUpperCase()}: </b> {props.current_price} $</p>
            <ul className="flex flex-col justify-center">
                <li className="text-center"><b>Low/High(24h):</b> {props.lowest_24h}$ / {props.highest_24h}$</li>
                <li className="text-center"><b>Price change(24h):</b> {Math.floor(props.price_change_24h * 1000)/1000}$ </li>
                <li className="text-center"><b>Price change(24h/%):</b> {Math.floor(props.price_change_percentage_24h*1000)/1000} % </li>
                {/* <li><b>All time high:</b> {props.ath}$</li>
                <li><b>All time low:</b> {props.atl}$</li> */}
            </ul>
            <div className="flex justify-center">
            <Link className='bg-blue-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full text-center text-1' to={`/alldetails?q=${props.id}` }>View  more</Link>
            </div>
            <p className="text-center"><b>Last updated:</b> {props.last_updated}</p>
        </div>
    );
}

export default CryptoDetails