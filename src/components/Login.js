import {useRef, useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import Welcome from './Welcome'

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
    const {user} = useAuth()
    return(
        
        <div className='container flex flex-col h-screen justify-between mx-auto'>
            {user ? <Welcome /> :
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
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-1xl mb-3'>Login</button>
                <p className='text-1xl'>Don't have an account? <Link to="/signup" className='underline'>Sign up</Link><br/>You must be logged in to acces our exclusive crypto info</p>
            </form>
            <Footer />
            </div>}
            
        </div>
    )
}
