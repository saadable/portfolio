'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import LogoAvatar from '../Images/Logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaAngleDown, FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const pathname = usePathname()
    const [openIndex, setOpenIndex] = useState(null)
    const dropdownRef = useRef(null)
    const [nav, setNav] = useState(false)
    const navLinks = [
        { label: 'Home', href: '/' },
        {
            label: 'About Me',
            subLinks: [
                { label: 'Education', href: '/about-me/education' },
                { label: 'Skills', href: '/about-me/skills' },
                { label: 'Projects', href: '/about-me/projects' },
            ]
        },
        // { label: 'Services', href: '/services' },
        { label: 'Contact Me', href: '/#contact-me' },
    ]

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenIndex(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleDropdown = (i) => {
        setOpenIndex((prevIndex) => (prevIndex === i ? null : i))
    }

    // Animation variants
    const dropdownVariants = {
        hidden: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } }
    }

    return (
        <div className="w-full px-6 py-3 border-b border-red-800 z-50 bg-black fixed top-0 left-0 right-0" style={{ boxShadow: '0px 0px 10px red' }}>
            <div className="flex items-center justify-between relative">
                {/* Logo */}
                <Link href='/'>
                    <div className="Logo flex items-center gap-2">
                        <div className="Logo-img relative">
                            <div className="green-dot w-3 h-3 rounded-full bg-green-800 absolute right-0 bottom-0"></div>
                            <Image alt="Logo" src={LogoAvatar} width={50} height={50} className='rounded-full cursor-pointer' />
                        </div>
                        <div className="logo-text">
                            <p className='text-[30px] font-jakarta cursor-pointer font-[900]'>
                                <span className='text-red-800'>Mr</span>. Saad
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className='block lg:hidden text-[30px]'
                    onClick={() => setNav(!nav)}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: nav ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {nav ? <IoCloseSharp /> : <FaBars />}
                    </motion.div>
                </button>

                {/* Mobile Slide Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.div
                            ref={dropdownRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="fixed top-[72px] right-0 h-full w-full items-center  bg-black text-white z-40 flex flex-col px-0 py-5 space-y-6 shadow-lg"
                        >
                            {navLinks.map((item, i) => {
                                const isActive = pathname === item.href
                                const isOpen = openIndex === i

                                return (
                                    <div key={i} className="relative w-full px-5">
                                        {item.subLinks ? (
                                            <button
                                                onClick={() => toggleDropdown(i)}
                                                className={`flex items-center justify-between w-full text-left px-2 py-2 font-semibold rounded ${isActive ? 'bg-red-800 text-white' : 'hover:text-red-400'}`}
                                            >
                                                {item.label}
                                                <FaAngleDown
                                                    className={`transition-transform duration-300 text-sm ${openIndex === i ? 'rotate-180' : 'rotate-0'}`}
                                                />
                                            </button>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setNav(false)} // ✅ close menu after navigation
                                                className={`flex items-center justify-between w-full text-left px-2 py-2 font-semibold rounded ${isActive ? 'bg-red-800 text-white' : 'hover:text-red-400'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        )}

                                        {/* Sub Links */}
                                        <AnimatePresence>
                                            {openIndex === i && item.subLinks && (
                                                <motion.div
                                                    key="mobile-sub"
                                                    variants={dropdownVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    className="overflow-hidden w-full"
                                                >
                                                    {item.subLinks.map((sub, j) => (
                                                        <Link
                                                            key={j}
                                                            href={sub.href}
                                                            className={`block px-6 py-2 text-sm ${pathname === sub.href ? 'bg-red-800 text-white' : 'hover:text-red-400'}`}
                                                            onClick={() => setNav(false)} // ✅ close after navigation
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                )
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Desktop Navigation */}
                <div className="hidden space-x-6 relative font-muli lg:flex" ref={dropdownRef}>
                    {navLinks.map((item, i) => {
                        const isActive = pathname === item.href
                        const isOpen = openIndex === i

                        return (
                            <div key={i} className="relative">
                                {item.subLinks ? (
                                    <button
                                        onClick={() => toggleDropdown(i)}
                                        className={`relative flex cursor-pointer items-center gap-1 px-3 py-1 transition duration-300
    ${isActive ? 'text-red-700 font-semibold' : 'hover:text-red-500'}`}
                                    >
                                        {item.label}
                                        <FaAngleDown
                                            className={`transition-transform duration-300 text-sm mt-[1px] ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`relative flex cursor-pointer items-center gap-1 px-3 py-1 transition duration-300
    ${isActive ? 'text-red-700 font-semibold' : 'hover:text-red-500'}`}
                                    >
                                        {item.label}
                                    </Link>
                                )}


                                {/* Sub Links with animation */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            key="desktop-sub"
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            className="absolute top-full left-0 mt-2 bg-black shadow-md border border-red-800 rounded-md z-50 w-40 overflow-hidden"
                                        >
                                            {item.subLinks.map((sub, j) => (
                                                <Link
                                                    key={j}
                                                    href={sub.href}
                                                    className={`block px-4 py-2 text-sm hover:bg-red-800 transition duration-400 ${pathname === sub.href ? 'bg-red-800 text-white font-medium' : ''}`}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar
