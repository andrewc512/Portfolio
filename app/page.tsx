import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Hero/>
        <About />
        <Projects />
        <Contact/>
      </div>
    </main>
  );
}
