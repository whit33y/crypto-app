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
        fetch(`https://api.coingecko.com/api/v3/coins/${foo}?localization=true`)
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
                <img src={`${cryptoData.image.large}`} className='showCryptoImg'/>
                <h3>{cryptoData.name} - {cryptoData.symbol}</h3>
                <p className='caption'>Hashing algorithm: {cryptoData.hashing_algorithm}</p>
            <Footer />
        </div>
    );
}

export default AllCryptoDetails