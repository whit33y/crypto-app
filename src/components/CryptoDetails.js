import React from "react"
import {Link} from 'react-router-dom'
function CryptoDetails(props) {
    return (
        <div className="cryptoDetails">
            <p><b>{props.symbol.toUpperCase()}: </b> {props.current_price} $</p>
            <ul>
                <li><b>Low/High(24h):</b> {props.lowest_24h}$ / {props.highest_24h}$</li>
                <li><b>Price change(24h):</b> {Math.floor(props.price_change_24h * 1000)/1000}$ </li>
                <li><b>Price change(24h/%):</b> {Math.floor(props.price_change_percentage_24h*1000)/1000} % </li>
                {/* <li><b>All time high:</b> {props.ath}$</li>
                <li><b>All time low:</b> {props.atl}$</li> */}
            </ul>
            <Link to={`/alldetails?q=${props.id}`}>View  more</Link>
        </div>
    );
}

export default CryptoDetails