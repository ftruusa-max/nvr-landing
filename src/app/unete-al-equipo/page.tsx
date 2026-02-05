"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, User, Mail, Phone, FileText, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function JobApplicationPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        linkedin: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar la postulación");
            }

            setStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                position: "",
                linkedin: "",
                message: ""
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Hubo un problema al enviar su postulación. Por favor intente nuevamente.");
        }
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/90 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-30 mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop')" }}
                />
                <div className="container mx-auto px-4 md:px-8 relative z-20">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Únete a Nuestro Equipo</h1>
                        <p className="text-xl text-slate-300 font-light">
                            Estamos buscando talento comprometido que quiera crecer con nosotros.
                            Si te apasiona la logística, la energía y el trabajo bien hecho, este es tu lugar.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Card className="bg-white text-slate-900 shadow-2xl border-none">
                            <CardHeader className="bg-slate-50 border-b border-slate-100 p-8">
                                <CardTitle className="text-2xl font-bold flex items-center gap-2 text-primary">
                                    <Briefcase className="h-6 w-6" />
                                    Formulario de Postulación
                                </CardTitle>
                                <CardDescription className="text-base text-slate-600">
                                    Completa tus datos básicos y cuéntanos por qué te gustaría trabajar en NVR.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-8">
                                {status === "success" ? (
                                    <div className="text-center py-12 space-y-4">
                                        <div className="flex justify-center">
                                            <CheckCircle className="h-16 w-16 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800">¡Postulación enviada!</h3>
                                        <p className="text-slate-600 max-w-md mx-auto">
                                            Gracias por tu interés. Hemos recibido tu información y la revisaremos detalladamente. Si tu perfil encaja con nuestras búsquedas, te contactaremos.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setStatus("idle")}
                                            className="mt-6"
                                        >
                                            Enviar otra postulación
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {status === "error" && (
                                            <div className="p-3 bg-red-50 text-red-600 rounded-md flex items-center gap-2 text-sm">
                                                <AlertCircle className="h-4 w-4" />
                                                {errorMessage}
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName" className="flex items-center gap-2">
                                                        <User className="h-4 w-4 text-slate-400" /> Nombres <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        placeholder="Ej. Juan Carlos"
                                                        value={formData.firstName}
                                                        onChange={(e) => handleChange("firstName", e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName" className="flex items-center gap-2">
                                                        <User className="h-4 w-4 text-slate-400" /> Apellidos <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="lastName"
                                                        placeholder="Ej. Pérez López"
                                                        value={formData.lastName}
                                                        onChange={(e) => handleChange("lastName", e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email" className="flex items-center gap-2">
                                                        <Mail className="h-4 w-4 text-slate-400" /> Correo Electrónico <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="correo@ejemplo.com"
                                                        value={formData.email}
                                                        onChange={(e) => handleChange("email", e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone" className="flex items-center gap-2">
                                                        <Phone className="h-4 w-4 text-slate-400" /> Teléfono / Celular <span className="text-red-500">*</span>
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        placeholder="999 000 000"
                                                        value={formData.phone}
                                                        onChange={(e) => handleChange("phone", e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="position" className="flex items-center gap-2">
                                                    <Briefcase className="h-4 w-4 text-slate-400" /> Puesto de Interés
                                                </Label>
                                                <Input
                                                    id="position"
                                                    placeholder="Ej. Conductor, Logística, Ventas, Administración..."
                                                    value={formData.position}
                                                    onChange={(e) => handleChange("position", e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="linkedin" className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-slate-400" /> Link de LinkedIn o CV (URL)
                                                </Label>
                                                <Input
                                                    id="linkedin"
                                                    placeholder="https://linkedin.com/in/tu-perfil"
                                                    value={formData.linkedin}
                                                    onChange={(e) => handleChange("linkedin", e.target.value)}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Breve presentación</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Cuéntanos brevemente sobre tu experiencia y por qué quieres unirte al equipo..."
                                                    className="min-h-[120px]"
                                                    value={formData.message}
                                                    onChange={(e) => handleChange("message", e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-6 mt-4"
                                            disabled={status === "loading"}
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                "Enviar Postulación"
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-slate-400 mt-4">
                                            Al enviar este formulario aceptas que tus datos sean tratados para procesos de selección internos.
                                        </p>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
