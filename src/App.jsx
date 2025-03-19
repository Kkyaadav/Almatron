"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {Navbar} from "./components/Navbar"
import {HeroSection} from "./components/HeroSection"
import {About} from "./components/About"
import {TimelineSection} from "./components/TimelineSection"
import {SponsorSection} from "./components/SponsorSection"
import { FaqSection } from "./components/FaqSection"
import {GallerySection} from "./components/GallerySection"
import {Footer} from "./components/Footer"
import {BackgroundEffect} from "./components/BackgroundEffect"
import "./App.css"
import { RulesRegulations } from "./components/RulesRegulations"

function App() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0.6])

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const targetId = this.getAttribute("href")
        if (targetId) {
          document.querySelector(targetId)?.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-white">
      <BackgroundEffect />
      <Navbar />
      <motion.div style={{ opacity }}>
        <HeroSection />
        <About />
        <TimelineSection />
        <SponsorSection />
   
        <GallerySection />
        <RulesRegulations/>
        <FaqSection />
      </motion.div>
      <Footer />
    </div>
  )
}

export default App

