import { PortfolioSection } from "@/components/portfolio-section";
import { Header } from "@/components/header";

const Portfolio = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main className="pt-20">
      <PortfolioSection />
      {/* Add case studies and measurable results here */}
    </main>
  </div>
);

export default Portfolio;
