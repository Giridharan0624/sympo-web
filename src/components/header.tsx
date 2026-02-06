"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
                ? "border-b border-white/10 bg-black/90 backdrop-blur-lg shadow-lg shadow-black/20"
                : "bg-transparent"
            }`}>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link
                    href="#home"
                    onClick={(e) => scrollToSection(e, "#home")}
                    className="flex items-center gap-2 group"
                >
                    <span className="text-xl font-bold tracking-wider text-white transition-all duration-300 group-hover:text-gray-300">
                        GRYPHONIX
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex lg:items-center lg:gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="relative text-sm font-medium text-gray-300 transition-colors hover:text-white group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden text-white hover:bg-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <nav className="container mx-auto flex flex-col gap-2 px-4 py-4 bg-black/95 border-t border-white/10">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white hover:translate-x-2"
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
