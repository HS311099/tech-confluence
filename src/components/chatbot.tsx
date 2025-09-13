import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-greet after 15 seconds
  useEffect(() => {
    if (!hasGreeted) {
      const timer = setTimeout(() => {
        if (!isOpen) {
          addBotMessage("👋 Hi! I'm Jarvis, your AI assistant. I can help you understand our tech services and get started with your project. How can I assist you today?")
          setHasGreeted(true)
        }
      }, 15000)
      return () => clearTimeout(timer)
    }
  }, [hasGreeted, isOpen])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addBotMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "bot",
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user", 
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    // Project-related queries
    if (input.includes("project") || input.includes("build") || input.includes("develop")) {
      return "I'd love to help with your project! To provide the best recommendations, could you tell me more about: 1) What type of solution you need (web app, mobile app, AI solution, etc.), 2) Your timeline, and 3) Your technical requirements? This helps me match you with the right team members."
    }
    
    // Pricing queries
    if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
      return "Our pricing depends on project scope and complexity. We offer flexible engagement models: fixed-price projects, hourly consulting, and retainer agreements. Would you like to schedule a free consultation to discuss your specific needs and get a detailed quote?"
    }
    
    // Technology queries
    if (input.includes("ai") || input.includes("machine learning")) {
      return "Great choice! Our AI team specializes in machine learning, deep learning, NLP, and computer vision. We work with TensorFlow, PyTorch, and cloud AI services. What kind of AI solution are you looking to build?"
    }
    
    if (input.includes("cloud") || input.includes("aws") || input.includes("azure")) {
      return "Our cloud architects are experts in AWS, Azure, and GCP. We handle everything from migration strategies to serverless architectures. Are you looking to migrate existing infrastructure or build something new?"
    }
    
    if (input.includes("web") || input.includes("website") || input.includes("react")) {
      return "Perfect! Our web development team builds modern applications with React, Next.js, Node.js, and Python. We specialize in scalable, responsive designs. What type of web application do you have in mind?"
    }
    
    if (input.includes("mobile") || input.includes("app") || input.includes("ios") || input.includes("android")) {
      return "Our mobile team creates amazing iOS, Android, React Native, and Flutter apps. We focus on user experience and performance. What platform are you targeting and what's the main purpose of your app?"
    }
    
    if (input.includes("devops") || input.includes("deployment") || input.includes("ci/cd")) {
      return "Our DevOps experts can streamline your development and deployment processes. We set up CI/CD pipelines, containerization with Docker/Kubernetes, and infrastructure automation. What's your current deployment challenge?"
    }
    
    // Contact/scheduling
    if (input.includes("contact") || input.includes("meeting") || input.includes("call") || input.includes("schedule")) {
      return "I can help you get in touch with our team! You can either: 1) Fill out our contact form for a detailed project discussion, 2) Schedule a free 30-minute consultation call, or 3) Email us directly. Which option works best for you?"
    }
    
    // Greeting responses
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! Welcome to TechFlow. I'm here to help you explore our tech services and get your project started. What brings you here today?"
    }
    
    // Default response
    return "That's an interesting question! I'd love to learn more about your specific needs. Our team covers AI, Cloud, Web, Mobile, and DevOps - which area interests you most? Or would you prefer to speak directly with one of our specialists?"
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addUserMessage(inputValue)
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateBotResponse(inputValue)
      addBotMessage(response)
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              variant="cyber"
              size="icon"
              className="w-14 h-14 rounded-full shadow-neon"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
            {!hasGreeted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-12 right-0 glass rounded-lg p-2 text-xs whitespace-nowrap"
              >
                Need help? Chat with Jarvis!
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 glass rounded-lg overflow-hidden ${
              isMinimized ? "w-80 h-16" : "w-80 h-96"
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-glass-border bg-gradient-cyber">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="font-semibold text-white">Jarvis AI</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-8 h-8 text-white hover:bg-white/20"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto h-64">
                  {messages.length === 0 && (
                    <div className="text-center text-muted-foreground text-sm">
                      👋 Hi! I'm Jarvis, your AI assistant. How can I help you today?
                    </div>
                  )}
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === "bot" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                          <span className="flex-1">{message.content}</span>
                          {message.type === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted text-muted-foreground p-3 rounded-lg text-sm flex items-center space-x-2">
                        <Bot className="w-4 h-4" />
                        <span>Jarvis is typing</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-glass-border">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="flex-1 bg-muted/50 border-muted text-sm"
                    />
                    <Button
                      onClick={handleSendMessage}
                      variant="cyber-outline"
                      size="icon"
                      disabled={!inputValue.trim() || isTyping}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}