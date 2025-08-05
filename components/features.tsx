"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Layers, Sparkles, Target, Infinity } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with cutting-edge technologies and efficient algorithms.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security protocols to protect your data and ensure privacy.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Intelligence",
      description: "Advanced AI integration for smarter, more intuitive user experiences.",
    },
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Meticulously crafted solutions with attention to every detail.",
    },
    {
      icon: Infinity,
      title: "Continuous Innovation",
      description: "Regular updates and improvements to stay ahead of the curve.",
    },
  ]

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Why Choose NeuraByteX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the difference with our innovative approach to technology and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-card backdrop-blur-sm rounded-2xl p-8 border border-border group-hover:border-primary/40 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Business?</h3>
            <p className="text-lg text-gray-300 mb-6">
              Let's discuss how NeuraByteX can help you achieve your technology goals and drive innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-cyan-500/25 transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
