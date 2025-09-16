import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"
import { TypingText } from "@/components/typing-text"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { HiSparkles, HiRocketLaunch, HiEye } from "react-icons/hi2"
import { FaPlay } from "react-icons/fa6"

export function HeroSection() {
  const typingTexts = [
    "AI-Powered Solutions",
    "Cloud-Native Architecture", 
    "Full-Stack Excellence",
    "Mobile-First Development",
    "DevOps Automation"
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="hero" className="scroll-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
      <HeroBackground />
      
      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto space-y-8 lg:space-y-12"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span 
              className="block text-foreground mb-2 lg:mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Building
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse-slow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TypingText texts={typingTexts} speed={150} delay={2000} />
            </motion.span>
            <motion.span 
              className="block text-foreground mt-2 lg:mt-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              for Tomorrow
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Elite tech consultancy delivering{" "}
            <span className="text-primary font-semibold">AI, Cloud, Web, Mobile & DevOps</span>{" "}
            solutions. We transform ambitious ideas into production-ready, scalable systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center pt-6 sm:pt-8 lg:pt-12 px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="cyber" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto font-semibold tracking-wide shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <HiRocketLaunch className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Project
                <HiSparkles className="w-4 h-4 ml-2 group-hover:scale-125 transition-transform duration-300" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button 
                variant="cyber-outline" 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="w-full sm:w-auto font-semibold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <FaPlay className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                View Our Work
                <HiEye className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="pt-16 lg:pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button 
              onClick={() => scrollToSection("about")}
              className="group text-muted-foreground hover:text-primary transition-all duration-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-primary/5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown className="w-6 h-6 mx-auto group-hover:translate-y-1 transition-transform duration-300" />
              <span className="sr-only">Scroll to learn more</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />
    </section>
  )
}