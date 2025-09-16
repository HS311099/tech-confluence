import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Send, Mail, Phone, MapPin, Calendar, MessageSquare, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: any;
  }
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  })

  const { toast } = useToast()

  const openCalendlyPopup = () => {
    const isDark = document.documentElement.classList.contains('dark');
    const url = `https://calendly.com/vandansheth374/project-strategy-session?background_color=${isDark ? '000000' : 'ffffff'}&text_color=${isDark ? 'ffffff' : '000000'}`;
    
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        window.Calendly.initPopupWidget({ url });
      };
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      .calendly-overlay {
        background: rgba(0, 0, 0, 0.8) !important;
      }
      .calendly-popup {
        background: hsl(var(--background)) !important;
        border: 1px solid hsl(var(--border)) !important;
        border-radius: 12px !important;
      }
      .calendly-popup-content {
        background: hsl(var(--background)) !important;
        border-radius: 12px !important;
      }
      .calendly-popup iframe {
        border-radius: 12px !important;
      }
    `;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const services = [
    "AI & Machine Learning",
    "Cloud Architecture", 
    "Web Development",
    "Mobile Development",
    "DevOps & Automation",
    "Full-Stack Solution",
    "Consultation Only"
  ]

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000", 
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Let's discuss"
  ]

  const timelines = [
    "ASAP (Rush project)",
    "1-2 months",
    "3-6 months", 
    "6+ months",
    "Ongoing partnership"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email us",
      value: "hello@coherentsolution.dev",
      action: "mailto:hello@coherentsolution.dev"
    },
    {
      icon: Phone,
      label: "Call us",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: "San Francisco, CA",
      action: "#"
    }
  ]

  return (
    <section id="contact" className="scroll-section py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="neon-text">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Partner with our expert team 
            to build scalable, innovative solutions that drive your business forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Start Your Project</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <Label className="mb-3 block">Service Needed *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData({ ...formData, service })}
                        className={`p-3 text-sm rounded-lg border transition-all ${
                          formData.service === service
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label className="mb-3 block">Budget Range</Label>
                    <div className="space-y-2">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget })}
                          className={`w-full p-2 text-sm text-left rounded-lg border transition-all ${
                            formData.budget === budget
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Timeline</Label>
                    <div className="space-y-2">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline })}
                          className={`w-full p-2 text-sm text-left rounded-lg border transition-all ${
                            formData.timeline === timeline
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {timeline}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    required
                    rows={5}
                    className="mt-1"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="cyber" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Project Details
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info & CTA */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="cyber-outline" className="w-full justify-between" onClick={openCalendlyPopup}>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>


            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-xl font-bold mb-4">What to Expect</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <Badge variant="secondary">Within 24 hours</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Free Consultation</span>
                  <Badge variant="secondary">30 minutes</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Project Proposal</span>
                  <Badge variant="secondary">Within 48 hours</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}