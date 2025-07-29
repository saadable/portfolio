'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../public/Developer.json' // adjust path accordingly

const LottieAnimation = () => {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}

export default LottieAnimation
