import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, CheckCircle, Building2, HardHat, Briefcase, Zap, Box, Wrench } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Testimonials() {
    const testimonials = [
        {
            name: "Carlos Mendoza",
            role: "Gerente de Operaciones, Minera Andina",
            content: "La confiabilidad de NVR ha sido clave para mantener nuestra flota operativa 24/7. El suministro siempre llega a tiempo, incluso en zonas de difícil acceso.",
            rating: 5,
            avatar: "CM"
        },
        {
            name: "Sofía Paredes",
            role: "Jefa de Logística, Transportes Perú",
            content: "Desde que trabajamos con NVR, hemos reducido nuestros costos operativos gracias a la calidad de su Diesel B5. Su plataforma de gestión es un gran valor agregado.",
            rating: 5,
            avatar: "SP"
        },
        {
            name: "Jorge Alania",
            role: "Director de Proyectos, Constructora Vial",
            content: "Excelente servicio al cliente y capacidad de respuesta. Tuvimos una urgencia y nos abastecieron en tiempo récord. Totalmente recomendados.",
            rating: 5,
            avatar: "JA"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Clientes que confían en nosotros</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        La seguridad y eficiencia que brindamos genera relaciones a largo plazo.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12 border-2 border-secondary">
                                    {/* Placeholder for real images */}
                                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${item.avatar}`} alt={item.name} />
                                    <AvatarFallback>{item.avatar}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex mb-3">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-slate-600 text-sm italic">&quot;{item.content}&quot;</p>
                                <div className="flex items-center mt-4 text-green-600 text-xs font-semibold">
                                    <CheckCircle className="h-3 w-3 mr-1" /> Cliente Verificado
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Clients Section (Option 1 - Clean Grid) */}
                <div className="border-t border-slate-200 pt-16">
                    <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-12">
                        Empresas líderes que confían en NVR
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                        {/* Fake Logos */}
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <Building2 className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors">V & V BRAVO</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <HardHat className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors text-center">GRUAS DEL PACIFICO</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <Briefcase className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors">BIDDLE</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <Zap className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors">EPOS</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <Box className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors">RAUM</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className="bg-slate-100 p-3 rounded-full group-hover:bg-blue-50 transition-colors">
                                <Wrench className="h-8 w-8 text-slate-500 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="font-bold text-slate-600 text-sm group-hover:text-primary transition-colors">OTOYA</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
