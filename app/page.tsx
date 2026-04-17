"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PhotoCharacter } from "@/components/PhotoCharacter";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      {/* Stunning Animated Background */}
      <AnimatedBackground />
      
      <main className="relative min-h-screen">
        <ScrollProgress />
        <Navigation />
        
        {/* Your Photo Character with Manga Speech Bubbles */}
        <PhotoCharacter />
        
        <Hero />
        <Projects />
        <Services />
        <TechStack />
        <About />
        <Contact />
      </main>
    </>
  );
}
