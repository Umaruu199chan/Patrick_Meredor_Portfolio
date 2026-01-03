import Navbar from "./(pages)/navbar/page";
import Hero from "./(pages)/hero/page";
import About from "./(pages)/about/page";
import Projects from "./(pages)/projects/page";
import Footer from "./(pages)/footer/page";

export default function Home() {
  return (
    <div className="App flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
