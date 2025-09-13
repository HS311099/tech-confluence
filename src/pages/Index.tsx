import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Chatbot } from "@/components/chatbot"

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="snap-y snap-mandatory">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      <Chatbot />
    </div>
  );
};

export default Index;
