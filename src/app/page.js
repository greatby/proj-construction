import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Portfolio />
      <CTA />
      <Footer />
    </>
  );
}