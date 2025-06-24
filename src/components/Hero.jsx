import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="relative">
      <section className="hero bg-[url('/optimized-images/fam.webp')] min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[100vh] bg-cover bg-center text-center py-12 sm:py-16 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center w-full h-full px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight max-w-2xl">
            Welcome to Alhaji Aroes Ajala Yusuff Family Tree
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-xl">
            Connecting generations and preserving our legacy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none">
            <button
              className="w-full sm:w-auto bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 cursor-pointer transition"
              onClick={() => navigate('/family-tree')}
            >
              Explore Family Tree
            </button>
            <button
              className="w-full sm:w-auto bg-white border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-100 cursor-pointer transition"
            >
              Add a Member
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
