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
    const [navlink, setNavlink] = useState('home')
    const navLinks = [
        { label: 'Home', href: '/' },
        {
            label: 'About Me',
            subLinks: [
                { label: 'Education', href: '/education' },
                { label: 'Skills', href: '/skills' },
                { label: 'Projects', href: '/projects' },
            ]
        },
        { label: 'Contact Me', href: '/contact-me' },
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
                    className='block lg:hidden text-[30px] transition duration-500 ease-in-out transform'
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
                            className="fixed top-18.5 right-0 h-full w-[75%] max-w-sm bg-black text-white z-40 flex flex-col px-0 py-5 space-y-6 shadow-lg"
                        >
                            {navLinks.map((item, i) => {
                                const isActive = pathname === item.href
                                const isOpen = openIndex === i

                                return (
                                    <div key={i} className="relative">
                                        <button
                                            onClick={() => item.subLinks ? toggleDropdown(i) : setNav(false)}
                                            className={`flex items-center justify-between w-full text-left px-2 py-2 font-semibold rounded ${isActive ? 'bg-red-800 text-white' : 'hover:text-red-400'}`}
                                        >
                                            {item.label}
                                            {item.subLinks && (
                                                <FaAngleDown
                                                    className={`transition-transform duration-300 text-sm ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                                />
                                            )}
                                        </button>

                                        {/* Sub Links */}
                                        {item.subLinks && (
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                {item.subLinks.map((sub, j) => (
                                                    <Link
                                                        key={j}
                                                        href={sub.href}
                                                        className={`block px-6 py-2 text-sm ${pathname === sub.href ? 'bg-red-800 text-white' : 'hover:text-red-400'}`}
                                                        onClick={() => setNav(false)}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
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
                                <button
                                    onClick={() => item.subLinks ? toggleDropdown(i) : null}
                                    className={`relative flex items-center gap-1 px-3 py-1 transition duration-300
                                    ${isActive ? 'text-red-700 font-semibold' : 'hover:text-red-500'}
                                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px]
                                    before:w-0 hover:before:w-full before:bg-red-600 before:transition-all before:duration-300`}
                                >
                                    {item.label}
                                    {item.subLinks && (
                                        <FaAngleDown
                                            className={`transition-transform duration-300 text-sm mt-[1px] ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    )}
                                </button>

                                {/* Sub Links */}
                                {item.subLinks && (
                                    <div
                                        className={`absolute top-full left-0 mt-2 bg-black shadow-md border border-red-800 rounded-md z-50 w-40 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100 max-h-96' : 'opacity-0 scale-95 max-h-0 pointer-events-none'}`}
                                    >
                                        {item.subLinks.map((sub, j) => (
                                            <Link
                                                key={j}
                                                href={sub.href}
                                                className={`block px-4 py-2 text-sm hover:bg-red-800 transition duration-400 ${pathname === sub.href ? 'text-red-600 font-medium' : ''}`}
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navbar
