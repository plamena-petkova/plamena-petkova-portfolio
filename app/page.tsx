import UsePresenceData from "./animations/MotionCarousel";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Hero />
      <Skills />
      <ProjectList />
      <Certificates/>
      <Timeline />
      <Footer />
    </div>
  );
}
