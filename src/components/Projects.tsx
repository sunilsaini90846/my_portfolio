"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

// Project data
const projects = [
  {
    id: 1,
    title: "Bubll",
    description: "IoT-based mobile application for smart home control and automation.",
    image: "/project-placeholder-1.jpg",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "IoT"],
    link: "#",
  },
  {
    id: 2,
    title: "IBOS",
    description: "Integrated business operations system with real-time analytics and reporting.",
    image: "/project-placeholder-2.jpg",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "RESTful API", "Charts"],
    link: "#",
  },
  {
    id: 3,
    title: "Workman",
    description: "Task management and workforce optimization platform for field service teams.",
    image: "/project-placeholder-3.jpg",
    category: "Mobile App",
    technologies: ["Swift", "iOS", "Firebase", "Maps API"],
    link: "#",
  },
  {
    id: 4,
    title: "E-Commerce App",
    description: "Full-featured e-commerce mobile application with payment integration.",
    image: "/project-placeholder-4.jpg",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Stripe", "Firebase"],
    link: "#",
  },
  {
    id: 5,
    title: "Health Tracker",
    description: "Health and fitness tracking application with personalized insights.",
    image: "/project-placeholder-5.jpg",
    category: "Mobile App",
    technologies: ["Swift", "iOS", "HealthKit", "CoreML"],
    link: "#",
  },
  {
    id: 6,
    title: "Social Media App",
    description: "Social networking platform with real-time messaging and content sharing.",
    image: "/project-placeholder-6.jpg",
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "WebRTC"],
    link: "#",
  },
];

// Filter categories
const categories = ["All", "Mobile App", "Web App", "UI/UX"];

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
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue to-transparent opacity-60 z-10"></div>
                  <div className="relative h-full w-full bg-gray-800">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* View project button */}
                  <motion.a
                    href={project.link}
                    className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary/30 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
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