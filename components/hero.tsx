"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden py-16 md:py-0">
      <div className="text-center md:text-left md:w-1/2 z-10 px-8 md:px-12 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -80, x: -10 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Abdullah Zaheer
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-8"
        >
          Software Engineer & Problem Solver
        </motion.h2>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Get in Touch
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-12 md:mt-0 md:w-1/2 flex justify-center items-center z-10"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
          <Image
            src="/myPic.jpeg?height=320&width=320"
            alt="Abdullah-Zaheer"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x / 20,
          y: mousePosition.y / 20,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 50 }}
      />
    </section>
  )
}

export default Hero

