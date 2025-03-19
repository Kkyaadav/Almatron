"use client";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

 export const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
            About CYPHERQUEST
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6 text-justify">
          We, at DSATM, are pleased to present a comprehensive
proposal for a National Level Tech Fest on our campus.
This event will feature a 24-hour hackathon,
complemented by engaging tech conferences, networking
activities, and more.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-10 text-justify">
          Our vision is to bring together 70 teams from leading Indian
engineering colleges, fostering an environment of innovation
and collaboration. With a total of 48 hours on-site, including
an intensive 24 hour hackathon competition, we aim to
provide participants with a platform to showcase their skills
and creativity. This proposal outlines the event's dates, goals,
format, logistics, and expected outcomes
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-default">
            {[
              {
                title: "Innovation",
                icon: "💡",
                description: "Explore groundbreaking ideas and technologies that are shaping our future.",
              },
              {
                title: "Collaboration",
                icon: "🤝",
                description: "Connect with industry leaders and like-minded individuals to foster new partnerships.",
              },
              {
                title: "Learning",
                icon: "🧠",
                description: "Expand your knowledge through expert-led sessions and hands-on workshops.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className=" p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-55 hover:bg-blue-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



