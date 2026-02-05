import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] bg-slate-900 flex items-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1579389083395-451d663d219e?q=80&w=2070&auto=format&fit=crop')", // Industrial/Truck generic image
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Calidad y Seguridad en el <br className="hidden md:block" />
                        <span className="text-white">Suministro de Combustible</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-100 max-w-2xl font-light">
                        Suministro estratégico de Diesel, GLP y Gasolinas para maquinaria pesada y sectores industriales en todo el Perú.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 font-bold" asChild>
                            <Link href="/contacto">Solicitar Cotización</Link>
                        </Button>
                        <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 font-bold">
                            Nuestros Servicios <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Brand Curve (Optional) */}
            <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-white to-transparent opacity-10" />
        </section>
    );
}
