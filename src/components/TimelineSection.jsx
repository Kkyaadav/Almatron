"use client"

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const events = [
    {
      date: "March 22, 2025",
      title: "Registration Opens",
      description: "Grab your spot in the Hackathon by registering......",
    },
    {
      date: "March 26, 2025",
      title: "6 Hrs Qualifier Hackathon",
      description: "The Hackathon will commence at 11:00 AM and end at 5:00 PM.",
    },
    {
      date: "March 27, 2025",
      title: "Result of Qualifier Hackathon",
      description: "Results of the Qualifier Hackathon will be announced, Top teams will get Qualified.",
    },
    {
      date: "April 25, 2025",
      title: "ACM Hackathon",
      description: "ACM Hackathon will commence.",
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Event Timeline
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Vertical Zigzag Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full z-0"
            initial={{ height: 0 }}
            animate={{ height: isInView ? "100%" : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`relative z-10 flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="flex-1 md:w-1/2 p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-xl border border-blue-300 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{event.title}</h3>
                  <p className="text-blue-500 font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-4 border-white my-4 md:my-0 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="text-white font-bold">{index + 1}</span>
              </motion.div>

              <div className="flex-1 md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
