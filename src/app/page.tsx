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
      <hr className="mx-4 my-10 h-2 opacity-35" />
      <Services />
      <hr className="mx-4 my-10 h-2 opacity-35" />
      <Contact />
      <Footer />
    </main>
  );
}
