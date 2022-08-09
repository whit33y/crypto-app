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
        <nav className='p-4 bg-blue-300 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-blue-300'>
           <ul className='flex justify-between'>
            <div className='flex justify-between text-slate-50	'>
                <li className='mr-10'> 
                    <Link to='/' className='text-2xl'>Home <span class="material-symbols-outlined">home</span></Link>
                </li>
                {user ?               
                <li className='mr-10'>
                    <Link to='/crypto' className='text-2xl'>Cryptos <span class="material-symbols-outlined">currency_bitcoin</span></Link> 
                </li>      
                : ''}  
                <li className='mr-10'>
                    <Link to='/about' className='text-2xl'>About <span class="material-symbols-outlined">explore</span></Link>
                </li>  
            </div>
                {
                user ? 
                <li>
                    <button onClick={handleSignOut} className='text-2xl text-slate-50' >Logout <span class="material-symbols-outlined">logout</span></button>
                </li>  :
                <li>
                    <Link to='/login' className='text-2xl text-slate-50'>Log in <span class="material-symbols-outlined">login</span></Link>
                </li>
                }          
            </ul> 
        </nav>
        <h1 class='text-5xl font-bold sm:text-4xl text-center'>Crypto app ™️</h1>
        </div>
    );
}

export default Navbar