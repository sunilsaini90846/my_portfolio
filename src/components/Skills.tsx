"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Skill categories and items
const skillCategories = [
  {
    name: "Mobile Development",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 95 },
      { name: "Swift", level: 85 },
      { name: "iOS Development", level: 85 },
      { name: "Android Development", level: 80 },
    ],
  },
  {
    name: "State Management",
    skills: [
      { name: "GetX", level: 90 },
      { name: "Flutter Bloc", level: 85 },
      { name: "Provider", level: 90 },
      { name: "MVC", level: 85 },
      { name: "MVVM", level: 80 },
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "RESTful APIs", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Python", level: 75 },
      { name: "Django Rest Framework", level: 70 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Xcode", level: 85 },
      { name: "Android Studio", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 85 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-primary text-dark shadow-neon"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills display */}
        <motion.div
          className="glass p-8 rounded-2xl max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories
            .filter((category) => category.name === activeCategory)
            .map((category) => (
              <div key={category.name} className="space-y-6">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
        </motion.div>

        {/* AI Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass p-6 rounded-xl border border-primary/30">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-primary">AI Skill Recommendation</h3>
            </div>
            <p className="text-gray-300">
              Based on your current skill set, consider exploring <span className="text-secondary font-semibold">React Native</span> or <span className="text-secondary font-semibold">SwiftUI</span> to complement your mobile development expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 