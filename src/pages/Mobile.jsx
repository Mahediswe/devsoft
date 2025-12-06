import React from 'react'
import MobileAppDevelopment from '../components/MobileAppDevelopment'
import MobileAppServices from '../components/MobileAppServices'
import DevelopmentCapabilities from '../components/DevelopmentCapabilities'
import CoreMobileFeatures from '../components/CoreMobileFeatures'
import AdvancedMobileFeatures from '../components/AdvancedMobileFeatures'
const Mobile = () => {
  return (
    <div>
      <MobileAppDevelopment/>
      <MobileAppServices/>
      <DevelopmentCapabilities/>
      <CoreMobileFeatures/>
      <AdvancedMobileFeatures/>
    </div>
  )
}

export default Mobile
