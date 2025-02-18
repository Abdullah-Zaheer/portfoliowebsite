"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Resturant Website",
    description: "A responsive restaurant website using React, Bootstrap, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/Abdullah-Zaheer/MernStack_Restaurant-main",
  },
  {
    title: "Hospital Management System",
    description: "A hospital management system using JavaScript, PHP, and MySQL.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/Abdullah-Zaheer/Database-project-finals-",
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website using Next.js, Tailwind CSS, and Vercel.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://github.com/Abdullah-Zaheer/portfoliowebsite",
  },
]

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 md:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <motion.div
                className="absolute inset-0 bg-primary/60 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-lg hover:underline"
                >
                  View Project
                </a>
              </motion.div>
            </div>
            <motion.div
              className="p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: hoveredIndex === index ? 0 : 20, opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

