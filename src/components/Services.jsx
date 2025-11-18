export default function Services() {
  const services = [
    { icon: "🏗️", title: "Luxury Construction", text: "State-of-the-art construction methodologies..." },
    { icon: "🏢", title: "Property Development", text: "Strategic land acquisition..." },
    { icon: "✨", title: "Project Management", text: "Comprehensive oversight..." },
    { icon: "🎨", title: "Architectural Design", text: "Collaboration with world-renowned architects..." },
    { icon: "🔧", title: "Interior Design", text: "Bespoke interior solutions..." },
    { icon: "🌿", title: "Sustainable Building", text: "Eco-conscious construction practices..." }
  ];

  return (
    <section id="services" className="py-28 px-[5%] bg-[#f5f5f5]">
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <h2 className="text-[48px] font-light">
          Comprehensive <strong className="font-bold">Development Solutions</strong>
        </h2>
        <p className="text-[18px] text-[#666] leading-[1.8]">From concept to completion...</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1400px] mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-12 rounded shadow hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-[48px] mb-4 text-[#c9a961]">{s.icon}</div>
            <h3 className="text-[24px] mb-3 text-[#1a1a1a] font-semibold">{s.title}</h3>
            <p className="text-[16px] text-[#666] leading-[1.7]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
