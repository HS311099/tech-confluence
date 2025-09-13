import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, MapPin, Award, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "AI/ML Lead",
      specialization: "Deep Learning & Computer Vision",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      location: "San Francisco, CA",
      experience: "8+ years",
      projects: 25,
      bio: "Pioneering AI solutions with expertise in neural networks, computer vision, and NLP. Former researcher at Stanford AI Lab.",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Python", "MLOps"],
      achievements: [
        "Published 15+ research papers",
        "Led AI team at tech unicorn",
        "PhD in Machine Learning"
      ],
      social: {
        github: "#",
        linkedin: "#", 
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Cloud Architect",
      specialization: "AWS & Infrastructure Design",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      location: "Austin, TX",
      experience: "10+ years",
      projects: 35,
      bio: "Cloud infrastructure expert specializing in scalable, secure, and cost-effective solutions across major cloud platforms.",
      skills: ["AWS", "Kubernetes", "Terraform", "Docker", "DevOps", "Security"],
      achievements: [
        "AWS Certified Solutions Architect",
        "Managed $10M+ cloud budgets",
        "Built systems for 100M+ users"
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Elena Petrov",
      role: "Full-Stack Developer",
      specialization: "React & Node.js Expert",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      location: "New York, NY",
      experience: "7+ years",
      projects: 40,
      bio: "Full-stack wizard creating seamless user experiences with modern web technologies and performance-first approach.",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"],
      achievements: [
        "Built apps with 10M+ users",
        "Core contributor to open source",
        "Google Developer Expert"
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Mobile Lead",
      specialization: "Cross-Platform Development",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      location: "Seattle, WA", 
      experience: "6+ years",
      projects: 30,
      bio: "Mobile app specialist creating beautiful, performant applications for iOS and Android with React Native and Flutter.",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Optimization"],
      achievements: [
        "Apps with 5M+ downloads",
        "Apple Design Award finalist",
        "Flutter GDE"
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Alex Thompson",
      role: "DevOps Engineer",
      specialization: "CI/CD & Automation",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      location: "Denver, CO",
      experience: "9+ years",
      projects: 50,
      bio: "Automation expert streamlining development workflows and ensuring reliable, scalable deployments across cloud platforms.",
      skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Monitoring", "Security"],
      achievements: [
        "Reduced deployment time by 90%",
        "Certified Kubernetes Administrator", 
        "Built CI/CD for Fortune 500"
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Product Strategist",
      specialization: "Technical Product Management",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      location: "San Diego, CA",
      experience: "5+ years",
      projects: 20,
      bio: "Technical product leader bridging business needs with technical implementation, ensuring successful project delivery.",
      skills: ["Product Strategy", "User Research", "Agile", "Analytics", "Technical Writing", "Stakeholder Management"],
      achievements: [
        "Led products to $50M+ revenue",
        "Certified Scrum Master",
        "MBA from top-tier school"
      ],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <section id="team" className="scroll-section py-20 px-4 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our <span className="neon-text">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse group of passionate technologists, each bringing deep expertise 
            in their domain to deliver exceptional results for your projects.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Award, number: "45+", label: "Years Combined Experience" },
            { icon: Coffee, number: "200+", label: "Projects Delivered" },
            { number: "5", label: "Tech Domains Covered" },
            { number: "24/7", label: "Collaborative Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-card">
              {stat.icon && <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />}
              <div className="text-2xl md:text-3xl font-bold neon-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group hover:shadow-glow transition-all duration-300"
            >
              {/* Avatar & Basic Info */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 group-hover:border-primary transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{member.specialization}</p>
                
                <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {member.bio}
              </p>

              {/* Experience Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <div className="font-semibold text-primary">{member.experience}</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary">{member.projects}</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Core Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {member.skills.slice(0, 4).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {member.skills.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{member.skills.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-center">
                      <Award className="w-3 h-3 mr-2 text-yellow-500 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-glass-border">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Culture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center glass-card"
        >
          <h3 className="text-2xl font-bold mb-4">Our Collaborative Approach</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe in the power of diverse perspectives and collaborative innovation. 
            Our team works seamlessly across time zones, bringing together complementary 
            skills to tackle your most challenging technical problems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}