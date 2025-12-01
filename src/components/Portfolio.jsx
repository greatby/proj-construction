export default function Portfolio() {
  const items = [
    { 
      title: "Sky Villas Mumbai", 
      desc: "45 Ultra-Luxury Residences | South Mumbai",
      img: "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Pinnacle Business Park", 
      desc: "Grade-A Commercial Complex | Gurgaon",
      img: "https://plus.unsplash.com/premium_photo-1676357175446-8e85f2205ea6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Heritage Villas Jaipur", 
      desc: "30 Palatial Villas | Heritage District",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Urbania Bangalore", 
      desc: "Integrated Township | Electronic City",
      img: "https://plus.unsplash.com/premium_photo-1688069516535-357d3d4ef131?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
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
          <div
            key={i}
            className="relative h-[450px] overflow-hidden rounded group cursor-pointer"
            style={{
              backgroundImage: `url(${p.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Hover zoom effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500"></div>

            {/* Bottom gradient + content */}
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-linear-to-t from-black/90 to-transparent text-white">
              <h3 className="text-[28px] font-semibold">{p.title}</h3>
              <p className="text-[#ccc] text-[16px]">{p.desc}</p>
            </div>

            {/* Zoom image effect */}
            <div
              className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700"
              style={{
                backgroundImage: `url(${p.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
