"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // UI only - no actual form submission
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 ring-1 ring-cyan-500/30">
                        <Mail className="h-10 w-10 text-cyan-400" />
                    </div>

                    <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        Get in Touch
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Contact Us
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have questions about GRYPHONIX? We&apos;re here to help!
                        Reach out to us through any of the channels below.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card className="border-white/10 bg-gradient-to-br from-gray-900 to-black">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                                            <MapPin className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Address</h3>
                                            <p className="text-gray-400">
                                                Jeppiaar Engineering College<br />
                                                Old Mahabalipuram Road (OMR)<br />
                                                Chennai - 600119<br />
                                                Tamil Nadu, India
                                            </p>
                                        </div>
                                    </div>

                                    <Separator className="bg-white/10" />

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                                            <Mail className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Email</h3>
                                            <a href="mailto:gryphonix@jeppiaar.ac.in" className="text-gray-400 hover:text-white transition-colors">
                                                gryphonix@jeppiaar.ac.in
                                            </a>
                                        </div>
                                    </div>

                                    <Separator className="bg-white/10" />

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                                            <Phone className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Phone</h3>
                                            <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors block">
                                                +91 98765 43210 (General Enquiries)
                                            </a>
                                            <a href="tel:+919876543211" className="text-gray-400 hover:text-white transition-colors block">
                                                +91 98765 43211 (Registration)
                                            </a>
                                        </div>
                                    </div>

                                    <Separator className="bg-white/10" />

                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                                            <Clock className="h-6 w-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Working Hours</h3>
                                            <p className="text-gray-400">
                                                Monday - Friday: 9:00 AM - 5:00 PM<br />
                                                Saturday: 9:00 AM - 1:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card className="border-white/10 bg-gradient-to-br from-gray-900 to-black">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            placeholder="Enter subject"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                                            placeholder="Type your message here..."
                                            required
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-[1.02]"
                                        disabled={formSubmitted}
                                    >
                                        {formSubmitted ? (
                                            <>
                                                <CheckCircle className="mr-2 h-4 w-4" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
