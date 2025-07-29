'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const WebsitesImpCards = ({ img, title, desc, width, height }) => {
  const [isTouch, setIsTouch] = useState(false)
  const [showDesc, setShowDesc] = useState(false)

  useEffect(() => {
    const checkTouchDevice = () => {
      if (typeof window !== 'undefined') {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
      }
    }
    checkTouchDevice()
  }, [])

  const handleMouseEnter = () => {
    if (!isTouch) setShowDesc(true)
  }

  const handleMouseLeave = () => {
    if (!isTouch) setShowDesc(false)
  }

  const handleTouch = () => {
    if (isTouch) setShowDesc(prev => !prev)
  }
const nothandleTouch = () => {
    if (isTouch) setShowDesc(prev => !prev)
  }

  return (
    <div
      className="relative w-full md:w-[300px] h-72 cursor-pointer border border-red-800 overflow-hidden rounded-xl shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
      onTouchEnd={nothandleTouch}
    >
      {/* Front Content */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 
        transition-opacity duration-300 ease-in-out 
        ${showDesc ? 'opacity-30' : 'opacity-100'}`}>
        <Image src={img} alt={title} width={width} height={height} className="mb-4" />
        <h2 className="text-lg font-bold text-center px-2 font-jakarta">{title}</h2>
      </div>

      {/* Back Content */}
      <div className={`absolute inset-0 flex items-center justify-center bg-red-800 bg-opacity-90 p-5 
        transition-opacity duration-300 ease-in-out z-20 
        ${showDesc ? 'opacity-100' : 'opacity-0'}`}>
        <p className={`text-white text-sm font-muli text-center`}>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default WebsitesImpCards
