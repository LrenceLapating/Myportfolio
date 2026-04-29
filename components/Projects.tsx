"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    title: "EUNOIA - Psychological Well-Being Assessment System",
    description: "Built AI-assisted web-based well-being assessment platform. Automated scoring and interpretation of psychological survey results. Designed dashboard for real-time insights and monitoring. Improved efficiency of mental health screening in schools.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["AI", "Web Development", "Dashboard", "Mental Health"],
    github: "#",
    live: "https://eunoia.uic.edu.ph/",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "NURSESCRIPT",
    description: "Nurse typing test with integrated hearing test to evaluate and improve nursing documentation skills",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["React", "TypeScript", "Healthcare", "Testing"],
    github: "#",
    live: "https://nursescript.uic.edu.ph/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "BEING SUITES",
    description: "A landing page for Being Suites showcasing all available amenities and inquiry information for potential guests",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tags: ["Next.js", "Tailwind", "Landing Page", "Hospitality"],
    github: "#",
    live: "https://being-suites.vercel.app/",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    title: "ASA KA GO",
    description: "Jeepney routes navigation system helping commuters find the best routes and transportation options in the city",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    tags: ["Next.js", "Maps API", "Navigation", "Transportation"],
    github: "#",
    live: "https://asa-ka-go.vercel.app/",
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[400px] sm:h-[450px] md:h-[500px]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl`} />
      
      <div className="relative h-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 bg-black/40 backdrop-blur-sm">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-3">
            <motion.a
              href={project.github}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white cursor-pointer text-xs sm:text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              Code
            </motion.a>
            <motion.a
              href={project.live}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-accent to-purple-600 rounded-lg text-white cursor-pointer text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              Live Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Portfolio
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 px-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-300">
              My Projects
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Real-world applications solving real problems with modern technology
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
