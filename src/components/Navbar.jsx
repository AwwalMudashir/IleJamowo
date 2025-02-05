import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-green-600' : 'bg-transparent'} p-4`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-xl font-bold text-white cursor-pointer"
            onClick={() => navigate('/')}
          >
            Ile-Jamowo Family
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => navigate('/')}>Home</span>
            <span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => navigate('/family-tree')}>Family Tree</span>
            <span className="text-white hover:text-gray-300 cursor-pointer" onClick={() => navigate('/history')}>History</span>
          </div>

          {/* Hamburger Icon (Only visible on small screens) */}
          <div className="md:hidden">
            <i className="fas fa-bars text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(true)}></i>
          </div>
        </div>
      </nav>

      {/* Sliding Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-[80%] bg-green-700 shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-50`}>
        {/* Close Button */}
        <div className="p-4 flex justify-end">
          <i className="fas fa-times text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(false)}></i>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-6 text-white text-2xl px-8 mt-10">
          <span 
            className="border border-white rounded-lg px-6 py-3 text-center hover:bg-white hover:text-green-700 transition-all cursor-pointer" 
            onClick={() => { setMenuOpen(false); navigate('/'); }}
          >
            Home
          </span>
          <span 
            className="border border-white rounded-lg px-6 py-3 text-center hover:bg-white hover:text-green-700 transition-all cursor-pointer" 
            onClick={() => { setMenuOpen(false); navigate('/family-tree'); }}
          >
            Family Tree
          </span>
          <span 
            className="border border-white rounded-lg px-6 py-3 text-center hover:bg-white hover:text-green-700 transition-all cursor-pointer" 
            onClick={() => { setMenuOpen(false); navigate('/history'); }}
          >
            History
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
