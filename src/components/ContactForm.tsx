import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Hablemos de su Abastecimiento</h2>
                        <p className="text-slate-300 text-lg">
                            Déjenos sus datos y un asesor especializado se pondrá en contacto a la brevedad.
                        </p>
                    </div>

                    <Card className="bg-white text-slate-900 shadow-2xl">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">Formulario de Contacto</CardTitle>
                            <CardDescription>Complete el formulario para recibir una cotización personalizada.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre Completo</Label>
                                    <Input id="name" placeholder="Juan Pérez" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Empresa</Label>
                                    <Input id="company" placeholder="Nombre de su empresa" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo Corporativo</Label>
                                    <Input id="email" type="email" placeholder="juan@empresa.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Teléfono / Celular</Label>
                                    <Input id="phone" placeholder="999 000 000" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="requirement-type">Tipo de Requerimiento</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="quote">Solicitud de cotización</SelectItem>
                                            <SelectItem value="demo">Solicitud de Demo</SelectItem>
                                            <SelectItem value="general">Otros / Consulta General</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="fuel">Tipo de Combustible de Interés</Label>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione una opción" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="diesel">Diesel B5 & S50</SelectItem>
                                            <SelectItem value="glp">GLP Granel</SelectItem>
                                            <SelectItem value="gasohol">Gasoholes (84, 90, 97)</SelectItem>

                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6">
                                        Enviar Solicitud
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
