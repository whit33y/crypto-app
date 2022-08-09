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
            <div className='container flex flex-col h-screen justify-between mx-auto'>
                <Navbar />
                <p className='text-bold text-center'>Loading data...</p>
                <Footer />
            </div>
        )
    }
    return (
        <div className='container flex flex-col h-screen justify-between mx-auto'>
            <Navbar />
            <div className='container flex flex-col h-screen justify-between mx-auto text-center'>
            <button className='font-extrabold'><a href='/crypto'>Click here to go back<span className="material-symbols-outlined font-extrabold">arrow_back</span></a></button>
            <div className='flex flex-col justify-center'>
                <img src={`${cryptoData.image.large}`} className='h-48 w-48 mx-auto'/>
                <p className='text-2xl font-bold'>{cryptoData.name} - {cryptoData.symbol}</p>
                <p className='text-sm'><b>Market rank:</b>{cryptoData.market_cap_rank}</p>
            </div>
            <div className='flex flex-col justify-center text-center text-lg'>
                <hr/>
                <b><p>Latest price changes</p></b>
                <p><b>Highest price(24h):</b> {cryptoData.market_data.high_24h.usd} USD 🇺🇸<br /><b>Lowest price(24h):</b> {cryptoData.market_data.low_24h.usd} USD 🇺🇸<br /><b>Price change(24h):</b> {Math.floor(cryptoData.market_data.price_change_24h_in_currency.usd * 1000)/1000} USD 🇺🇸</p>
                <hr />
                <b><p>Current price in different currencies</p></b> 
                <p>🇺🇸 {cryptoData.market_data.current_price.usd}usd 🇵🇱 {cryptoData.market_data.current_price.pln}pln 🇪🇺 {cryptoData.market_data.current_price.eur}eur 🇯🇵 {cryptoData.market_data.current_price.jpy}jpy<br/> 🇨🇳{cryptoData.market_data.current_price.cny}cny 🇬🇧{cryptoData.market_data.current_price.gbp}gbp 🇦🇺{cryptoData.market_data.current_price.aud}aud🇨🇭{cryptoData.market_data.current_price.chf}chf</p><hr/>
                <b><p>Highest/lowest prices of all time</p></b>
                <p><b>All time highest price:</b> {cryptoData.market_data.ath.usd} usd 📈<br /><b>All time lowest price:</b> {cryptoData.market_data.atl.usd} usd 📉</p>
                <hr />
            </div>
            <div className='flex flex-col justify-center'>
                <a href={cryptoData.links.homepage[0]} className='underline font-extrabold'>Visit official {cryptoData.name} website </a>
                <a href={cryptoData.links.official_forum_url[0]} className='underline font-extrabold'>Visit official {cryptoData.name} community forum </a>
                </div>
            <div className='showCryptoFooter'>
                <p className='text-sm'><b>Last update:</b> {cryptoData.last_updated}</p>
            </div>
            
            </div>
            <Footer />
        </div>
    );
}

export default AllCryptoDetails