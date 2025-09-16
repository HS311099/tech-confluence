import { ServicesSection } from "@/components/services-section";
import { Header } from "@/components/header";

const Services = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main className="pt-20">
      <ServicesSection />
      {/* Add more outcome-focused content and process visuals here */}
    </main>
  </div>
);

export default Services;
