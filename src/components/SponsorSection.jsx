"use client";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export const SponsorSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const sponsorTiers = [
    {
      sponsors: [
        { name: "Reliance", logo: "/reli.jpg?" },
        { name: "kg", logo: "/kg.jpg" },
        {name:"tt",logo:"/tt.jpg"},
        {name:"medimix",logo:"/dx.jpg"},
        {name:"imp",logo:"/imp.jpg"},
      ],
    },
   
    
  ]

  return (
    <section id="sponsor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Our Past Sponsors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ALMATRON 2025 is made possible by the generous support of our sponsors who share our vision for innovation
            and technological advancement.
          </p>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: tierIndex * 0.2 }}
              className="text-center"
            >
              {/* <h3 className="inline-block text-xl font-semibold text-blue-600 mb-8 border-b-2 border-blue-300 pb-2">
                {tier.tier} Sponsors
              </h3> */}

              <div className="flex flex-wrap justify-center items-center gap-8 ">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: tierIndex * 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-lg  hover:shadow-md transition-shadow border-1 border-gray-200 "
                  >
                    <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-auto max-h-40 aspect-video object-contain " />
                    {/* <p className="mt-2 text-gray-600 font-medium">{sponsor.name}</p> */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}



