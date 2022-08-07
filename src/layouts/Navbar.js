import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

function Navbar() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    async function handleSignOut() {
      await signOut()
      navigate('/login')
    } 
    return (
        <div className='container mx-auto mb-3'>
        <nav className='mb-4 bg-blue-300 pb-3 pt-3'>
           <ul className='flex justify-between'>
            <div className='flex justify-between text-slate-50	'>
                <li className='mr-10'> 
                    <Link to='/' className='text-2xl'>Home</Link>
                </li>
                {user ?               
                <li className='mr-10'>
                    <Link to='/crypto' className='text-2xl'>Cryptos</Link> 
                </li>      
                : ''}  
                <li className='mr-10'>
                    <Link to='/about' className='text-2xl'>About</Link>
                </li>  
            </div>
                {
                user ? 
                <li>
                    <button onClick={handleSignOut} className='text-2xl text-slate-50' >Logout</button>
                </li>  :
                <li>
                    <Link to='/login' className='text-2xl '>Log in</Link>
                </li>
                }          
            </ul> 
        </nav>
        <h1 class='text-5xl mb-5 text-center'>Crypto app</h1>
        </div>
    );
}

export default Navbar