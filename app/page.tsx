import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoSection/>
      <ServicesSection/>
      <StatsSection/>
      <Footer/>
    
    </>
  );
}
