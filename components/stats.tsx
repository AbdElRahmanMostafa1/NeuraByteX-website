"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 50, suffix: "+", label: "Team Members" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary/10 to-blue-600/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <CountUpNumber end={stat.number} suffix={stat.suffix} isInView={isInView} delay={index * 0.2} />
                </motion.div>
                <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpNumber({
  end,
  suffix,
  isInView,
  delay,
}: { end: number; suffix: string; isInView: boolean; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      let start = 0
      const increment = end / 50
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 30)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [end, isInView, delay])

  return (
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
      {count}
      {suffix}
    </div>
  )
}
