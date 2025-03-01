"use client";

import { motion } from "framer-motion";

// Experience data
const experiences = [
  {
    id: 1,
    company: "Spire Innovations, Inc",
    position: "Senior Software Engineer (Flutter)",
    duration: "October 2023 - March 2024",
    description: "Worked on Flutter applications and integrated with Spring Boot and Django Rest Framework backends. Utilized Microsoft Intune for enterprise app management.",
    skills: ["Flutter", "Dart", "Spring Boot", "Python", "Django Rest Framework", "Microsoft Intune"],
  },
  {
    id: 2,
    company: "Techahead",
    position: "Senior Software Engineer",
    duration: "October 2023 - March 2024",
    description: "Developed cross-platform apps from scratch. Conducted thorough team code reviews. Worked on code refactoring and securing sensitive data in apps. Upgraded Flutter dependencies and improved project architecture.",
    skills: ["Dart", "Flutter", "Postman", "Flutter Web", "Code Refactoring"],
  },
  {
    id: 3,
    company: "Ficode Software Solutions Private Limited",
    position: "Software Engineer (Flutter & iOS)",
    duration: "March 2019 - September 2023",
    description: "Developed 8 high-performing mobile apps using Flutter and 3 native iPhone/iPad apps using Swift. Upgraded legacy projects to the latest Flutter versions. Recognized as 'Employee of the Month' for outstanding contributions.",
    skills: ["Flutter", "iOS", "Swift", "LLD", "HLD", "Project Documentation"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse md:pr-8"
                    : "md:pl-8"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary shadow-neon z-10"></div>

                {/* Content */}
                <div
                  className={`glass p-6 rounded-xl w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="mb-1 text-primary font-semibold">{exp.duration}</div>
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800 text-primary border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Year marker with glow effect */}
              <motion.div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "left-8 md:left-auto md:right-full md:mr-8" : "left-8 md:left-full md:ml-8"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-4 py-2 rounded-full bg-dark-blue text-primary border border-primary shadow-neon text-sm font-mono">
                  {exp.duration.split(" - ")[0].split(" ")[0]}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 