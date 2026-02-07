import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
    { href: "#technical-events", label: "Technical Events" },
    { href: "#non-technical-events", label: "Non-Technical Events" },
    { href: "#staff-coordinators", label: "Staff Coordinators" },
    { href: "#student-coordinators", label: "Student Coordinators" },
    { href: "#contact", label: "Contact" },
];

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-wider text-white">
                            ZENITH&apos;26
                        </h3>
                        <p className="text-sm text-gray-400">
                            A National Level Technical Symposium organized by Jeppiaar Engineering College.
                        </p>
                    </div>

                    {/* College Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">College</h4>
                        <p className="text-sm text-gray-400">
                            Jeppiaar Engineering College<br />
                            OMR, Chennai - 600119<br />
                            Tamil Nadu, India
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-400 transition-colors hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:zenith@jeppiaar.ac.in"
                                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Mail className="h-4 w-4" />
                                zenith@jeppiaar.ac.in
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                            >
                                <Phone className="h-4 w-4" />
                                +91 98765 43210
                            </a>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                OMR, Chennai
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-white/10" />

                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                    <p className="text-sm text-gray-500">
                        © 2026 ZENITH&apos;26. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-500">
                        Jeppiaar Engineering College
                    </p>
                </div>
            </div>
        </footer>
    );
}
