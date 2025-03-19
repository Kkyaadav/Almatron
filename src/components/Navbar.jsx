"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {AlmatronLogo} from "./AlmatronLogo";
import { AlmatronLogod } from "./AlmatronLogod";
import { AlmatronLogoa } from "./AlmatronLogoa";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-white/10 shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-none">
        <div className="flex items-center">
          <AlmatronLogod/>          
          <AlmatronLogoa/>
        
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {["Home", "About", "Timeline", "Sponsor", "FAQ", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-blue-600 transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <motion.button
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center">
          <AlmatronLogo />
          
          <span className="ml-2 text-xl font-bold text-blue-700">ALMATRON</span>
        
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-blue-50 to-white z-0 shadow-md flex flex-col items-center space-y-4 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {["Home", "About", "Timeline", "Sponsor", "FAQ", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className=" text-black hover:text-blue-600 transition-colors font-medium"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
          <motion.button
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(false)}
          >
            Register
          </motion.button>
        </motion.nav>
      )}
    </motion.header>
  );
};
