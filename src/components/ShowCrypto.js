import React, {useState} from "react"
import CryptoDetails from './CryptoDetails'

function ShowCrypto(props) {
    const [details, setDetails] = useState(false)
    function handleDetails(){
        setDetails(current => !current)
    }
    return (
    <div className="flex flex-col mb-10">
        <img src={`${props.image}`} className='h-48 w-48 mx-auto'/>
        <h3 className='text-center text-3xl'>{props.name}</h3>
    <div className="flex justify-center">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-1xl' onClick={()=>handleDetails()}><b>{details ? 'HIDE DETAILS' : 'MORE DETAILS'}</b></button>
    </div>
        {details ? <CryptoDetails current_price={props.current_price} highest_24h={props.highest_24h} lowest_24h={props.lowest_24h} symbol={props.symbol} ath={props.ath} atl={props.atl} ath_date={props.ath_date} price_change_24h={props.price_change_24h} price_change_percentage_24h={props.price_change_percentage_24h} last_updated={props.last_updated} id={props.id}/> : <div></div>}
    </div> 
    );
}

export default ShowCrypto