import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck, Activity, ShieldCheck, Flame, Droplets } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        Nuestros Servicios de Energía
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light">
                        Soluciones confiables para operaciones que no pueden detenerse.
                    </p>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Abastecemos combustibles certificados y GLP con logística precisa, control operativo y cumplimiento normativo.
                        Trabajamos con empresas que necesitan continuidad, eficiencia y seguridad en su operación diaria.
                    </p>
                </div>
            </section>

            {/* Diesel Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">
                                <Truck className="h-5 w-5" /> Diesel B5 & S50
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Energía confiable para flotas y maquinaria pesada
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                <strong>Qué ofrecemos:</strong> Suministro de Diesel B5 y S50 de alta calidad, diseñado para operaciones exigentes que requieren rendimiento constante y mínima variabilidad.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Ideal para:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Flotas de transporte</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Maquinaria pesada</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Construcción y minería</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Beneficios clave:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> Mejor desempeño del motor</li>
                                        <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Combustible certificado</li>
                                        <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> Reducción de paradas</li>
                                    </ul>
                                </div>
                            </div>

                            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                                <Link href="/#contact">👉 Solicitar cotización de Diesel</Link>
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1591784013470-3d8540b6133a?q=80&w=2070&auto=format&fit=crop"
                                    alt="Diesel Truck"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GLP Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold mb-6">
                                <Flame className="h-5 w-5" /> GLP Granel
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Abastecimiento seguro y eficiente para tu operación
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                <strong>Qué ofrecemos:</strong> Suministro de GLP a granel para industrias y comercios, con enfoque en seguridad operativa, continuidad y cumplimiento normativo.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Ideal para:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Plantas industriales</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Restaurantes y comercios</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Procesos térmicos</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Servicios incluidos:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Evaluación técnica</li>
                                        <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Instalación (si aplica)</li>
                                        <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> Abastecimiento periódico</li>
                                    </ul>
                                </div>
                            </div>

                            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold" asChild>
                                <Link href="/#contact">👉 Evaluar suministro de GLP</Link>
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                                <div className="absolute inset-0 bg-gradient-to-bl from-orange-900/20 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1585820353135-26a9787e9ec9?q=80&w=2070&auto=format&fit=crop"
                                    alt="GLP Tank"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gasohol Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-6">
                                <Droplets className="h-5 w-5" /> Gasohol 84, 90 y 97
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                Calidad certificada para todo tipo de vehículos
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                <strong>Qué ofrecemos:</strong> Gasoholes de 84, 90 y 97 octanos, cumpliendo con estándares de calidad para garantizar un rendimiento óptimo del motor.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Ideal para:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Empresas con flotas livianas</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Estaciones internas</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Consumo corporativo</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-3">Modalidades:</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> Entrega programada</li>
                                        <li className="flex items-center gap-2"><Activity className="h-4 w-4 text-secondary" /> Volúmenes según demanda</li>
                                        <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-secondary" /> Calidad certificada</li>
                                    </ul>
                                </div>
                            </div>

                            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                                <Link href="/#contact">👉 Consultar disponibilidad</Link>
                            </Button>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent z-10" />
                                <img
                                    src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop"
                                    alt="Gas Station"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">¿Por qué trabajar con nosotros?</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
                            <ShieldCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Cumplimiento Normativo</h3>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
                            <Truck className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Logística Precisa</h3>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
                            <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Productos Certificados</h3>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-800/50 backdrop-blur border border-slate-700">
                            <Activity className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="font-bold text-lg mb-2">Enfoque B2B</h3>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-xl text-slate-300 italic">"Más que combustible, continuidad operativa"</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Hablemos de tu operación</h2>
                    <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-10">
                        Cuéntanos tu consumo, tipo de operación y ubicación. Te proponemos la solución más eficiente para tu negocio.
                    </p>
                    <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8 py-6 h-auto font-bold shadow-lg" asChild>
                        <Link href="/#contact">👉 Solicitar información</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
