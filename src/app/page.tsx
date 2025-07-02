import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
