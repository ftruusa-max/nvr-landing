import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Fuel, Gauge } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Diesel B5 & S50",
            description: "Combustible de alto rendimiento para flotas y maquinaria pesada. Garantizamos pureza y eficiencia.",
            icon: <Truck className="h-12 w-12 text-secondary" />,
            color: "bg-blue-50"
        },
        {
            title: "GLP Granel",
            description: "Soluciones de Gas Licuado de Petróleo para industrias y comercios. Instalación y abastecimiento seguro.",
            icon: <Fuel className="h-12 w-12 text-secondary" />,
            color: "bg-green-50"
        },
        {
            title: "Gasohol 84, 90, 97",
            description: "Gasoholes de 84, 90 y 97 octanos para todo tipo de vehículos. Calidad certificada.",
            icon: <Gauge className="h-12 w-12 text-secondary" />,
            color: "bg-slate-50"
        }
    ];

    return (
        <section id="servicios" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary">Nuestras Soluciones de Energía</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Optimizamos su cadena de suministro con productos certificados y logística de precisión.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="flex flex-col items-center text-center pb-2">
                                <div className={`p-4 rounded-full ${service.color} mb-4`}>
                                    {service.icon}
                                </div>
                                <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                <p>{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
