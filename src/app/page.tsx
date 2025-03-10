
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
import Journey from "./components/Journey";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage";




export default function Home() {
  return (
    <main className="relative">
       <div className="absolute top-[80px] right-40 z-[900] hidden md:block">
          <HeroImage  />
        </div>
      <Hero />
      <HowItWorks />
      <Benefits />
      <Journey />
      <CTA />
      <Footer />
    </main>
  );
}
