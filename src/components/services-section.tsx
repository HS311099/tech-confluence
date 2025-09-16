import React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  HiCpuChip, 
  HiCloudArrowUp, 
  HiCodeBracket, 
  HiDevicePhoneMobile, 
  HiCog6Tooth,
  HiSparkles 
} from "react-icons/hi2"
import { 
  SiTensorflow, 
  SiAmazonaws, 
  SiReact, 
  SiFlutter, 
  SiDocker 
} from "react-icons/si"

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: HiCpuChip,
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
      icon: HiCloudArrowUp,
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
      icon: HiCodeBracket,
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
      icon: HiDevicePhoneMobile,
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
      icon: HiCog6Tooth,
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Tech Services
            </span>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            From AI-powered solutions to cloud infrastructure, we deliver comprehensive 
            technology services that drive{" "}
            <span className="text-primary font-semibold">digital transformation</span>{" "}
            and accelerate business growth.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Service Tabs */}
          <div className="lg:col-span-1 space-y-2 sm:space-y-3">
            {services.map((service, index) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveService(index)}
                className={`w-full p-3 sm:p-4 lg:p-6 text-left rounded-xl sm:rounded-2xl transition-all duration-500 border backdrop-blur-xl group ${
                  activeService === index 
                    ? 'bg-gradient-to-r from-primary/10 to-primary/5 border-primary shadow-2xl shadow-primary/25' 
                    : 'bg-card/50 border-white/10 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                  {activeService === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  )}
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

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="cyber" className="w-full group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300">
                      <HiSparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}