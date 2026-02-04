import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { ControlSection } from "@/components/ControlSection";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div id="inicio">
        <Hero />
      </div>

      <TrustBar />

      <Services />

      <div id="about">
        <ControlSection />
      </div>

      <Testimonials />

      <ContactForm />

      <Footer />
    </main>
  );
}

