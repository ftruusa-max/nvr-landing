import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* We can reuse the ContactForm component directly. 
                It already has a section with background and padding.
            */}
            <ContactForm />

            <Footer />
        </main>
    );
}
