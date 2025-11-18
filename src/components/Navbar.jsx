
export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-1000 shadow-md py-4 px-[5%] transition-all">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-bold tracking-tight">PINNACLE</div>
        <ul className="hidden md:flex gap-10 text-[15px] font-medium">
          <li><a href="#about" className="hover:text-[#c9a961]">About</a></li>
          <li><a href="#services" className="hover:text-[#c9a961]">Services</a></li>
          <li><a href="#technology" className="hover:text-[#c9a961]">Technology</a></li>
          <li><a href="#portfolio" className="hover:text-[#c9a961]">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#c9a961]">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
