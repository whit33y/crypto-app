import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

function About() {
  return (
    <div className='container flex flex-col h-screen justify-between mx-auto'>
      <Navbar className='h-10' />
      <section>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              About site and about me <span class="material-symbols-outlined text-4xl">token</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                class="absolute inset-0 object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="Man using a computer"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600 ">
                <p className='font-bold'>About site <span class="material-symbols-outlined">language</span></p>
                <p>
                  First about the site. It is my first real project in React. It includes many things that I learn
                  in last months. I enjoyed every single minute working on this and I hope you will also
                  like to test it.
                </p>
                <p className='font-bold'>About me <span class="material-symbols-outlined">emoji_people</span></p>
                <p>
                  My name is Jackob. I'm 21 years old and I come from Poland. My goal while I was making this project was
                  to learn and capture as much knowledge as possible. It took around 1 month of  almost everyday programming.
                </p>
                <p className='font-bold'>Used in this project <span class="material-symbols-outlined">supervised_user_circle</span></p>
                <p>
                  Technologies used in this project: <span className='underline'>React, JS, HTML, CSS, Tailwind.</span>
                  <br />Photos, fonts, icons and styles: <span className='underline'>Unsplash, Google fonts/icons, hyperui.</span>
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>


      <Footer className='h-10' />
    </div>
  );
}

export default About