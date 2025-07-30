import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
    const FooterLinks = [
        { label: 'Home', href: '' },
        { label: 'Education', href: '' },
        { label: 'Skills', href: '' },
        { label: 'Projects', href: '' },
        { label: 'Services', href: '' },
        { label: 'Contact Me', href: '' },
    ]
    const icons = [
        { social_icon: <FaFacebook /> },
        { social_icon: <FaInstagram /> },
        { social_icon: <FaLinkedin /> },
        { social_icon: <FaSquareXTwitter /> },
        { social_icon: <FaGithub /> },
    ]
    return (
        <div className='border-t-1 border-red-800 py-5 px-5 flex flex-col items-center'>
            <div className="footer-top flex flex-col md:flex-row items-center md:items-start justify-between w-full">
                <div className="small-screen flex md:hidden justify-between md:justify-center  w-full mb-5">
                    <div className="footer-top divs">
                        <p className='text-[30px] font-jakarta cursor-pointer font-[900]'>
                            <span className='text-red-800'>Mr</span>. Saad
                        </p>
                    </div>
                    <div className="footer-top divs">
                        {FooterLinks.map((item, i) => (
                            <ul>
                                <Link className='font-muli hover:text-red-800 transition ease-in-out duration-300' href={item.href}><li className='' style={{ listStyleType: 'circle' }}>{item.label}</li></Link>
                            </ul>
                        ))}
                    </div>
                </div>
                
                    <div className="footer-top divs hidden md:block">
                        <p className='text-[30px] font-jakarta cursor-pointer font-[900]'>
                            <span className='text-red-800'>Mr</span>. Saad
                        </p>
                    </div>
                    <div className="footer-top divs hidden md:block  ml-40">
                        {FooterLinks.map((item, i) => (
                            <ul>
                                <Link className='font-muli hover:text-red-800 transition ease-in-out duration-300' href={item.href}><li className='' style={{ listStyleType: 'circle' }}>{item.label}</li></Link>
                            </ul>
                        ))}
                    </div>
                
                <div className="footer-top divs ">
                    <div className="icons flex flex-col items-center">
                        <h1 className='font-jakarta text-[20px]'>My Social Media Network</h1>
                        <div className="social-media-iconss flex items-center gap-2 mt-3">
                            {icons.map((item, i) => (
                                <div
                                    className="social-icons border border-red-800 rounded-full p-4 text-[20px] hover:bg-red-800 hover:text-white hover:shadow-[0px_0px_10px_0.5px_red] transition ease-in-out duration-500 cursor-pointer"
                                >
                                    {item.social_icon}
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-[80%] my-5 h-[1px] text-red-800 bg-red-800' />
            <div className="footer-bottom flex flex-col items-center">
                <p className="text-sm font-muli">
                    Made with <span className="text-red-600">❤️</span> by <span className="font-semibold ">Mr. Saad</span>
                </p>
                <p className="text-xs  mt-1 italic font-muli">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer
