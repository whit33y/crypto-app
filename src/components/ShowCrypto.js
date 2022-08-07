import React, {useState} from "react"
import CryptoDetails from './CryptoDetails'

function ShowCrypto(props) {
    const [details, setDetails] = useState(false)
    function handleDetails(){
        setDetails(current => !current)
    }
    return (
    <div className="showCrypto">
        <img src={`${props.image}`} className='showCryptoImg'/>
        <h3 className='text-3xl fonpmnt-bold underline'>{props.name}</h3>
        <button onClick={()=>handleDetails()} className='showCryptoBtn'><b>{details ? 'HIDE DETAILS' : 'MORE DETAILS'}</b></button>
        {details ? <CryptoDetails current_price={props.current_price} highest_24h={props.highest_24h} lowest_24h={props.lowest_24h} symbol={props.symbol} ath={props.ath} atl={props.atl} ath_date={props.ath_date} price_change_24h={props.price_change_24h} price_change_percentage_24h={props.price_change_percentage_24h} last_updated={props.last_updated} id={props.id}/> : <div></div>}
    </div> 
    );
}

export default ShowCrypto