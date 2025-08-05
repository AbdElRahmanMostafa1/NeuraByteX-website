import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Stats from "@/components/stats"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "NeuraByteX Inc. - Advanced Technology Solutions",
  description:
    "NeuraByteX Inc. is a leading technology company specializing in cutting-edge tech products, AI solutions, and innovative digital experiences.",
  keywords: "technology, AI, software development, tech products, innovation, NeuraByteX",
  authors: [{ name: "NeuraByteX Inc." }],
  creator: "NeuraByteX Inc.",
  publisher: "NeuraByteX Inc.",
  openGraph: {
    title: "NeuraByteX Inc. - Advanced Technology Solutions",
    description: "Leading technology company specializing in cutting-edge tech products and AI solutions.",
    url: "https://neurabytex.com",
    siteName: "NeuraByteX Inc.",
    images: [
      {
        url: "/images/neurabytex-logo.png",
        width: 1200,
        height: 630,
        alt: "NeuraByteX Inc. Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuraByteX Inc. - Advanced Technology Solutions",
    description: "Leading technology company specializing in cutting-edge tech products and AI solutions.",
    images: ["/images/neurabytex-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Features />
        <Testimonials />
        <Stats />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
