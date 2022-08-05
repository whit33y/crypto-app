import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import {useEffect, useState} from 'react'
import ShowAllDetails from './ShowAllDetails'

function AllCryptoDetails() {
    const [cryptoData, setCryptoData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [search, setSearch] = useState('')
    useEffect(()=>{
        let search = window.location.search
        let params = new URLSearchParams(search)
        let foo = params.get('q')
        setSearch(foo)
        setLoaded(true)
    },[])
    useEffect(()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${search}?localization=true`)
        .then((res)=> res.json())
        // .then((data)=> setCryptoData({data}))
        // .then((data)=>setCryptoData(data))
    },[loaded])
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
            {cryptoData  && cryptoData.map(data=>{
                    return <ShowAllDetails name={data.name}/>
            })} 
            <Footer />
        </div>
    );
}

export default AllCryptoDetails