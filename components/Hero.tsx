'use client'

import React from 'react'
import { ReactTyped } from 'react-typed'


const Hero = () => {
    return (
        <section className="flex items-center justify-left h-screen bg-gray-950 text-white px-6">
            <div className='max-w-4xl text-left px-20'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-serif mb-8'>I am Andrew</h1>
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-serif mb-12">I am a {""}
                    <ReactTyped
                        strings={["Software Engineer", "College Student", "Software Developer"]}
                        typeSpeed={100}
                        backSpeed={80}
                        loop
                    />
                </h1>
                <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
                    Lets Explore
                </button>
            </div>
        </section>
    )
}

export default Hero