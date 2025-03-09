
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
// import Results from "./components/results";
import Footer from "./components/Footer";
import Journey from "./components/Journey";
import CTA from "./components/CTA";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <HowItWorks />
      <Benefits />
      <Journey />
      <CTA />
      {/* <Results /> */}
      <Footer />
    </main>
  );
}
