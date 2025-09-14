import { AboutSection } from "@/components/about-section";
import { TeamSection } from "@/components/team-section";
import { Header } from "@/components/header";

const About = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main className="pt-20">
      <AboutSection />
      <TeamSection />
      {/* Add company story, values, and team info here */}
    </main>
  </div>
);

export default About;
