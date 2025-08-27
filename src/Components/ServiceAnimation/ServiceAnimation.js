'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../public/Services.json' // adjust path accordingly

const ServiceAnimation = () => {
  return (
    <div className="w-[400px] h-[400px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}

export default ServiceAnimation
