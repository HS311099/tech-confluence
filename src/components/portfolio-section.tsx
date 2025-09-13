import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, ArrowLeft, ArrowRight, Star, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "AI-Powered Healthcare Platform",
      category: "AI & Healthcare",
      description: "Revolutionary healthcare platform using machine learning for early disease detection and personalized treatment recommendations.",
      longDescription: "Developed a comprehensive healthcare platform that leverages advanced machine learning algorithms for early disease detection. The system analyzes patient data, medical imaging, and genetic information to provide personalized treatment recommendations. Integrated with existing hospital systems and achieved 94% accuracy in diagnostic predictions.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      technologies: ["TensorFlow", "Python", "React", "PostgreSQL", "AWS"],
      stats: {
        duration: "8 months",
        team: "5 specialists",
        impact: "40% faster diagnosis"
      },
      achievements: [
        "94% diagnostic accuracy",
        "40% reduction in diagnosis time",
        "500+ healthcare providers onboarded",
        "FDA compliance achieved"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Global E-Commerce Platform",
      category: "Web Development",
      description: "Scalable multi-vendor e-commerce platform handling millions of transactions with real-time inventory management.",
      longDescription: "Built a robust e-commerce platform supporting multiple vendors, real-time inventory tracking, and advanced analytics. The platform handles over 10M monthly transactions with 99.9% uptime. Features include AI-powered product recommendations, automated fraud detection, and comprehensive seller tools.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Node.js", "MongoDB", "Redis", "Stripe"],
      stats: {
        duration: "6 months", 
        team: "8 developers",
        impact: "10M+ transactions/month"
      },
      achievements: [
        "99.9% uptime achieved",
        "10M+ monthly transactions",
        "2000+ active vendors",
        "50% increase in conversion"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Smart City IoT Network",
      category: "Cloud & IoT",
      description: "City-wide IoT infrastructure managing traffic, energy, and environmental monitoring with real-time analytics.",
      longDescription: "Designed and implemented a comprehensive smart city solution connecting thousands of IoT sensors across urban infrastructure. The system monitors traffic patterns, energy consumption, air quality, and waste management. Real-time data processing enables automated responses and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      technologies: ["AWS IoT", "Lambda", "DynamoDB", "React", "D3.js"],
      stats: {
        duration: "12 months",
        team: "12 engineers", 
        impact: "25% energy savings"
      },
      achievements: [
        "5000+ IoT sensors deployed",
        "25% reduction in energy costs",
        "Real-time city monitoring",
        "Predictive maintenance system"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Cross-Platform Fitness App",
      category: "Mobile Development",
      description: "Comprehensive fitness application with AI coaching, social features, and wearable device integration.",
      longDescription: "Developed a feature-rich fitness application available on iOS and Android. The app includes AI-powered personal training, social challenges, nutrition tracking, and seamless integration with popular wearable devices. Advanced analytics provide personalized insights and recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "TensorFlow Lite", "Node.js"],
      stats: {
        duration: "4 months",
        team: "6 developers",
        impact: "500K+ downloads"
      },
      achievements: [
        "500K+ app downloads",
        "4.8/5 star rating",
        "150+ workout programs",
        "AI coaching system"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[activeProject]

  return (
    <section id="work" className="scroll-section py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="neon-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of cutting-edge solutions that have transformed 
            businesses and created lasting impact across multiple industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Showcase */}
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-white">
                    {currentProject.category}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-glass-border">
                  <div className="text-center">
                    <Calendar className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{currentProject.stats.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{currentProject.stats.team}</div>
                    <div className="text-xs text-muted-foreground">Team Size</div>
                  </div>
                  <div className="text-center">
                    <Star className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <div className="text-sm font-medium">{currentProject.stats.impact}</div>
                    <div className="text-xs text-muted-foreground">Impact</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button variant="cyber" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="cyber-outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project List & Navigation */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">All Projects</h3>
              <div className="flex space-x-2">
                <Button
                  variant="cyber-outline"
                  size="icon"
                  onClick={prevProject}
                  className="w-10 h-10"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="cyber-outline"
                  size="icon"
                  onClick={nextProject}
                  className="w-10 h-10"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveProject(index)}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeProject === index
                      ? 'glass border-primary shadow-glow'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex space-x-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{project.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {project.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="glass-card">
              <h4 className="font-semibold mb-4">Key Achievements</h4>
              <ul className="space-y-2">
                {currentProject.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}