"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#technical-events", label: "Technical Events" },
    { href: "#non-technical-events", label: "Non-Technical Events" },
    { href: "#staff-coordinators", label: "Staff Coordinators" },
    { href: "#student-coordinators", label: "Student Coordinators" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
                ? "border-b border-[#D73A2F]/30 bg-black/95 backdrop-blur-lg shadow-lg shadow-[#D73A2F]/10"
                : "bg-transparent"
            }`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo with fire effect */}
                <Link
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="flex items-center gap-2 group"
                >
                    <Flame className="h-6 w-6 text-[#D73A2F] animate-flicker transition-transform group-hover:scale-110" />
                    <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#FF6A2A] bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
                        ZENITH&apos;26
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center lg:gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="relative text-sm font-medium text-gray-300 transition-colors hover:text-[#D73A2F] group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#FF6A2A] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-[#D73A2F] hover:bg-[#D73A2F]/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <nav className="container mx-auto flex flex-col gap-2 px-4 py-4 bg-black/98 border-t border-[#D73A2F]/20">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-[#D73A2F]/10 hover:text-[#D73A2F] hover:translate-x-2"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
