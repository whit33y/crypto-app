import React from 'react'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function NotFound() {
    return (  
        <div className='container flex flex-col h-screen justify-between mx-auto'>
            <Navbar className='h-10'/>
            <main className='mb-auto h-10'><p> 404 Page not NotFound</p></main>
            <Footer className='h-10'/>
        </div>
    );
}

export default NotFound