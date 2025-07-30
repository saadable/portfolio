'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Bulb from '../../../../Components/Images/Bulb.png'
import Globe from '../../../../Components/Images/Globe.png'
import Graph from '../../../../Components/Images/graph.png'
import Message from '../../../../Components/Images/message.png'
import Tools from '../../../../Components/Images/Tools.png'
import Tick from '../../../../Components/Images/Tick.png'
import WebsitesImpCards from './WebsitesImpCards'

const WhyWebsiteImp = () => {
    const cards = [
        { Image: Bulb, title: 'First Impressions Matter', desc: 'A website is often the first interaction a user has with you. A clean, fast, and responsive website can build trust instantly — while a poor one can drive users away before you say a word.', width: 60, height: 60 },
        { Image: Globe, title: 'Global Reach, 24/7', desc: 'Unlike physical stores or offices, websites are accessible anytime, anywhere. They let you reach audiences across borders, time zones, and demographics — all without being awake or present.', width: 100, height: 60 },
        { Image: Graph, title: 'Credibility & Professionalism', desc: `Having a professional website signals that you're serious. It shows customers and clients that you're established, reliable, and up to date with modern standards.`, width: 200, height: 70 },
        { Image: Message, title: 'Direct Communication Channel', desc: 'Websites act as a hub for communication, whether through contact forms, newsletters, live chat, or embedded social media. It keeps everything centralized and trackable.', width: 100, height: 60 },
        { Image: Tools, title: 'Control & Customization', desc: 'Unlike social media platforms, your website gives you full control over content, design, and functionality. You decide how your story is told — and how it grows.', width: 60, height: 60 },
        { Image: Tick, title: 'Marketing & SEO Advantage', desc: 'Modern websites are built to be found. Through SEO (Search Engine Optimization), you can attract organic traffic and convert casual visitors into loyal users or paying customers.', width: 60, height: 60 },
    ]

    return (
        <div className='px-5 md:px-0 relative'>
            <h1 className="text-center font-jakarta text-[30px] md:text-[40px] font-[800] tracking-[3px]">
                Why Websites are Important in this Digital Era
                <span className="relative inline-block">
                    <span className="text-red-800 font-extrabold">?</span>
                    <span className="absolute right-6 bottom-0 w-[100px] h-[3px] bg-red-800"></span>
                </span>
            </h1>

            <div className="cardss flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap items-center gap-10 justify-center mt-10">
                {cards.map((item, i) => (
                    <motion.div
                        key={i}
                        className=""
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <WebsitesImpCards
                            img={item.Image}
                            title={item.title}
                            desc={item.desc}
                            width={item.width}
                            height={item.height}
                        />
                    </motion.div>

                ))}
            </div>
        </div>
    )
}

export default WhyWebsiteImp
