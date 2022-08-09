import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import {Link} from 'react-router-dom'
import { useAuth } from '../contexts/Auth'


function Welcome() {
    const { user } = useAuth()
    return (
        <div className='container flex flex-col mx-auto'>
            <Navbar />
            <section>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Check our powerful Crypto app ™️</h2>

        {user ? 
         <p class="mt-4 text-gray-600">
         Get the most accurate crypto data, <br/>
         check current prices, last price changes,<br/>
         all time highest/lowest prices and so much more!<br/>
         Press view crypto to acces our exclusive data!
         </p>
        
        :
        <p class="mt-4 text-gray-600">
        Get the most accurate crypto data, <br/>
        check current prices, last price changes,<br/>
        all time highest/lowest prices and so much more!<br/>
        Press get started to login in and acces our exclusive data! 
        </p>
        }
        {user ?
         
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-300 border border-blue-400 rounded hover:bg-transparent hover:text-blue-400 active:text-blue-400 focus:outline-none focus:ring"
          href="/crypto">
          <span class="text-sm font-medium"> View crypto </span>

          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        :
        <a
          class="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-300 border border-blue-400 rounded hover:bg-transparent hover:text-blue-400 active:text-blue-400 focus:outline-none focus:ring"
          href="/login"
        >
          <span class="text-sm font-medium"> Get Started </span>

          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a> 
        }
      </div>
    </div>
  </div>
</section>

            <Footer />
        </div>
    );
}

export default Welcome