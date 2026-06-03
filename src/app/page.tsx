import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <hr className="h-2 opacity-35 my-10 mx-4"/>
      <Services />
      <hr className="h-2 opacity-35 my-10 mx-4"/>
      <Contact />
      <Footer />
    </main>
  );
}
