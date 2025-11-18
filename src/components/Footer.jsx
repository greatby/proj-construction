export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#aaa] py-20 px-[5%]">
      <div className="grid md:grid-cols-4 gap-16 max-w-[1400px] mx-auto mb-12">
        <div>
          <h3 className="text-white text-[24px] mb-4">PINNACLE</h3>
          <p className="leading-[1.8] mb-4">India's premier luxury property development and construction company...</p>
          <p className="font-bold">Building the Future of Luxury</p>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-wide text-[16px] mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a className="hover:text-[#c9a961]">About Us</a></li>
            <li><a className="hover:text-[#c9a961]">Our Team</a></li>
            <li><a className="hover:text-[#c9a961]">Careers</a></li>
            <li><a className="hover:text-[#c9a961]">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-wide text-[16px] mb-4">Services</h4>
          <ul className="space-y-3">
            <li><a className="hover:text-[#c9a961]">Construction</a></li>
            <li><a className="hover:text-[#c9a961]">Development</a></li>
            <li><a className="hover:text-[#c9a961]">Management</a></li>
            <li><a className="hover:text-[#c9a961]">Consulting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white uppercase tracking-wide text-[16px] mb-4">Contact</h4>
          <ul className="space-y-3">
            <li>info@pinnacle.in</li>
            <li>+91 123 456 7890</li>
            <li>Mumbai | Delhi | Bangalore</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-[#666] border-t border-[#222] pt-6 text-[14px]">
        © 2025 Pinnacle Developments. All Rights Reserved.
      </div>
    </footer>
  );
}
