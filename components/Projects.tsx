import { projects } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from "next/image";
import Link from "next/link";


const Projects = () => {
    return (
        <section className='min-h-screen'>
            <div className='flex items-center justify-center pt-8 md:pt-16'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-serif'>My Projects</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-10'>
                {projects.map(({id, title, des, img, sourceCode, demo }) => (
                    <div key={id}>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600"
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2"
                                >
                                    {des}
                                </CardItem>
                                <CardItem CardItem
                                    translateZ="100"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4">
                                    <Image
                                        src={img}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <CardItem
                                        translateZ={20}
                                        as={Link}
                                        href={sourceCode}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl text-xs font-normal"
                                    >
                                        Source Code →
                                    </CardItem>
                                    <CardItem
                                        translateZ={20}
                                        href={demo}
                                        as={Link}
                                        target="__blank"
                                        className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                                    >
                                        Demo
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center md:pb-8'>
                <h1 className='text-2xl md:text-4xl font-serif'>More Projects Coming Soon...</h1>
            </div>
        </section>

    )
}

export default Projects