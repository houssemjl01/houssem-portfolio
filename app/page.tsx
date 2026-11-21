import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
