import React from 'react'
import HomePageBanner from './HomePageBanner/HomePageBanner'
import WhyWebsiteImp from './WhyWebsiteImp/WhyWebsiteImp'
import HomeWhyChooseMe from './HomeWhyChooseMe/HomeWhyChooseMe'
import Services from './Services/Services'
import WeBuild from './WeBuild/page'

const HomePage = () => {
  return (
    <div>
        <HomePageBanner/>
        <WhyWebsiteImp/>
        <WeBuild/>
        <HomeWhyChooseMe/>
        <Services/>
    </div>
  )
}

export default HomePage
