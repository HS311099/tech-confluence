import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { Chatbot } from "@/components/chatbot"

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        
        {/* Placeholder sections for future development */}
        <section id="services" className="scroll-section py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Our Services</h2>
            <p className="text-muted-foreground">Coming soon - Detailed service offerings</p>
          </div>
        </section>
        
        <section id="work" className="scroll-section py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Our Work</h2>
            <p className="text-muted-foreground">Coming soon - Portfolio showcase</p>
          </div>
        </section>
        
        <section id="team" className="scroll-section py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Meet the Team</h2>
            <p className="text-muted-foreground">Coming soon - Team member profiles</p>
          </div>
        </section>
        
        <section id="contact" className="scroll-section py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text">Get In Touch</h2>
            <p className="text-muted-foreground">Coming soon - Contact form and information</p>
          </div>
        </section>
      </main>
      
      <Chatbot />
    </div>
  );
};

export default Index;
