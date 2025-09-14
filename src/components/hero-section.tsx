import { Button } from "@/components/ui/button"
import { HeroBackground } from "@/components/hero-background"
import { TypingText } from "@/components/typing-text"
import { ArrowDown, Play } from "lucide-react"

export function HeroSection() {
  const typingTexts = [
    "Next-Gen Tech Solutions",
    "AI-Powered Innovation", 
    "Cloud Architecture Excellence",
    "Full-Stack Development",
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
    <section id="hero" className="scroll-section relative flex items-center justify-center px-4 pt-24 md:pt-28 lg:pt-32">
      <HeroBackground />
      
      <div className="container mx-auto text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block text-foreground mb-2 animate-glow">Building</span>
            <span className="block neon-text animate-pulse-slow">
              <TypingText texts={typingTexts} speed={150} delay={2000} />
            </span>
            <span className="block text-foreground mt-2 animate-glow">for Tomorrow</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            We're a multi-domain tech team specializing in AI, Cloud, Web, Mobile, and DevOps. 
            Transforming ideas into scalable, cutting-edge solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="cyber" 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto font-semibold tracking-wide shadow-neon"
            >
              Start Your Project
            </Button>
            <Button 
              variant="cyber-outline" 
              size="lg"
              onClick={() => scrollToSection("work")}
              className="w-full sm:w-auto font-semibold tracking-wide shadow-cyan-glow"
            >
              <Play className="w-4 h-4 mr-2" />
              View Our Work
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
              <span className="sr-only">Scroll to learn more</span>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20 pointer-events-none" />
    </section>
  )
}