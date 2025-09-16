import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";

const Contact = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <Header />
    <main className="pt-20">
      <ContactSection />
      {/* Add lead magnet, booking link, and contact form enhancements here */}
    </main>
  </div>
);

export default Contact;
