"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with holographic effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="holographic rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
              <div className="p-2">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/profile-placeholder.jpg"
                    alt="Sunil Kumar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl animate-pulse-slow pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Senior Software Engineer</h3>
            <p className="text-gray-300 mb-6">
              Mobile application developer with 5+ years of hands-on experience in Flutter and iOS app development. 
              Proficient in creating cross-platform applications with Flutter, and worked on iOS projects using Swift.
            </p>
            <p className="text-gray-300 mb-6">
              Strong problem-solving skills and a dedication to staying updated with the latest advancements in mobile development. 
              Committed to delivering high-quality, user-friendly applications that contribute to business growth.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">5+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">11+</h4>
                <p className="text-sm text-gray-400">Flutter Apps</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">6+</h4>
                <p className="text-sm text-gray-400">iOS Apps</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">3+</h4>
                <p className="text-sm text-gray-400">Companies</p>
              </div>
            </div>

            {/* Resume button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                href="/resume.pdf" 
                target="_blank"
                className="px-6 py-3 rounded-full bg-primary text-dark font-semibold hover:bg-opacity-80 transition-all duration-300 shadow-neon inline-flex items-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 