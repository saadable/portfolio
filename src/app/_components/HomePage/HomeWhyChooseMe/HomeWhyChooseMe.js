'use client'
import React from 'react'
import { motion } from 'framer-motion'
import LottieAnimation from '../../../../Components/LottieAnimation/LottieAnimation'
import { TiTick } from "react-icons/ti";

const HomeWhyChooseMe = () => {
    const whyme = [
        { label: 'Custom Full Stack Web Applications.' },
        { label: 'Mobile Responsive and Fast Loading Time.' },
        { label: 'RESTful API Integration and Backend Development.' },
        { label: 'Clean Code and Modern UI/UX.' },
        { label: 'SEO Optimization and Web Performance Tuning.' },
    ]

    const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.4,
            ease: 'easeOut'
        }
    })
}


    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between px-5  lg:px-37 mt-10 gap-10">
            {/* Right Side - Text Content */}
            <motion.div
                className="why-me-text"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <h1 className='text-[30px] md:text-[40px] font-jakarta'>
                    Why Choose a Dedicated <br className='hidden md:block'/>
                    <span className="inline-block border-b-[3px] border-red-800">
                        MERN
                    </span> Stack Developer <span className='text-red-800'>?</span>
                </h1>

                <div className="why-choose-me-lists mt-1">
                    {whyme.map((item, i) => (
                        <motion.ul
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            variants={listItemVariants}
                            viewport={{ once: true }}
                            className='flex items-center gap-3'
                        >
                            <li className='flex items-center gap-3 text-[16px] font-muli'>
                                <TiTick className='text-red-800 text-[26px]' />
                                {item.label}
                            </li>
                        </motion.ul>
                    ))}
                </div>
            </motion.div>

            {/* Left Side - Lottie Animation */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <LottieAnimation />
            </motion.div>
        </div>
    )
}

export default HomeWhyChooseMe
