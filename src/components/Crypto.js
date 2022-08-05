import React, {useState, useEffect} from 'react'
import ShowCrypto from './ShowCrypto'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function Crypto() {
    const [cryptos, setCryptos] = useState(null)
    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res)=> res.json())
        .then((data)=>setCryptos(data))
    },[])
    if(!cryptos)
    {
        return(
            <div className='container'>
                <Navbar />
                <Footer />
            </div>
        )
    }
    return (
        <div className='container'>
            <Navbar />
        {cryptos  && cryptos.map(data=>{
            return <ShowCrypto 
                name={data.name} current_price={data.current_price} image={data.image} 
                highest_24h={data.high_24h}lowest_24h={data.low_24h} price_change_percentage_24h={data.price_change_percentage_24h} symbol={data.symbol} ath={data.ath} atl={data.atl}
                ath_date={data.ath_date} price_change_24h={data.price_change_24h} last_updated={data.last_updated}/>
        })} 
        <Footer />
        </div>
     );
}

export default Crypto

