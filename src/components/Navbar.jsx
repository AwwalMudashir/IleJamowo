import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-green-600' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center p-4">
        <div className="logo text-xl font-bold text-white  cursor-pointer" onClick={()=>navigate('/')} >Ile-Jamowo Family</div>
        <div className="nav-links space-x-4">
          <span className="text-white hover:text-gray-300 cursor-pointer"  onClick={()=>navigate('/')}>Home</span>
          <span className="text-white hover:text-gray-300  cursor-pointer"  onClick={()=>navigate('/family-tree')}>Family Tree</span>
          <span className="text-white hover:text-gray-300  cursor-pointer"  onClick={()=>navigate('/history')}>History</span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar