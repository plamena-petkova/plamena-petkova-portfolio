import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectList from "./components/ProjectList";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Hero />
      <ProjectList />
      <Timeline />
    </div>
  );
}
