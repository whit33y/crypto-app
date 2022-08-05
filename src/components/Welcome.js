import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/Auth'


function Welcome() {
    const { user } = useAuth()
    return (
        <div className='container'>
            <Navbar />
            <h3>Welcome to crypto app</h3>
            <div>
                <h3>On our site you can </h3>
                <ul>
                    <li><p>View top 100 trending cryptos</p></li>
                    <li><p>Check prices of cryptos</p></li>
                    <li><p>Check prices from last 24h   </p></li>
                    <li><p>Check latest price changes</p></li>
                    <li><p>All time high/low prices</p></li>
                </ul>
                {user ? <h3>Just click <Link to='/crypto'>Cryptos</Link>! </h3> : <h3>Just <Link to='/login'>login</Link> to access!</h3> }
            </div>
            <Footer />
        </div>
    );
}

export default Welcome