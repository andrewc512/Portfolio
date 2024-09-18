import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { IoDocumentTextOutline } from "react-icons/io5"
import { FaGithub } from "react-icons/fa"
import Link from 'next/link'

const Contact = () => {
    return (
        <footer className="bg-gray-950 text-white pt-10 sm:pt-4" id="contact">
            <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-serif md:py-16 sm:py-8'>I think we should talk</h1>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-serif md:py-2 sm:py-2'>Get In Touch!</h1>
                <div className='flex items-center space-x-2 pt-8 pb-4'>
                    <MdOutlineEmail />
                    <a href="mailto:andrewc51205@gmail.com" className="hover:underline text-2xl">
                        andrewc51205@gmail.com
                    </a>
                </div>
                <div className='flex items-center space-x-2 pt-2 pb-4'>
                    <IoDocumentTextOutline />
                    <Link href="/Andrew_Chen_Resume_Updated_9_10(1).pdf" target="_blank" className="hover:underline text-2xl">
                        <h2>Resume/CV</h2>
                    </Link>
                </div>
                <div className='flex items-center space-x-2 pt-2 pb-12'>
                    <FaGithub />
                    <Link href="https://github.com/andrewc512" target="_blank" className="hover:underline text-2xl">
                        <h2>my github</h2>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Contact