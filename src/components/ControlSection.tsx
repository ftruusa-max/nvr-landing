import { Button } from "@/components/ui/button";

export function ControlSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
                            Tome el control total <br /> de su suministro
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Gestión inteligente para empresas que no se detienen. Acceda a nuestra plataforma exclusiva y monitoree cada pedido con total transparencia.
                            Ponemos a su alcance métricas avanzadas y trazabilidad completa para una logística moderna, ágil y sin sorpresas.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" className="bg-primary text-white font-semibold">
                                Solicitar Demo
                            </Button>
                        </div>
                    </div>

                    {/* Image/Mockup */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 aspect-video flex items-center justify-center">
                            {/* Placeholder for Dashboard Mockup */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                            <div className="relative z-10 text-center p-8">
                                <div className="bg-white p-4 rounded-lg shadow-sm max-w-sm mx-auto mb-4">
                                    <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                </div>
                                <span className="text-slate-400 font-medium">Dashboard Mockup</span>
                            </div>

                            {/* Or use a real image if available via URL */}
                            {/* <img src="..." alt="Dashboard" className="object-cover w-full h-full" /> */}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
