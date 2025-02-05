import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="relative">
    <section className="hero bg-[url('/fam.jpg')] h-[100vh] bg-cover bg-center text-center py-16 relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Alhaji Aroes Ajala Yusuff Family Tree</h1>
        <p className="text-lg text-white mb-8">Connecting generations and preserving our legacy.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 cursor-pointer" onClick={()=>navigate('/family-tree')} >Explore Family Tree</button>
          <button className="bg-white border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-100 cursor-pointer">Add a Member</button>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Hero
