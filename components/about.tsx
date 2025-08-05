"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Rocket, Shield, Users } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              About NeuraByteX
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to creating innovative solutions that push the
              boundaries of what's possible in the digital realm.
            </p>
          </motion.div>

          {/* Mission statement */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To revolutionize the technology landscape by developing cutting-edge products that seamlessly integrate
                artificial intelligence, advanced computing, and user-centric design. We strive to create solutions that
                not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
          </motion.div>

          {/* Core values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Innovation",
                  description: "Constantly pushing boundaries with creative solutions and breakthrough technologies.",
                },
                {
                  icon: Rocket,
                  title: "Excellence",
                  description: "Delivering superior quality products that exceed expectations and industry standards.",
                },
                {
                  icon: Shield,
                  title: "Security",
                  description: "Ensuring robust protection and privacy in every solution we develop.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Building strong partnerships and fostering teamwork to achieve shared success.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-cyan-400">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Chen",
                  role: "CEO & Founder",
                  image: "/asian-tech-ceo-headshot.png",
                  bio: "Visionary leader with 15+ years in tech innovation.",
                },
                {
                  name: "Sarah Johnson",
                  role: "CTO",
                  image: "/female-cto-headshot.png",
                  bio: "Expert in AI and machine learning architectures.",
                },
                {
                  name: "Marcus Rodriguez",
                  role: "Lead Developer",
                  image: "/placeholder-s1pzp.png",
                  bio: "Full-stack developer specializing in modern frameworks.",
                },
                {
                  name: "Emily Zhang",
                  role: "UI/UX Designer",
                  image: "/asian-female-ui-ux-designer-headshot.png",
                  bio: "Creative designer focused on user-centered experiences.",
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-card backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-primary to-blue-600">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">{member.name}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
