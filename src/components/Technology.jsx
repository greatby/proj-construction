export default function Technology() {
  const features = [
    { title: "BIM Technology", text: "Precision planning and execution" },
    { title: "Smart Automation", text: "IoT-enabled systems" },
    { title: "Advanced Materials", text: "Premium sustainable materials" },
    { title: "3D Visualization", text: "Immersive virtual walkthroughs" }
  ];

  return (
    <section id="technology" className="py-28 px-[5%] bg-[#1a1a1a] text-white text-center">
      <h2 className="text-[48px] font-light mb-8">
        Next-Generation <strong className="font-bold text-[#c9a961]">Construction Technology</strong>
      </h2>
      <p className="text-[18px] max-w-[900px] mx-auto text-[#ccc] mb-12 leading-[1.8]">
        We leverage advanced construction technologies...
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 max-w-[1200px] mx-auto">
        {features.map((f, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/10 rounded">
            <h4 className="text-[14px] uppercase tracking-wide text-[#c9a961] mb-2">{f.title}</h4>
            <p className="text-[15px] text-[#aaa]">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
