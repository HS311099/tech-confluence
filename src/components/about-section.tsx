import { motion } from "framer-motion"
import { Code, Cloud, Brain, Smartphone, Settings } from "lucide-react"

export function AboutSection() {
  const domains = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, NLP, Computer Vision, and AI-powered automation solutions.",
      color: "text-cyber-violet"
    },
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "AWS, Azure, GCP infrastructure design, serverless computing, and cloud migration strategies.",
      color: "text-cyber-cyan"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack applications, React/Next.js frontends, Node.js/Python backends, and modern APIs.",
      color: "text-cyber-purple"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS, Android, React Native, and Flutter applications with seamless user experiences.",
      color: "text-cyber-blue"
    },
    {
      icon: Settings,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, Infrastructure as Code, Docker, Kubernetes, and deployment automation.",
      color: "text-cyber-pink"
    }
  ]

  return (
    <section id="about" className="scroll-section py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Multi-Domain</span> Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our team combines expertise across five critical technology domains to deliver 
            comprehensive solutions that drive innovation and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center mr-4 group-hover:animate-float`}>
                  <domain.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${domain.color}`}>
                  {domain.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "5", label: "Tech Domains" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}