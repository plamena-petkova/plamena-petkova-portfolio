'use client'
import { supabase } from "@/lib/supabase";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import { FaArrowUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";


export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0,
    initialInView: true,
    fallbackInView: true,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };


  return (
    <div className="bg-base-100">
      <div ref={ref}>
        <Navbar isHome />
      </div>
      {!inView && (
        <button
          onClick={scrollToTop}
          className="btn btn-circle btn-primary fixed bottom-6 right-6 z-50 shadow-lg"
        >
          <FaArrowUp />
        </button>
      )}
      <Hero />
      <Skills />
      <ProjectList />
      <Certificates />
      <Timeline />
      <Footer />
    </div>

  );
}
