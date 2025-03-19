"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is ACM Zonal hackathon?",
      answer:
        "The ACM Zonal Hackathon is a competitive event organized by the Association for Computing Machinery (ACM), typically at a regional (zonal) level. It serves as a platform for students, developers, and tech enthusiasts to collaborate, innovate, and solve real-world problems using technology.",
    },
    {
      question: "Is there any registration fee? ",
      answer:
        "Yes varies for ACM team and non ACM team",
    },
    {
      question: "Will food and accommodation be provided?",
      answer:
        "Meals and refreshments are typically provided during the event. Accommodation details will be shared if applicable..",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Criteria often include innovation, technical complexity, feasibility, and presentation.",
    },
    {
      question: "Will I get a participation certificate?",
      answer:
        "Yes, you will get a participation certificate",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div ref={ref} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                className={`w-full text-left p-4 rounded-lg flex justify-between items-center ${
                  activeIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-700 hover:bg-blue-100"
                } transition-colors duration-200`}
                onClick={() => toggleQuestion(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border border-blue-100 rounded-b-lg text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 mb-4">
            Don't see your question answered here?
          </p>
          <motion.a
            className="bg-blue-600 text-white px-6 py-4 rounded-full hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#footer"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

