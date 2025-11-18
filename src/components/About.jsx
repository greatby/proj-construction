export default function About() {
  return (
    <section id="about" className="py-28 px-[5%] bg-white">
      <div className="grid md:grid-cols-2 gap-20 max-w-[1200px] mx-auto">
        <div>
          <h2 className="text-[48px] font-light mb-6 text-[#1a1a1a]">
            Building <strong className="font-bold text-[#c9a961]">Architectural Masterpieces</strong>
          </h2>
          <p className="text-[18px] leading-[1.8] text-[#555] mb-4">We are India's leading luxury property development and construction company...</p>
          <p className="text-[18px] leading-[1.8] text-[#555] mb-4">With cutting-edge construction technology...</p>
          <p className="text-[18px] leading-[1.8] text-[#555]">Every project we undertake is a testament...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[{"num":"50+","label":"Luxury Projects"},{"num":"100%","label":"Client Satisfaction"},{"num":"20+","label":"Awards Won"}].map((s,i)=>(
            <div key={i} className="text-center bg-[#f8f8f8] p-8 rounded">
              <span className="text-[48px] font-bold text-[#c9a961] block mb-2">{s.num}</span>
              <span className="uppercase text-[14px] tracking-wide text-[#666]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
