import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <header className="bg-blue-300 rounded">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-white s:hidden text-xl font-bold   " href="/">
                <span className="sr-only">Home</span>
                Crypto app ™️
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12 mr-5">
              <nav className=" md:block" aria-labelledby="header-navigation">
                <h2 className="sr-only" id="header-navigation">Header navigation</h2>

                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-white transition hover:text-white/75 font-bold text-lg" href="/crypto">
                      Cryptos
                    </a>
                  </li>

                  <li>
                    <a className="text-white transition hover:text-white/75 font-bold text-lg" href="/about">
                      About
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex">
                {user ?
                  <button onClick={handleSignOut} className='px-5 py-2.5 text-sm font-medium text-black bg-white rounded-md shadow' >Logout</button>
                  :
                  <a
                    className="px-5 py-2.5 text-sm font-medium text-black bg-white rounded-md shadow"
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
