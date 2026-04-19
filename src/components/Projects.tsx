"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import portfolioData from "@/data/portfolio.json";

const projects = portfolioData.projects.map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  description: p.description,
  category: p.category,
  technologies: p.tech_stack,
  platform: p.platform,
  period: p.period,
  status: p.status,
  company: p.company,
  link: p.live_url,
  highlights: p.highlights,
}));

const categories = portfolioData.project_categories;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const constraintsRef = useRef(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-dark shadow-neon"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={constraintsRef}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              whileHover={{ 
                z: 10,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="glass rounded-xl overflow-hidden h-full"
                style={{ 
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                animate={{ 
                  rotateX: hoveredProject === project.id ? 5 : 0,
                  rotateY: hoveredProject === project.id ? 5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Project header */}
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary/70 mb-1">{project.company}</span>
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-[10px] rounded-full font-medium ${
                      project.status === "In Production" || project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-gray-700/50 text-gray-400 border border-gray-600/30"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>{project.period}</span>
                    <span>·</span>
                    <span>{project.platform.join(", ")}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2.5 py-1 text-[11px] rounded-full bg-gray-800 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View project button */}
                  {project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 transition-colors duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                    </motion.a>
                  )}
                </div>

                {/* Glow effect on hover */}
                {hoveredProject === project.id && (
                  <motion.div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ 
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.1)",
                      zIndex: -1
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 