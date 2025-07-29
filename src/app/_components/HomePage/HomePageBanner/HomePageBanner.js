'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const HomePageBanner = () => {
  return (
    <div className='w-full h-[80vh] lg:h-[100vh] flex items-center justify-center px-8 md:px-16'>
      <motion.div
        className="banner-text flex flex-col items-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <motion.p
          className='bg-blue-500 px-4 py-1 -mb-3 text-white text-[10px] md:text-[10px] font-muli rounded-full shadow-sm'
          variants={fadeInUp}
        >
          MERN Stack Web Developer | Full-Stack Web Solutions for the Digital Era
        </motion.p>

        <motion.div
          className="name-desc flex flex-col items-center gap-2"
          variants={fadeInUp}
        >
          <h1 className='text-3xl md:text-5xl font-jakarta font-bold flex gap-2 min-w-[320px] lg:min-w-[510px]'>
            <span>Welcome to</span>
            <span className='text-red-800'>
              <Typewriter
                words={['Mr. Saad']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className='text-sm text-center md:text-base font-muli italic'>
            Where passion meets exploration.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HomePageBanner
