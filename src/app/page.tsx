"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  ArrowRight, Code, Gamepad2, Users, Calendar, MapPin,
  Mail, Phone, Clock, Send, CheckCircle, ExternalLink, User, GraduationCap, Flame
} from "lucide-react";

// Theme Colors - More RED focused
// Blood Moon Red — #D73A2F (Primary)
// Deep Crimson — #8B0000 (Dark Red)
// Inferno Orange — #FF6A2A (Accent)
// Deep Black — #000000
// Royal Gold — #D4AF37

// Data - 4 technical events
const technicalEvents = [
  { name: "Code Sprint", description: "Fast-paced competitive programming challenge with algorithmic problems.", category: "Programming" },
  { name: "Hackathon", description: "24-hour hackathon building innovative solutions to real-world problems.", category: "Development" },
  { name: "Paper Presentation", description: "Present research papers on emerging technologies.", category: "Research" },
  { name: "Technical Quiz", description: "Test knowledge in programming, tech history, and CS concepts.", category: "Quiz" },
];

// Data - 4 non-technical events
const nonTechnicalEvents = [
  { name: "Gaming Tournament", description: "Battle in popular multiplayer games for exciting prizes.", category: "Gaming" },
  { name: "Photography Contest", description: "Capture the symposium through your lens.", category: "Creative" },
  { name: "Treasure Hunt", description: "Navigate clues and puzzles to find hidden treasure.", category: "Adventure" },
  { name: "Quiz Mania", description: "General knowledge quiz on movies, sports, and pop culture.", category: "Quiz" },
];

// Data - 2 staff coordinators
const staffCoordinators = [
  { name: "Dr. Sarah Johnson", department: "CSE", role: "Head Coordinator", email: "sarah.johnson@jec.ac.in", phone: "+91 98765 43210" },
  { name: "Prof. Rajesh Kumar", department: "IT", role: "Technical Lead", email: "rajesh.kumar@jec.ac.in", phone: "+91 98765 43211" },
];

// Data - 8 student coordinators
const studentCoordinators = [
  { name: "Arun Kumar", department: "CSE", role: "Overall Coordinator", email: "arun.k@student.jec.ac.in", phone: "+91 98765 12345" },
  { name: "Priya Venkatesh", department: "IT", role: "Technical Head", email: "priya.v@student.jec.ac.in", phone: "+91 98765 12346" },
  { name: "Rahul Sharma", department: "CSE", role: "Events Coordinator", email: "rahul.s@student.jec.ac.in", phone: "+91 98765 12347" },
  { name: "Sneha Reddy", department: "ECE", role: "Registration Head", email: "sneha.r@student.jec.ac.in", phone: "+91 98765 12348" },
  { name: "Vikram Singh", department: "MECH", role: "Logistics Head", email: "vikram.s@student.jec.ac.in", phone: "+91 98765 12349" },
  { name: "Deepika M", department: "CSE", role: "Marketing Head", email: "deepika.m@student.jec.ac.in", phone: "+91 98765 12350" },
  { name: "Karthik R", department: "IT", role: "Hospitality Head", email: "karthik.r@student.jec.ac.in", phone: "+91 98765 12351" },
  { name: "Anjali Krishnan", department: "EEE", role: "Sponsorship Head", email: "anjali.k@student.jec.ac.in", phone: "+91 98765 12352" },
];

// Fire Particle Component
function FireParticle({ index }: { index: number }) {
  const size = Math.random() * 8 + 4;
  const left = Math.random() * 100;
  const duration = Math.random() * 3 + 4;
  const delay = Math.random() * 5;

  return (
    <div
      className="absolute animate-fire-rise"
      style={{
        left: `${left}%`,
        bottom: '-20px',
        width: `${size}px`,
        height: `${size * 1.5}px`,
        background: `linear-gradient(to top, #D73A2F, #FF6A2A, transparent)`,
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        filter: 'blur(1px)',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// Ember Component
function Ember({ index }: { index: number }) {
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 2 + 2;
  const delay = Math.random() * 3;

  return (
    <div
      className="absolute rounded-full animate-ember"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: index % 2 === 0 ? '#D73A2F' : '#FF6A2A',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

// Event Card Component
function EventCard({ name, description, category, delay = 0 }: { name: string; description: string; category: string; delay?: number }) {
  return (
    <AnimateOnScroll animation="fade-up" delay={delay}>
      <Card className="group relative overflow-hidden border-[#D73A2F]/30 bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-black transition-all duration-500 hover:border-[#D73A2F]/60 hover:shadow-xl hover:shadow-[#D73A2F]/20 hover:-translate-y-2 h-full">
        {/* Fiery gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D73A2F]/10 via-[#8B0000]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {/* Fire glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#D73A2F]/0 via-[#D73A2F]/20 to-[#D73A2F]/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
        <CardHeader className="relative">
          <Badge variant="secondary" className="mb-2 w-fit bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/40 hover:bg-[#D73A2F]/30 transition-colors">
            <Flame className="w-3 h-3 mr-1" />
            {category}
          </Badge>
          <CardTitle className="text-lg font-bold text-white transition-colors group-hover:text-[#D73A2F]">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <CardDescription className="text-gray-400 text-sm">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="relative">
          <Button className="w-full bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#8B0000] text-white border-0 transition-all duration-300 hover:from-[#D73A2F] hover:via-[#FF6A2A] hover:to-[#D73A2F] hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-[#D73A2F]/40">
            Register Now
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </AnimateOnScroll>
  );
}

// Coordinator Card Component
function CoordinatorCard({ name, department, role, email, phone, delay = 0 }: { name: string; department: string; role: string; email: string; phone: string; delay?: number }) {
  return (
    <AnimateOnScroll animation="zoom-in" delay={delay}>
      <Card className="group relative overflow-hidden border-[#D73A2F]/20 bg-gradient-to-br from-[#0a0a0a] via-[#100505] to-black transition-all duration-500 hover:border-[#D73A2F]/50 hover:shadow-xl hover:shadow-[#D73A2F]/15 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D73A2F]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardHeader className="relative text-center pb-2">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D73A2F]/40 to-[#8B0000]/30 ring-2 ring-[#D73A2F]/40 transition-all duration-500 group-hover:ring-[#D73A2F]/80 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#D73A2F]/30">
            <User className="h-8 w-8 text-[#D73A2F] transition-colors group-hover:text-[#FF6A2A]" />
          </div>
          <CardTitle className="text-base font-bold text-white">{name}</CardTitle>
          <Badge variant="secondary" className="mx-auto mt-1 bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/30 text-xs">
            {role}
          </Badge>
        </CardHeader>
        <CardContent className="relative text-center space-y-1 pt-0">
          <p className="text-xs text-gray-500">{department}</p>
          <a href={`mailto:${email}`} className="flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-[#D73A2F] transition-colors">
            <Mail className="h-3 w-3" />
            {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-[#D73A2F] transition-colors">
            <Phone className="h-3 w-3" />
            {phone}
          </a>
        </CardContent>
      </Card>
    </AnimateOnScroll>
  );
}

export default function HomePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* ============ HERO SECTION ============ */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep red/black background with fiery texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0000] to-[#1a0505]" />

        {/* Fiery radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D73A2F]/30 via-[#8B0000]/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D73A2F]/20 via-transparent to-transparent animate-pulse" />

        {/* Fire texture grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,58,47,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(215,58,47,.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Rising fire particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <FireParticle key={`fire-${i}`} index={i} />
          ))}
        </div>

        {/* Floating embers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <Ember key={`ember-${i}`} index={i} />
          ))}
        </div>

        {/* Bottom fire glow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D73A2F]/40 via-[#D73A2F]/10 to-transparent blur-3xl" />

        <div className="relative container mx-auto px-4 text-center pt-16">
          <AnimateOnScroll animation="fade-down" delay={0}>
            <Badge className="mb-6 bg-[#D73A2F]/30 text-[#D73A2F] backdrop-blur-sm border-[#D73A2F]/50 px-4 py-2 animate-ember">
              <Flame className="mr-2 h-4 w-4 animate-flicker" />
              <Calendar className="mr-2 h-4 w-4" />
              2026
            </Badge>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={200}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 animate-fire-glow">
              <span className="bg-gradient-to-r from-[#8B0000] via-[#D73A2F] via-[#FF6A2A] to-[#D4AF37] bg-clip-text text-transparent">
                ZENITH&apos;26
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="text-xl sm:text-2xl text-[#D73A2F] mb-2 tracking-wide font-medium">
              National Level Technical Symposium
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-lg text-gray-400 mb-8 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-[#D73A2F]" />
              JEPPIAAR ENGINEERING COLLEGE
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#8B0000] text-white text-lg px-8 py-6 transition-all duration-500 hover:from-[#D73A2F] hover:via-[#FF6A2A] hover:to-[#D73A2F] hover:scale-110 hover:shadow-xl hover:shadow-[#D73A2F]/50 border-0">
                <a href="#technical-events">
                  <Flame className="mr-2 h-5 w-5 animate-flicker" />
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#D73A2F]/50 text-[#D73A2F] hover:bg-[#D73A2F]/10 hover:border-[#D73A2F] text-lg px-8 py-6 transition-all duration-500 hover:scale-110">
                <a href="#contact">
                  Contact Us
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="block">
            <div className="w-6 h-10 border-2 border-[#D73A2F]/50 rounded-full flex justify-center hover:border-[#D73A2F] transition-colors">
              <div className="w-1 h-3 bg-[#D73A2F] rounded-full mt-2 animate-pulse" />
            </div>
          </a>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#0a0000] via-[#0a0a0a] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D73A2F]/15 via-transparent to-transparent" />
        {/* Subtle ember effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          {[...Array(10)].map((_, i) => (
            <Ember key={`about-ember-${i}`} index={i} />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/30">
                <Flame className="w-3 h-3 mr-1" />
                About
              </Badge>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome to <span className="bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#FF6A2A] bg-clip-text text-transparent">ZENITH&apos;26</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
              ZENITH&apos;26 is the flagship national-level technical symposium of Jeppiaar Engineering College.
              It brings together tech enthusiasts, innovators, and creative minds from across the country
              to compete, collaborate, and celebrate technology. With a diverse range of technical and
              non-technical events, ZENITH&apos;26 offers something for everyone.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============ TECHNICAL EVENTS SECTION ============ */}
      <section id="technical-events" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#D73A2F]/20 via-[#8B0000]/5 to-transparent" />
        {/* Fire accent at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#D73A2F]/10 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D73A2F]/40 to-[#8B0000]/30 ring-1 ring-[#D73A2F]/60 animate-ember">
                <Code className="h-10 w-10 text-[#D73A2F]" />
              </div>
              <Badge className="mb-4 bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/30">
                <Flame className="w-3 h-3 mr-1" />
                Technical
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcase your technical skills in coding, development, and innovation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technicalEvents.map((event, index) => (
              <EventCard key={index} {...event} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ NON-TECHNICAL EVENTS SECTION ============ */}
      <section id="non-technical-events" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D73A2F]/15 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6A2A]/30 to-[#D73A2F]/30 ring-1 ring-[#D73A2F]/50 animate-ember">
                <Gamepad2 className="h-10 w-10 text-[#FF6A2A]" />
              </div>
              <Badge className="mb-4 bg-[#FF6A2A]/20 text-[#FF6A2A] border-[#D73A2F]/30">Non-Technical</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Non-Technical Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Fun-filled events for everyone! Gaming, creative challenges, and more.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard key={index} {...event} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ STAFF COORDINATORS SECTION ============ */}
      <section id="staff-coordinators" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 to-[#D73A2F]/20 ring-1 ring-[#D4AF37]/50">
                <GraduationCap className="h-10 w-10 text-[#D4AF37]" />
              </div>
              <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">Faculty</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Staff Coordinators</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet our dedicated faculty members behind ZENITH&apos;26.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {staffCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT COORDINATORS SECTION ============ */}
      <section id="student-coordinators" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D73A2F]/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D73A2F]/40 to-[#8B0000]/30 ring-1 ring-[#D73A2F]/50 animate-ember">
                <Users className="h-10 w-10 text-[#D73A2F]" />
              </div>
              <Badge className="mb-4 bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/30">Students</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Student Coordinators</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The driving force behind ZENITH&apos;26.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#D73A2F]/20 via-transparent to-transparent" />
        {/* Fire glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#D73A2F]/15 to-transparent blur-2xl" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D73A2F]/40 to-[#8B0000]/30 ring-1 ring-[#D73A2F]/50 animate-ember">
                <Mail className="h-10 w-10 text-[#D73A2F]" />
              </div>
              <Badge className="mb-4 bg-[#D73A2F]/20 text-[#D73A2F] border-[#D73A2F]/30">
                <Flame className="w-3 h-3 mr-1" />
                Get in Touch
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions about ZENITH&apos;26? We&apos;re here to help!
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimateOnScroll animation="fade-right">
              <Card className="border-[#D73A2F]/20 bg-gradient-to-br from-[#0a0a0a] via-[#100505] to-black h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: "Jeppiaar Engineering College\nOMR, Chennai - 600119\nTamil Nadu, India" },
                    { icon: Mail, title: "Email", content: "zenith@jeppiaar.ac.in", link: "mailto:zenith@jeppiaar.ac.in" },
                    { icon: Phone, title: "Phone", content: "+91 98765 43210", link: "tel:+919876543210" },
                    { icon: Clock, title: "Working Hours", content: "Mon - Fri: 9AM - 5PM\nSat: 9AM - 1PM" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D73A2F]/20 transition-all duration-300 group-hover:bg-[#D73A2F]/30 group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-[#D73A2F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-gray-400 hover:text-[#D73A2F] transition-colors whitespace-pre-line">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll animation="fade-left">
              <Card className="border-[#D73A2F]/20 bg-gradient-to-br from-[#0a0a0a] via-[#100505] to-black">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
                      { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                      { id: "subject", label: "Subject", type: "text", placeholder: "Enter subject" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="block text-sm font-medium text-gray-400 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          className="w-full rounded-lg border border-[#D73A2F]/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-[#D73A2F] focus:outline-none focus:ring-1 focus:ring-[#D73A2F] transition-all duration-300"
                          placeholder={field.placeholder}
                          required
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-[#D73A2F]/30 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:border-[#D73A2F] focus:outline-none focus:ring-1 focus:ring-[#D73A2F] transition-all duration-300 resize-none"
                        placeholder="Type your message here..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#8B0000] via-[#D73A2F] to-[#8B0000] text-white transition-all duration-500 hover:from-[#D73A2F] hover:via-[#FF6A2A] hover:to-[#D73A2F] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#D73A2F]/40 border-0"
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
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
