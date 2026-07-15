import Hero from "@/components/hero";
import Project from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="px-8">
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}
