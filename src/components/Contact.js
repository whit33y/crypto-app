import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function Contact() {
  return (
    <div className='container flex flex-col h-screen justify-between mx-auto'>
      <Navbar className='h-10' />
      <section>
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16 lg:items-center"
          >
            <div class="max-w-lg mx-auto text-center lg:text-left lg:mx-0">
              <h2 class="text-3xl font-bold sm:text-4xl">Contact us</h2>

              <p class="mt-4 text-gray-600">
                Fell free to get touch with us whenever you want!<br />
                We are ready to answer your questions 24/7. <br />
                Press one of this buttons to copy our contact details.

              </p>
            </div>

            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <button
                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-blue-300 hover:ring-1 hover:ring-blue-300"
              >
                <span class="inline-block p-3 rounded-lg bg-gray-50">
                  <span class="material-symbols-outlined">
                    call
                  </span>

                </span>

                <h6 class="mt-2 font-bold">Telephone</h6>

                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  +48-111-222-333
                </p>
              </button>

              <button
                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-blue-300 hover:ring-1 hover:ring-blue-300"
              >
                <span class="inline-block p-3 rounded-lg bg-gray-50">
                  <span class="material-symbols-outlined">
                    mail
                  </span>
                </span>

                <h6 class="mt-2 font-bold">Email</h6>

                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  blah@blah.com
                </p>
              </button>

              <button
                class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-blue-300 hover:ring-1 hover:ring-blue-300">
                <span class="inline-block p-3 rounded-lg bg-gray-50">
                  <span class="material-symbols-outlined">location_on</span>
                </span>
                <h6 class="mt-2 font-bold">Address</h6>
                <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                  Colorado, USA
                </p>
              </button>

            </div>
          </div>
        </div>
      </section>

      <Footer className='h-10' />
    </div>
  );
}

export default Contact