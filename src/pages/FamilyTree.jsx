import React from 'react'
import FamilyList from '../components/FamilyList'
import GeneralTree from '../components/GeneralTree'

const FamilyTree = () => {
  return (
    <div>
      <div className=" bg-[url('/fam-house.jpg')] h-[100vh] bg-cover bg-center text-center py-16 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-6xl font-bold text-white">Our Family</h1>
      </div>

      </div>
      {/* <FamilyList/> */}
       <GeneralTree/>
    </div>
  )
}

export default FamilyTree
