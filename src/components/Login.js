import {useRef, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import { useAuth } from '../contexts/Auth'


export function Login(){
    const emailRef = useRef()
    const passwordRef = useRef()

    const { signIn } = useAuth()

    const navigate = useNavigate() 


    async function handleSubmit(e){
        e.preventDefault()

        const email = emailRef.current.value
        const password = passwordRef.current.value

        const { error } = await signIn({ email, password })

        if (error) {
          alert('Wrong email or password.')
        } else {
          // Redirect user to Dashboard
          navigate('/')
        }
    }
    return(
        <div className='container  mx-auto'>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label htmlFor='input-email'>Email</label>
                <input id='input-email' type='email' ref={emailRef} />
                <label htmlFor='input-password'>Password</label>
                <input id='input-password' type='password' ref={passwordRef} />
                <button type='submit'>Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
            <h5>
                You must be logged in to acces Cryptos info
            </h5>
            <Footer />
        </div>
    )
}
