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
        <div>
        <nav className='navbarContainer'>
           <ul className='navbarLinks'>
            <div>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {user ?               
                <li>
                    <Link to='/crypto'>Cryptos</Link> 
                </li>      
                : ''}  
                <li>
                    <Link to='/about'>About</Link>
                </li>  
                {
                user ? <li>
                    <button onClick={handleSignOut} className='navbarLogoutBtn'>Logout</button>
                </li>  :
                <li>
                    <Link to='/login'>Log in</Link>
                </li>
                }      
            </div>       
            </ul> 
        </nav>
        <h1>Crypto app</h1>
        </div>
    );
}

export default Navbar