// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: any;
  }
}
  // Calendly popup handler
  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/vandansheth374/project-strategy-session" });
    } else {
      // Load Calendly script if not present
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        window.Calendly.initPopupWidget({ url: "https://calendly.com/vandansheth374/project-strategy-session" });
      };
      document.body.appendChild(script);
    }
  };
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Link, useLocation } from "react-router-dom"
import logo from "@/assets/logo.png"
import blacklogo from "@/assets/blacklogo.png"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = 80 // Account for sticky header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Contact", to: "/contact" }
  ];
  const location = useLocation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "glass shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-2 md:gap-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src={isDark ? blacklogo : logo}
            alt="TechFlow Logo"
            className="w-8 h-8 rounded-lg"
          />
          <span className="text-xl md:text-2xl font-bold neon-text tracking-wide">TechFlow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-semibold px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-foreground hover:text-primary ${location.pathname === item.to ? 'underline text-primary' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button 
              variant="cyber-outline" 
              size="sm"
              className="font-semibold tracking-wide shadow-cyan-glow"
            >
              Get Started
            </Button>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-glass-border animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 text-base font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors text-foreground hover:text-primary ${location.pathname === item.to ? 'underline text-primary' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4 inline-block">
              <Button 
                variant="cyber-outline" 
                size="sm"
                className="w-full font-semibold tracking-wide shadow-cyan-glow"
              >
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}