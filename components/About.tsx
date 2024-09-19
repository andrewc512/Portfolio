import React from 'react'
import { SiCplusplus, SiPython, SiHtml5, SiCss3, SiTypescript, SiTailwindcss, SiNextdotjs, SiFirebase, SiFlutter } from "react-icons/si"
import { FaJava, FaJs, FaReact, FaGithub } from "react-icons/fa"

const About = () => {
    return (
        <section className="flex flex-wrap items-start justify-center p-8 min-h-screen bg-gray-950 text-white px-6" id="about">
            <div className='flex flex-wrap items-center'>
                <img
                    src="/images/IMG_3121.jpg"
                    alt="profile"
                    className="w-72 h-72 rounded-full object-cover"
                />
                <div className='p-4'>
                    <h2 className='text-4xl font-serif font-bold'>Andrew Chen</h2>
                    <h2 className='text-3xl font-serif'>CS Major undergrad @ University of California, Santa Barbara</h2>
                    <h2 className='pt-2 text-1xl font-serif'>I&apos;m adept at and passionate about learning new skills and technologies.</h2>
                    <h2 className='text-1xl font-serif'>Currently looking for internships and any job opportunities...</h2>
                    <h2 className='text-1xl font-serif'>Feel free to <a href='#contact' className='text-blue-300 font-bold hover:underline'> reach out</a> if you&apos;d like to collaborate or discuss a project!</h2>
                </div>
            </div>
            <div className='p-4'>
                <h2 className='text-3xl font-serif'>My Tech Stack</h2>

                <div className="flex flex-col lg:flex-row justify-around gap-8 pt-2">
                    <div className='bg-black border border-white/[0.1] shadow-xl shadow-white/[0.05] rounded-lg p-6 max-w-lg w-full'>
                        <h3 className="text-2xl font-serif mb-4">Coding Languages</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col items-center">
                                <SiCplusplus className="text-4xl text-blue-600" />
                                <p className="mt-2">C++</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJava className="text-4xl text-red-600" />
                                <p className="mt-2">Java</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJs className="text-4xl text-yellow-500" />
                                <p className="mt-2">JavaScript</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiPython className="text-4xl text-yellow-400" />
                                <p className="mt-2">Python</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiHtml5 className="text-4xl text-orange-600" />
                                <p className="mt-2">HTML</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiCss3 className="text-4xl text-blue-600" />
                                <p className="mt-2">CSS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTypescript className="text-4xl text-blue-500" />
                                <p className="mt-2">TypeScript</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black border border-white/[0.1] shadow-xl shadow-white/[0.05] rounded-lg p-6 max-w-lg w-full'>
                        <h3 className="text-2xl font-serif mb-4">Tools</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex flex-col items-center">
                                <FaReact className="text-4xl text-blue-400" />
                                <p className="mt-2">React.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTailwindcss className="text-4xl text-teal-400" />
                                <p className="mt-2">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiNextdotjs className="text-4xl" />
                                <p className="mt-2">Next.js</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaGithub className="text-4xl" />
                                <p className="mt-2">GitHub</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiFlutter className="text-4xl text-blue-500" />
                                <p className="mt-2">FlutterFlow</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiFirebase className="text-4xl text-yellow-400" />
                                <p className="mt-2">Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

    )
}

export default About