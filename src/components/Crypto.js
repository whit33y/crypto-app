import React, { useState, useEffect } from 'react'

import ShowCrypto from './ShowCrypto'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function Crypto() {
    const [search, setSearch] = useState('')
    const [cryptos, setCryptos] = useState(null)
    const [searchedCryptos, setSearchedCryptos] = useState()

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => res.json())
            .then((data) => { setCryptos(data); setSearchedCryptos(data) })
    }, [])

    useEffect(() => {
        const filteredCryptos = cryptos && cryptos.filter(crypto => {
            const searchedName = crypto.name.toLowerCase()
            return search === "" ? cryptos : searchedName.includes(search)
        })
        setSearchedCryptos(filteredCryptos)
    }, [search])

    if (!cryptos) {
        return (
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

            <div className='mb-10'>
                <form>
                    <div className="flex justify-center relative mb-3">
                        <input className="w-half p-3 mt-1 text-lg border-2 border-gray-200 rounded" id='input-search' type='text' onChange={event => setSearch(event.target.value.toLowerCase())} placeholder='search for crypto...' />
                    </div>
                </form>
                <main className="flex gap-20 justify-center flex-wrap md:justify-center mx-40">

                    {searchedCryptos && searchedCryptos.map(data => {
                        return <ShowCrypto
                            name={data.name} current_price={data.current_price} image={data.image}
                            highest_24h={data.high_24h} lowest_24h={data.low_24h} price_change_percentage_24h={data.price_change_percentage_24h} symbol={data.symbol} ath={data.ath} atl={data.atl}
                            ath_date={data.ath_date} price_change_24h={data.price_change_24h} last_updated={data.last_updated} id={data.id} searched_cryptos={searchedCryptos} key={data.id} />
                    })}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Crypto

