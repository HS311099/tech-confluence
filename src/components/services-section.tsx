import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Brain, Cloud, Code, Smartphone, Settings, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Intelligent Solutions",
      description: "Transform your business with cutting-edge AI solutions that learn, adapt, and deliver insights.",
      features: [
        "Custom ML Models & Training",
        "Natural Language Processing",
        "Computer Vision Systems", 
        "Predictive Analytics",
        "AI Chatbots & Assistants",
        "Neural Network Architecture"
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "scikit-learn"],
      gradient: "from-purple-500 to-pink-500",
      price: "Starting at $5,000"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      subtitle: "Scalable Infrastructure", 
      description: "Build robust, scalable cloud infrastructure that grows with your business needs.",
      features: [
        "AWS/Azure/GCP Migration",
        "Serverless Architecture",
        "Auto-scaling Solutions",
        "Cloud Security Implementation", 
        "Cost Optimization",
        "Disaster Recovery Planning"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      gradient: "from-cyan-500 to-blue-500",
      price: "Starting at $3,000"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Web Apps",
      description: "Create lightning-fast, responsive web applications with modern frameworks and best practices.",
      features: [
        "React/Next.js Applications",
        "Progressive Web Apps",
        "E-commerce Platforms",
        "API Development & Integration",
        "Performance Optimization",
        "SEO & Analytics Setup"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      gradient: "from-green-500 to-emerald-500",
      price: "Starting at $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      subtitle: "Cross-Platform Apps",
      description: "Build beautiful, native-feeling mobile apps that work seamlessly across all devices.",
      features: [
        "iOS & Android Development",
        "React Native/Flutter Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Payment Integration"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      gradient: "from-orange-500 to-red-500", 
      price: "Starting at $4,000"
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      subtitle: "Streamlined Operations",
      description: "Automate your deployment pipeline and infrastructure for maximum efficiency and reliability.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Automation",
        "Container Orchestration",
        "Performance Monitoring"
      ],
      technologies: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Prometheus"],
      gradient: "from-violet-500 to-purple-500",
      price: "Starting at $3,500"
    }
  ]

  return (
    <section id="services" className="scroll-section py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="neon-text">Tech Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI-powered solutions to cloud infrastructure, we deliver comprehensive 
            technology services that drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Tabs */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveService(index)}
                className={`w-full p-4 text-left rounded-xl transition-all duration-300 border ${
                  activeService === index 
                    ? 'glass border-primary shadow-glow' 
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card h-full"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${services[activeService].gradient} flex items-center justify-center`}>
                  {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{services[activeService].title}</h3>
                  <p className="text-muted-foreground">{services[activeService].subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3">What We Deliver:</h4>
                  <ul className="space-y-2">
                    {services[activeService].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {services[activeService].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-2xl font-bold neon-text mb-4">
                    {services[activeService].price}
                  </div>

                  <Button variant="cyber" className="w-full">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}