import React from 'react'
import Hero from '../components/Hero'
import OurHistory from '../components/OurHistory'
import Memories from '../components/Memories'
import FamilyEvents from '../components/FamilyEvents'


const Home = () => {
  return (
    <div>
      <Hero/>
      <OurHistory/>
      <Memories/>
     
      {/* <FamilyEvents/>  */}
    </div>
  )
}

export default Home
