"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-1000 shadow-md py-4 px-[5%] transition-all">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">PINNACLE</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-[15px] font-medium">
          <li><a href="#about" className="hover:text-[#c9a961]">About</a></li>
          <li><a href="#services" className="hover:text-[#c9a961]">Services</a></li>
          <li><a href="#technology" className="hover:text-[#c9a961]">Technology</a></li>
          <li><a href="#portfolio" className="hover:text-[#c9a961]">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#c9a961]">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute w-full left-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[350px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-[16px] font-medium">
          <li><a href="#about" className="hover:text-[#c9a961]" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#services" className="hover:text-[#c9a961]" onClick={() => setOpen(false)}>Services</a></li>
          <li><a href="#technology" className="hover:text-[#c9a961]" onClick={() => setOpen(false)}>Technology</a></li>
          <li><a href="#portfolio" className="hover:text-[#c9a961]" onClick={() => setOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#c9a961]" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

