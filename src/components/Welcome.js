import React from 'react'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

import { useAuth } from '../contexts/Auth'


function Welcome() {
  const { user } = useAuth()
  return (
    <div className='container flex flex-col justify-between h-screen mx-auto'>

      <Navbar />
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
            >
              <img
                className="absolute inset-0 object-cover w-full h-full"
                src='https://images.unsplash.com/photo-1645731504293-ad4d5da42a10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80'
                alt="Man using a computer"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">Check our powerful Crypto app ™️</h2>

              {user ?
                <p className="mt-4 text-gray-600">
                  Get the most accurate crypto data, <br />
                  check current prices, last price changes,<br />
                  all time highest/lowest prices and so much more!<br />
                  Press view crypto to acces our exclusive data!
                </p>

                :
                <p className="mt-4 text-gray-600">
                  Get the most accurate crypto data, <br />
                  check current prices, last price changes,<br />
                  all time highest/lowest prices and so much more!<br />
                  Press get started to login in and acces our exclusive data!
                </p>
              }
              {user ?

                <a
                  className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-300 border border-blue-400 rounded hover:bg-transparent hover:text-blue-400 active:text-blue-400 focus:outline-none focus:ring"
                  href="/crypto">
                  <span className="text-sm font-medium"> View crypto </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                :
                <a
                  className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-300 border border-blue-400 rounded hover:bg-transparent hover:text-blue-400 active:text-blue-400 focus:outline-none focus:ring"
                  href="/login"
                >
                  <span className="text-sm font-medium"> Get Started </span>

                  <svg
                    className="w-5 h-5 ml-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              }
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1645731504303-860e0da74fee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                  alt="Indoors house"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span
                className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Did you find a bug? <br />
                  Maybe you want to get touch with us.
                </h2>

                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                  molestiae! Quidem est esse numquam odio deleniti, beatae, magni
                  dolores provident quaerat totam eos, aperiam architecto eius quis
                  quibusdam fugiat dicta.
                </p>

                <a
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-blue-300 border border-blue-400 rounded active:text-indigo-400 hover:bg-transparent hover:text-blue-400 focus:outline-none focus:ring"
                  href="/contact"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default Welcome