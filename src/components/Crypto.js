import React, {useState, useEffect} from 'react'

import ShowCrypto from './ShowCrypto'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function Crypto() {

    function searchEngine(cryptoName, searchContent, crypto_array){
        if(cryptoName.includes(searchContent)){
            crypto_array.push(cryptoName)
        }
    }

    const [cryptos, setCryptos] = useState(null)
    const [search, setSearch] = useState('')
    const [searchedCryptos, setSearchedCryptos] = useState()

    const cryptoNames = []
    let findedCryptos = []

    useEffect(()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((res)=> res.json())
        .then((data)=>setCryptos(data))
        
    },[])

    useEffect(()=>{
        findedCryptos = []
        for(let i=0; i<cryptoNames.length; i++){
            searchEngine(cryptoNames[i], search, findedCryptos)
        }
        setSearchedCryptos(findedCryptos)

    },[search])

    if(!cryptos)
    {
        return(
            <div className='container mx-auto'>
                <Navbar />
                    <p className='text-bold text-center'>Loading data...</p>
                <Footer />
            </div>
        )
    }
    return (
        
        <div className='container mx-auto'>
            <Navbar />
        
            <div>
                <form>
                <div className="flex justify-center relative mb-3">
                    <input className="w-half p-3 mt-1 text-sm border-2 border-gray-200 rounded" id='input-search' type='text' onChange={event=> setSearch(event.target.value.toLowerCase())} placeholder='search for crypto'/>
                </div>
                </form>
        {cryptos  && cryptos.map(data=>{
                return <ShowCrypto 
                name={data.name} current_price={data.current_price} image={data.image} 
                highest_24h={data.high_24h}lowest_24h={data.low_24h} price_change_percentage_24h={data.price_change_percentage_24h} symbol={data.symbol} ath={data.ath} atl={data.atl}
                ath_date={data.ath_date} price_change_24h={data.price_change_24h} last_updated={data.last_updated} id={data.id} searched_cryptos={searchedCryptos}/>

        })} 
        </div>

        <Footer />
        {cryptos  && cryptos.map(data=>{
            cryptoNames.push(data.name.toLowerCase())
        })} 
        </div>
     )
}

export default Crypto

