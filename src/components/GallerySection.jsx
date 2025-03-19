"use client";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const GallerySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const images = [
    { src: "Gallery1.jpg", alt: "Conference keynote" },
    { src: "Gallery2.jpg", alt: "Workshop session" },
    { src: "Gallery3.JPG", alt: "Networking event" },
    { src: "ga.jpg", alt: "Exhibition hall" },
    { src: "Gallery5.jpeg", alt: "Panel discussion" },
    { src: "Gallery6.jpeg", alt: "Award ceremony" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Gallery
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="overflow-hidden rounded-xl shadow-md border border-gray-400"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-fit transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4">Explore moments from our previous events</p>
         
        </motion.div>
      </div>
    </section>
  )
}



