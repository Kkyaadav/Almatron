"use client"
import "../App.css"
import { motion } from "framer-motion"

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
        <img src="almatronlogo.png" alt="kk" className=" size-28 m-auto"/>
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-blue-700 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className=" text-3xl">ALMATRON <span className=" font-extralight text-gray-500 text-2xl">Presents..</span></p>
            <span class="ama">
           CYPHERQUEST2025
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-600 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Think | Create | Innovate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              className="bg-blue-600 text-white text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now!
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <a href="#about" className="text-blue-600 flex flex-col items-center">
            <span className="mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}




