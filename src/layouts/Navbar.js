import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
      <header class="bg-blue-300 rounded">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-1 md:flex md:items-center md:gap-12">
              <a class="block text-white s:hidden text-xl font-bold   " href="/">
                <span class="sr-only">Home</span>
                Crypto app ™️
              </a>
            </div>

            <div class="md:flex md:items-center md:gap-12 mr-5">
              <nav class=" md:block" aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                <ul class="flex items-center gap-6 text-sm">
                  <li>
                    <a class="text-white transition hover:text-white/75" href="/crypto">
                      Cryptos
                    </a>
                  </li>

                  <li>
                    <a class="text-white transition hover:text-white/75" href="/about">
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="flex items-center gap-4">
              <div class="sm:gap-4 sm:flex">
                {user ?
                  <button onClick={handleSignOut} className='px-5 py-2.5 text-sm font-medium text-black bg-white rounded-md shadow' >Logout</button>
                  :
                  <a
                    class="px-5 py-2.5 text-sm font-medium text-black bg-white rounded-md shadow"
                    href="/login"
                  >
                    Login
                  </a>}
              </div>

            </div>

          </div>
        </div>
      </header>

      <h1 className='text-5xl font-bold sm:text-4xl text-center mt-10'>Crypto app ™️</h1>
    </div>
  );
}

export default Navbar
