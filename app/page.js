import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhySection from "./components/WhySection";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex-1 bg-white">
      <Navbar />
      <Hero />
      <Features />
      <WhySection />
      <HowItWorks />
      <Integrations />
      <CtaBanner />
      <Footer />
    </div>
  );
}
