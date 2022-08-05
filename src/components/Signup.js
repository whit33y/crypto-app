import {useRef, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import { useAuth } from '../contexts/Auth'

export function Signup(){
    const emailRef = useRef()
    const passwordRef = useRef()

    const { signUp } = useAuth()

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const { error } = await signUp({ email, password })

        if (error) {
            alert('error signing in')
        } else {
            navigate('/')
        }
    }
    return(
        <div className='container'>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label htmlFor='input-email'>Email</label>
                <input id='input-email' type='email' ref={emailRef} />
                <label htmlFor='input-password'>Password</label>
                <input id='input-password' type='password' ref={passwordRef} />
                <button type='submit'>Sign up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log In</Link>
            </p>
            <Footer />
        </div>
    )
}
