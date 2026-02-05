import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, ClipboardCheck, MessageSquare, BarChart } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* HERO */}
            <section className="bg-slate-900 py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-30 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Personas que hacen que la energía <br className="hidden md:block" /> llegue donde tiene que llegar.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light">
                        Trabajo serio, compromiso diario y operaciones que no se detienen.
                    </p>
                </div>
            </section>

            {/* BLOCK 1 – QUIÉNES SOMOS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                            <Target className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Quiénes somos</h2>
                        <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                            <p>
                                Somos una empresa dedicada al abastecimiento de combustibles y GLP para operaciones empresariales que requieren continuidad, precisión y seguridad.
                            </p>
                            <p>
                                Nuestro trabajo es asegurar que la energía esté disponible cuando se necesita, donde se necesita y bajo estándares claros de calidad y cumplimiento.
                            </p>
                            <p className="font-semibold text-slate-800">
                                Operamos con procesos definidos, logística planificada y un enfoque práctico: cumplir lo que se promete.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 2 – NUESTRO EQUIPO */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestro equipo</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Cada persona cumple un rol esencial dentro de la operación. Conocer a nuestro equipo es entender cómo trabajamos.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {/* Carlos Ramírez */}
                        <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden group">
                            <div className="w-full h-80 overflow-hidden relative">
                                <img
                                    src="/team-carlos.jpg"
                                    alt="Carlos Ramírez"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="pt-6 px-6 pb-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">CARLOS RAMÍREZ</h3>
                                    <p className="text-primary font-medium">Coordinador de Operaciones</p>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    Carlos se encarga de que cada entrega se ejecute según lo planificado. Es meticuloso, organizado y tiene una visión clara de cómo debe funcionar una operación sin errores.
                                </p>
                                <p className="text-slate-500 text-sm italic">
                                    "Cree firmemente que la prevención y la planificación hacen la diferencia."
                                </p>
                            </CardContent>
                        </Card>

                        {/* María Fernanda López */}
                        <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden group">
                            <div className="w-full h-80 overflow-hidden relative">
                                <img
                                    src="/team-maria.jpg"
                                    alt="María Fernanda López"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="pt-6 px-6 pb-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">MARÍA FERNANDA LÓPEZ</h3>
                                    <p className="text-teal-600 font-medium">Administración y Control</p>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    María Fernanda es responsable de mantener el orden administrativo y documental de la empresa. Su trabajo asegura que cada proceso esté respaldado, claro y alineado a los estándares internos.
                                </p>
                                <p className="text-slate-500 text-sm italic">
                                    "Es detallista, constante y valora mucho la claridad en la información."
                                </p>
                            </CardContent>
                        </Card>

                        {/* Jorge Salazar */}
                        <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden group">
                            <div className="w-full h-80 overflow-hidden relative">
                                <img
                                    src="/team-jorge.jpg"
                                    alt="Jorge Salazar"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="pt-6 px-6 pb-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">JORGE SALAZAR</h3>
                                    <p className="text-orange-600 font-medium">Supervisor de Logística</p>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    Jorge coordina la logística diaria y supervisa que cada despacho se realice de forma segura y eficiente. Tiene amplia experiencia en campo y un fuerte compromiso con la seguridad operativa.
                                </p>
                                <p className="text-slate-500 text-sm italic">
                                    "Cree que un buen equipo se construye con confianza y responsabilidad."
                                </p>
                            </CardContent>
                        </Card>

                        {/* Ana Torres */}
                        <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden group">
                            <div className="w-full h-80 overflow-hidden relative">
                                <img
                                    src="/team-ana.jpg"
                                    alt="Ana Torres"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="pt-6 px-6 pb-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">ANA TORRES</h3>
                                    <p className="text-purple-600 font-medium">Atención al Cliente Empresarial</p>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    Ana es el primer punto de contacto con muchos de nuestros clientes. Se encarga de coordinar solicitudes, resolver consultas y asegurar una comunicación clara y oportuna.
                                </p>
                                <p className="text-slate-500 text-sm italic">
                                    "Disfruta trabajar en equipo y aportar a que la experiencia del cliente sea fluida y profesional."
                                </p>
                            </CardContent>
                        </Card>

                        {/* Luis Fernando Pérez */}
                        <Card className="hover:shadow-lg transition-shadow border-none shadow-md overflow-hidden group lg:col-start-2">
                            <div className="w-full h-80 overflow-hidden relative">
                                <img
                                    src="/team-luis.png"
                                    alt="Luis Fernando Pérez"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardContent className="pt-6 px-6 pb-8">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">LUIS FERNANDO PÉREZ</h3>
                                    <p className="text-indigo-600 font-medium">Planificación y Abastecimiento</p>
                                </div>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                                    Luis Fernando participa en la planificación de consumos y programación de abastecimientos. Su rol es clave para anticipar necesidades y evitar interrupciones.
                                </p>
                                <p className="text-slate-500 text-sm italic">
                                    "Le apasiona el análisis, el trabajo estructurado y la mejora continua."
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* BLOCK 3 – TEXTO DE TRANSICIÓN */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-2xl md:text-4xl font-serif italic font-light max-w-4xl mx-auto leading-normal">
                        "Detrás de cada suministro hay personas comprometidas con hacer bien su trabajo, todos los días."
                    </p>
                </div>
            </section>

            {/* BLOCK 4 – CTA FINAL */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <Users className="h-12 w-12 text-slate-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">¿Quieres formar parte del equipo?</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Buscamos personas responsables, comprometidas y con ganas de crecer en un entorno profesional y ordenado.
                        Si te motiva el trabajo bien hecho y quieres ser parte de una empresa donde tu rol importa, nos gustaría conocerte.
                    </p>
                    <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 text-lg px-8 py-6 h-auto" asChild>
                        <Link href="/unete-al-equipo">Únete al equipo</Link>
                    </Button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
