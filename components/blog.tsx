"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Web Development",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we build and interact with web applications.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Alex Chen",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "AI & Technology",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Architecture",
      excerpt: "Learn the best practices for designing cloud infrastructure that grows with your business needs.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Sarah Johnson",
      date: "2024-01-12",
      readTime: "8 min read",
      category: "Cloud Computing",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile App Security Best Practices",
      excerpt: "Essential security measures every mobile app developer should implement to protect user data.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Mobile Development",
      featured: false,
    },
    {
      id: 4,
      title: "UX Design Trends for 2024",
      excerpt: "Discover the latest user experience design trends that will shape digital products this year.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Emily Zhang",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "Design",
      featured: false,
    },
    {
      id: 5,
      title: "Machine Learning in Production",
      excerpt: "A comprehensive guide to deploying and maintaining ML models in production environments.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Alex Chen",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Machine Learning",
      featured: false,
    },
    {
      id: 6,
      title: "The Rise of Edge Computing",
      excerpt: "Understanding how edge computing is transforming data processing and reducing latency.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Sarah Johnson",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Technology",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section id="blog" ref={ref} className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in technology and development.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="bg-card backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="bg-muted px-3 py-1 rounded-full">{featuredPost.category}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-foreground">{featuredPost.author}</span>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.slice(0, 6).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-card backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Posts Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full bg-transparent"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
