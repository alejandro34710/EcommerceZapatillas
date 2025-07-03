import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Politica from '../components/Politica'
import NewletterBox from '../components/NewletterBox'
import Footer from '../components/Footer'

import Bestseller from '../components/BestSeller'

const Home = () => {
  return (
    <> 
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
     <Hero />
     <LatestCollection />
     <Bestseller />
     <Politica />
     <NewletterBox />
    </div>
    </>
  )
}

export default Home
