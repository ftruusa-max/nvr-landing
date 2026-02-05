"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        requirementType: "",
        name: "",
        company: "",
        email: "",
        phone: "",
        fuelInterest: ""
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
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar el formulario");
            }

            setStatus("success");
            setFormData({
                requirementType: "",
                name: "",
                company: "",
                email: "",
                phone: "",
                fuelInterest: ""
            });
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage("Hubo un problema al enviar su solicitud. Por favor intente nuevamente.");
        }
    };

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
                            {status === "success" ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="flex justify-center">
                                        <CheckCircle className="h-16 w-16 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-800">¡Mensaje enviado con éxito!</h3>
                                    <p className="text-slate-600 max-w-md mx-auto">
                                        Hemos recibido su solicitud correctamente. Nuestro equipo comercial se pondrá en contacto con usted en breve.
                                    </p>
                                    <Button
                                        variant="outline"
                                        onClick={() => setStatus("idle")}
                                        className="mt-6"
                                    >
                                        Enviar otra solicitud
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2 space-y-2">
                                        <Label htmlFor="requirement-type">Tipo de Requerimiento <span className="text-red-500">*</span></Label>
                                        <Select
                                            value={formData.requirementType}
                                            onValueChange={(value) => handleChange("requirementType", value)}
                                            required
                                        >
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
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Nombre Completo <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="name"
                                            placeholder="Juan Pérez"
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company">Empresa</Label>
                                        <Input
                                            id="company"
                                            placeholder="Nombre de su empresa"
                                            value={formData.company}
                                            onChange={(e) => handleChange("company", e.target.value)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Correo Corporativo <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="juan@empresa.com"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono / Celular <span className="text-red-500">*</span></Label>
                                        <Input
                                            id="phone"
                                            placeholder="999 000 000"
                                            value={formData.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <Label htmlFor="fuel">Tipo de Combustible de Interés <span className="text-red-500">*</span></Label>
                                        <Select
                                            value={formData.fuelInterest}
                                            onValueChange={(value) => handleChange("fuelInterest", value)}
                                            required
                                        >
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

                                    {status === "error" && (
                                        <div className="md:col-span-2 p-3 bg-red-50 text-red-600 rounded-md flex items-center gap-2 text-sm">
                                            <AlertCircle className="h-4 w-4" />
                                            {errorMessage}
                                        </div>
                                    )}

                                    <div className="md:col-span-2 pt-4">
                                        <Button
                                            type="submit"
                                            className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white font-bold text-lg py-6"
                                            disabled={status === "loading"}
                                        >
                                            {status === "loading" ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Enviando...
                                                </>
                                            ) : (
                                                "Enviar Solicitud"
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
