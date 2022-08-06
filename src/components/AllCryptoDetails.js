import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import {useEffect, useState} from 'react'


function AllCryptoDetails() {
    const [cryptoData, setCryptoData] = useState()
    useEffect(()=>{
        let search = window.location.search
        let params = new URLSearchParams(search)
        let foo = params.get('q')
        fetch(`https://api.coingecko.com/api/v3/coins/${foo}?localization=true&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true`)
        .then((res)=> res.json())
        .then((data)=>setCryptoData(data))
    },[])
    
    if(!cryptoData){
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
            <div className='showCryptoHeader'>
                <img src={`${cryptoData.image.large}`} className='showCryptoImg'/>
                <h2>{cryptoData.name} - {cryptoData.symbol}</h2>
            </div>
            <div className='showCryptoContent'>
                <p>Highest price(24h): {cryptoData.market_data.high_24h.usd} USD <br />Lowest price(24h): {cryptoData.market_data.low_24h.usd} USD <br /> Price change(24h): {Math.floor(cryptoData.market_data.price_change_24h_in_currency.usd * 1000)/1000} USD</p>
                <b><p>Current price in different currencies</p></b> 
                <p>🇺🇸 {cryptoData.market_data.current_price.usd}usd 🇵🇱 {cryptoData.market_data.current_price.pln}pln 🇪🇺 {cryptoData.market_data.current_price.eur}eur 🇯🇵 {cryptoData.market_data.current_price.jpy}jpy<br/> 🇨🇳{cryptoData.market_data.current_price.cny}cny 🇬🇧{cryptoData.market_data.current_price.gbp}gbp 🇦🇺{cryptoData.market_data.current_price.aud}aud🇨🇭{cryptoData.market_data.current_price.chf}chf</p>
                {/* <b><p>Popularity rate:</p></b> 
                <p>👍{Math.floor(cryptoData.sentiment_votes_up_percentage* 10)/10} 👎 {Math.ceil(cryptoData.sentiment_votes_down_percentage* 10)/10}</p> */}
                <div className='showCryptoLinks'>
                <a href={cryptoData.links.homepage[0]}>Visit official {cryptoData.name} website <img src={`${cryptoData.image.thumb}`}/></a>
                <br />
                <a href={cryptoData.links.official_forum_url[0]}>Visit official {cryptoData.name} community forum <img src={`${cryptoData.image.thumb}`}/></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AllCryptoDetails