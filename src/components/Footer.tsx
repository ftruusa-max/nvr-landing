import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <h3 className="text-2xl font-bold text-white tracking-widest">NVR</h3>
                        <p className="text-sm">
                            Su socio estratégico en energía y logística nacional. Calidad y seguridad garantizada.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-white font-semibold">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">Inicio</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Servicios</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Portal Cliente</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-white font-semibold">Servicios</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Abastecimiento Diesel</li>
                            <li>GLP a Granel</li>
                            <li>Gasoholes</li>
                            <li>Logística Integral</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 space-y-4">
                        <h4 className="text-white font-semibold">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <span>Los Olivos / San Martín de Porres, Lima, Perú</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <span>989 787 565</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-secondary shrink-0" />
                                <span>gerencia@nvr.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} NVR Combustibles. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
