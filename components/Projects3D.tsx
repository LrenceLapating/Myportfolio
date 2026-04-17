"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "AI Platform",
    description: "Next-gen AI-powered analytics dashboard with real-time insights",
    color: "#2563EB",
    tags: ["Next.js", "Three.js", "AI", "WebGL"],
    github: "#",
    live: "#",
  },
  {
    title: "3D Configurator",
    description: "Interactive product customization with photorealistic rendering",
    color: "#7C3AED",
    tags: ["React", "Three.js", "R3F", "Blender"],
    github: "#",
    live: "#",
  },
  {
    title: "Metaverse Hub",
    description: "Immersive virtual space for events and collaboration",
    color: "#EC4899",
    tags: ["WebXR", "Three.js", "Socket.io", "Node"],
    github: "#",
    live: "#",
  },
  {
    title: "Creative Studio",
    description: "Award-winning portfolio site with stunning 3D animations",
    color: "#F59E0B",
    tags: ["Next.js", "GSAP", "WebGL", "Shaders"],
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [ProjectCard3D, setProjectCard3D] = useState<any>(null);

  useEffect(() => {
    // Only import 3D on client
    import("./ProjectCard3D").then((mod) => {
      setProjectCard3D(() => mod.ProjectCard3D);
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {ProjectCard3D ? (
          <ProjectCard3D color={project.color} />
        ) : (
          <div 
            className="w-full h-full" 
            style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}20)` }}
          />
        )}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.a
              href={project.github}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
            <motion.a
              href={project.live}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-purple-600 rounded-lg text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Projects3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Portfolio
          </motion.span>

          <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Immersive experiences that push the boundaries of web technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="h-[500px]">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects3D;
