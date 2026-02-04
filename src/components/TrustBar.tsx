import { Award, MapPin, Clock } from "lucide-react";

export function TrustBar() {
    const items = [
        {
            icon: <Award className="h-10 w-10 text-secondary mb-2" />,
            text: "+15 años de experiencia",
        },
        {
            icon: <MapPin className="h-10 w-10 text-secondary mb-2" />,
            text: "Cobertura 100% Nacional",
        },
        {
            icon: <Clock className="h-10 w-10 text-secondary mb-2" />,
            text: "Disponibilidad 24/7",
        },
    ];

    return (
        <section className="bg-white py-12 border-b">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center p-4 hover:bg-slate-50 rounded-xl transition-colors">
                            {item.icon}
                            <h3 className="text-xl font-bold text-primary">{item.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
