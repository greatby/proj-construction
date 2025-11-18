export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('/images/download.svg')",
      }}
    >
      <div className="max-w-[1000px] px-5 animate-fadeUp">
        <h1 className="text-[52px] md:text-[72px] font-light leading-[1.2]">
          Redefining Luxury Living
          <strong className="block font-bold mt-2">Across India</strong>
        </h1>
        <p className="text-[20px] md:text-[22px] my-6 font-light">
          Premier Property Development & Construction Excellence Since Inception
        </p>
        <a
          href="#contact"
          className="bg-[#c9a961] px-10 py-4 rounded text-white font-semibold uppercase tracking-wide hover:bg-[#b39654] transition"
        >
          Begin Your Journey
        </a>
      </div>
    </section>
  );
}
