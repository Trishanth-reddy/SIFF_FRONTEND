import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/Nav Logo.png';

const Navbar = () => {
  // --- STATE MANAGEMENT ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudyOpen, setIsStudyOpen] = useState(false); // For Desktop hover or click
  const [isMobileStudyOpen, setIsMobileStudyOpen] = useState(false); // For Mobile drawer

  // --- STYLES ---
  // Base style for all links
  const linkBase = "block  py-2 px-3 rounded md:p-0 transition-colors duration-300";
  
  // Active vs Inactive style logic
  const getLinkClass = ({ isActive }) => 
    `${linkBase} ${isActive ? "text-yellow-400 font-bold" : "text-white hover:text-yellow-400"}`;

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="bg-black fixed w-full z-50 top-0 start-0 border-b border-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-10 md:h-10 object-contain" alt="Parikshe Logo" />
          </Link>

          {/* 2. MOBILE HAMBURGER BUTTON (Visible only on small screens) */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          {/* 3. DESKTOP MENU (Hidden on mobile, visible on md+) */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
              
              <li><NavLink to="/" className={getLinkClass}>Home</NavLink></li>
              <li><NavLink to="/about" className={getLinkClass}>About Us</NavLink></li>

              {/* Study Dropdown (Desktop) */}
              <li 
                className="relative"
                onMouseEnter={() => setIsStudyOpen(true)}
                onMouseLeave={() => setIsStudyOpen(false)}
              >
                <button className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto transition-colors">
                  Study 
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* Desktop Dropdown Menu */}
                {isStudyOpen && (
                  <div className="absolute top-full left-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                      <li>
                        <NavLink to="/sslc" className="block px-4 py-2 hover:bg-yellow-100 hover:text-black">
                          SSLC
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li><NavLink to="/career" className={getLinkClass}>Careers</NavLink></li>
              <li><NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- 4. MOBILE SLIDE-IN DRAWER (The "Slide" Effect) --- */}
      
      {/* Backdrop (Click to close) */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 z-[70] h-screen w-64 bg-zinc-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-yellow-400 font-medium">Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-yellow-400 font-medium">About Us</NavLink>
          
          <div>
            <button 
              onClick={() => setIsMobileStudyOpen(!isMobileStudyOpen)} 
              className="flex items-center justify-between w-full text-xl text-white hover:text-yellow-400 font-medium"
            >
              Study
              <svg className={`w-4 h-4 transition-transform ${isMobileStudyOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div className={`mt-2 pl-4 border-l-2 border-gray-700 overflow-hidden transition-all duration-300 ${isMobileStudyOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
              <NavLink to="/sslc" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">SSLC</NavLink>
            </div>
          </div>

          <NavLink to="/career" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-yellow-400 font-medium">Careers</NavLink>
          <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white hover:text-yellow-400 font-medium">Contact Us</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;