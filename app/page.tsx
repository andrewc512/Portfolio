import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <Hero/>
        <About />
      </div>
    </main>
  );
}
