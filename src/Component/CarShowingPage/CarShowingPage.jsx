import React from 'react'
import CarShowingNavBar from '../CarShowingNavbar/CarShowingNavBar'
import CarShowingPageAds from '../CarShowingPageAds/CarShowingPageAds'
import CarShowingPageHero from '../CarShowingPageHero/CarShowingPageHero'

const CarShowingPage = () => {
  return (
    <div>
        <CarShowingNavBar/>
        <CarShowingPageAds/>
        <CarShowingPageHero/>
    </div>
  )
}

export default CarShowingPage