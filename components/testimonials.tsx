"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "/female-ceo-headshot.png",
      content:
        "NeuraByteX transformed our digital presence completely. Their AI-powered solutions increased our efficiency by 300% and the team's expertise is unmatched.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "/asian-male-cto-headshot.png",
      content:
        "Working with NeuraByteX was a game-changer. They delivered a scalable cloud solution that handles millions of requests seamlessly. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Product Manager, DataFlow",
      company: "DataFlow",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The mobile app they developed exceeded all our expectations. User engagement increased by 250% and the interface is incredibly intuitive.",
      rating: 5,
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Founder, EcoTech Solutions",
      company: "EcoTech Solutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "NeuraByteX's IoT solutions helped us create a smart ecosystem that reduced energy consumption by 40%. Their innovation is remarkable.",
      rating: 5,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "VP of Engineering, CloudScale",
      company: "CloudScale",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Their expertise in machine learning and data analytics helped us unlock insights we never knew existed. Truly exceptional work.",
      rating: 5,
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Director, FinanceFlow",
      company: "FinanceFlow",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The security and performance of their solutions are top-notch. Our platform now handles 10x more transactions with zero downtime.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with NeuraByteX.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-card backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-primary to-blue-600 flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "500+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
