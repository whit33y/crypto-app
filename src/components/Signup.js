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
        <div className='container flex flex-col h-screen justify-between mx-auto'>
            <Navbar />
            <form onSubmit={handleSubmit}>
            <div class="relative">
                <label class="block text-xs font-medium text-gray-500" htmlFor='input-email'> Email </label>
                <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id='input-email' type='email' ref={emailRef} />
            </div>
            <div class="relative mb-3">
                <label class="block text-xs font-medium text-gray-500" htmlFor='input-password'> Password </label>
                <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id='input-password' type='password' ref={passwordRef} />
            </div>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-1xl'>Sign up</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Log In</Link>
            </p>
            <Footer />
        </div>
    )
}
