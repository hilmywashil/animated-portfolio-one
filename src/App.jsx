import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WhoAmI from "./components/WhoAmI";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhoAmI/>
      <Skills/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  )
}