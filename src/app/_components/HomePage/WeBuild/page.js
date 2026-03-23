import React from 'react'
import Ecommerce from '../../../../Components/Images/ecommerce.png'
import Image from 'next/image'
import { TiTick } from "react-icons/ti";

const WeBuild = () => {
    return (
        <div>
            <h1 className='text-center mt-10 text-[30px] md:text-[40px] font-jakarta'>What I Actually Do<span className='text-red-800'>?</span></h1>
            <div className="sections-parts">
                <div className="ecommerce-part flex flex-col md:flex-row px-10 md:px-20 justify-between items-center">
                    <div className="div-text md:w-[500px]">
                        <h1 className='text-[25px]  md:text-[35px] leading-[25px] md:leading-[35px] font-jakarta mt-5 md:mt-0'>Build a High Conversions <br /> <span className='text-red-800'>E-commerce Websites</span></h1>
                        <p className='text-[16px] text-justify mt-3 md:mt-5'>With my expertise in e-commerce development, I create visually stunning and user-friendly online stores that drive sales and enhance customer experience. From seamless navigation to secure payment gateways, I ensure your e-commerce website is optimized for success.</p>
                        <ul className='list-disc mt-3 text-[16px] text-justify'>
                            <li className='flex items-center'><TiTick className='text-green-500 mr-2' /> Visually Stunning Design</li>
                            <li className='flex items-center'><TiTick className='text-green-500 mr-2' /> User-Friendly Navigation</li>
                            <li className='flex items-center'><TiTick className='text-green-500 mr-2' /> Secure Payment Gateways</li>
                            <li className='flex items-center'><TiTick className='text-green-500 mr-2' /> Mobile Responsiveness</li>
                            <li className='flex items-center'><TiTick className='text-green-500 mr-2' /> SEO Optimization</li>

                        </ul>
                    </div>
                    <div className="images">
                        <Image width={1000} height={1000} className=' md:w-[500px] ' src={Ecommerce} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeBuild
