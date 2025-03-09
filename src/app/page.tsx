
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
// import Results from "./components/results";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      
      <Hero />
      <HowItWorks />
      <Benefits />
      {/* <Results /> */}
      <Footer />
    </main>
  );
}
