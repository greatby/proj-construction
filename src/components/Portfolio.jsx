export default function Portfolio() {
  const items = [
    { title: "Sky Villas Mumbai", desc: "45 Ultra-Luxury Residences | South Mumbai" },
    { title: "Pinnacle Business Park", desc: "Grade-A Commercial Complex | Gurgaon" },
    { title: "Heritage Villas Jaipur", desc: "30 Palatial Villas | Heritage District" },
    { title: "Urbania Bangalore", desc: "Integrated Township | Electronic City" }
  ];

  return (
    <section id="portfolio" className="py-28 px-[5%] bg-white">
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <h2 className="text-[48px] font-light">
          Stunning <strong className="font-bold">Signature Projects</strong>
        </h2>
        <p className="text-[18px] leading-[1.8] text-[#666]">
          Explore our portfolio of exceptional developments...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
        {items.map((p, i) => (
          <div key={i} className="relative h-[450px] overflow-hidden rounded cursor-pointer group">
            <div className="absolute inset-0 bg-[#333]"></div>

            <div className="absolute bottom-0 left-0 right-0 p-10 bg-linear-to-t from-black/90 to-transparent text-white">
              <h3 className="text-[28px] font-semibold">{p.title}</h3>
              <p className="text-[#ccc] text-[16px]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
