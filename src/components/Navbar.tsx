"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-3xl font-extrabold tracking-tight text-primary">NVR</span>
                    {/* Visual V accent could be added here if needed, but text is fine */}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
                        Inicio
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                        Sobre Nosotros
                    </Link>
                    <Link href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
                        Servicios
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contáctanos
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="flex items-center text-sm font-medium text-muted-foreground mr-4">
                        <Phone className="mr-2 h-4 w-4" />
                        999 555 444
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                        Portal de Cliente
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t bg-white p-4 space-y-4">
                    {/* Mobile Links */}
                    <div className="flex flex-col space-y-3">
                        <Link href="#inicio" className="text-sm font-medium py-2 border-b">Inicio</Link>
                        <Link href="#about" className="text-sm font-medium py-2 border-b">Sobre Nosotros</Link>
                        <Link href="#servicios" className="text-sm font-medium py-2 border-b">Servicios</Link>
                        <Link href="#contact" className="text-sm font-medium py-2 border-b">Contáctanos</Link>
                    </div>
                    <div className="pt-4">
                        <Button className="w-full bg-primary mb-3">Portal de Cliente</Button>
                        <div className="flex items-center justify-center text-sm font-medium text-muted-foreground">
                            <Phone className="mr-2 h-4 w-4" />
                            999 555 444
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
