"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import {
  ArrowRight, Code, Gamepad2, Users, Trophy, Calendar, MapPin,
  Mail, Phone, Clock, Send, CheckCircle, ExternalLink, User, GraduationCap
} from "lucide-react";

// Data
const technicalEvents = [
  { name: "Code Sprint", description: "Fast-paced competitive programming challenge with algorithmic problems.", category: "Programming" },
  { name: "Hackathon", description: "24-hour hackathon building innovative solutions to real-world problems.", category: "Development" },
  { name: "Paper Presentation", description: "Present research papers on emerging technologies.", category: "Research" },
  { name: "Technical Quiz", description: "Test knowledge in programming, tech history, and CS concepts.", category: "Quiz" },
  { name: "Web Development", description: "Design and develop stunning websites within a time frame.", category: "Development" },
  { name: "Debugging Challenge", description: "Find and fix bugs in code snippets racing against time.", category: "Programming" },
  { name: "UI/UX Design", description: "Create intuitive and beautiful user interfaces.", category: "Design" },
  { name: "Project Expo", description: "Showcase innovative projects and prototypes to judges.", category: "Innovation" },
];

const nonTechnicalEvents = [
  { name: "Gaming Tournament", description: "Battle in popular multiplayer games for exciting prizes.", category: "Gaming" },
  { name: "Photography Contest", description: "Capture the symposium through your lens.", category: "Creative" },
  { name: "Treasure Hunt", description: "Navigate clues and puzzles to find hidden treasure.", category: "Adventure" },
  { name: "Just a Minute (JAM)", description: "Speak on random topics for 60 seconds.", category: "Speaking" },
  { name: "Meme Making", description: "Create the funniest memes on given topics.", category: "Creative" },
  { name: "Dumb Charades", description: "Act out movies and phrases without speaking.", category: "Fun" },
  { name: "Quiz Mania", description: "General knowledge quiz on movies, sports, and pop culture.", category: "Quiz" },
  { name: "Short Film Contest", description: "Create short films showcasing storytelling abilities.", category: "Creative" },
];

const staffCoordinators = [
  { name: "Dr. Sarah Johnson", department: "CSE", role: "Head Coordinator", email: "sarah.johnson@jec.ac.in", phone: "+91 98765 43210" },
  { name: "Prof. Rajesh Kumar", department: "IT", role: "Technical Lead", email: "rajesh.kumar@jec.ac.in", phone: "+91 98765 43211" },
  { name: "Dr. Priya Sharma", department: "ECE", role: "Event Coordinator", email: "priya.sharma@jec.ac.in", phone: "+91 98765 43212" },
  { name: "Prof. Michael David", department: "MECH", role: "Logistics Coordinator", email: "michael.david@jec.ac.in", phone: "+91 98765 43213" },
];

const studentCoordinators = [
  { name: "Arun Kumar", department: "CSE", role: "Overall Coordinator", email: "arun.k@student.jec.ac.in", phone: "+91 98765 12345" },
  { name: "Priya Venkatesh", department: "IT", role: "Technical Head", email: "priya.v@student.jec.ac.in", phone: "+91 98765 12346" },
  { name: "Rahul Sharma", department: "CSE", role: "Events Coordinator", email: "rahul.s@student.jec.ac.in", phone: "+91 98765 12347" },
  { name: "Sneha Reddy", department: "ECE", role: "Registration Head", email: "sneha.r@student.jec.ac.in", phone: "+91 98765 12348" },
  { name: "Vikram Singh", department: "MECH", role: "Logistics Head", email: "vikram.s@student.jec.ac.in", phone: "+91 98765 12349" },
  { name: "Deepika M", department: "CSE", role: "Marketing Head", email: "deepika.m@student.jec.ac.in", phone: "+91 98765 12350" },
];

// Event Card Component
function EventCard({ name, description, category, delay = 0 }: { name: string; description: string; category: string; delay?: number }) {
  return (
    <AnimateOnScroll animation="fade-up" delay={delay}>
      <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-gray-900 to-black transition-all duration-500 hover:border-white/30 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-2 h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardHeader className="relative">
          <Badge variant="secondary" className="mb-2 w-fit bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
            {category}
          </Badge>
          <CardTitle className="text-lg font-bold text-white transition-colors group-hover:text-gray-100">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <CardDescription className="text-gray-400 text-sm">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="relative">
          <Button className="w-full bg-white text-black transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] group-hover:shadow-lg">
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
      <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-gray-900 to-black transition-all duration-500 hover:border-white/30 hover:shadow-xl hover:shadow-white/5 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardHeader className="relative text-center pb-2">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 ring-2 ring-white/10 transition-all duration-500 group-hover:ring-white/30 group-hover:scale-110">
            <User className="h-8 w-8 text-gray-400 transition-colors group-hover:text-white" />
          </div>
          <CardTitle className="text-base font-bold text-white">{name}</CardTitle>
          <Badge variant="secondary" className="mx-auto mt-1 bg-white/10 text-gray-300 text-xs">
            {role}
          </Badge>
        </CardHeader>
        <CardContent className="relative text-center space-y-1 pt-0">
          <p className="text-xs text-gray-500">{department}</p>
          <a href={`mailto:${email}`} className="flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
            <Mail className="h-3 w-3" />
            {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-white transition-colors">
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
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/30 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 text-center pt-16">
          <AnimateOnScroll animation="fade-down" delay={0}>
            <Badge className="mb-6 bg-white/10 text-gray-300 backdrop-blur-sm border-white/20 px-4 py-2 animate-pulse">
              <Calendar className="mr-2 h-4 w-4" />
              Coming Soon 2026
            </Badge>
          </AnimateOnScroll>

          <AnimateOnScroll animation="zoom-in" delay={200}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-4 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text">
              GRYPHONIX
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <p className="text-xl sm:text-2xl text-gray-400 mb-2 tracking-wide">
              National Level Technical Symposium
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-lg text-gray-500 mb-8 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              JEPPIAAR ENGINEERING COLLEGE
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-white/20">
                <a href="#technical-events">
                  Explore Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 transition-all duration-500 hover:scale-110">
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
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
            </div>
          </a>
        </div>
      </section>

      {/* ============ ABOUT SECTION ============ */}
      <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-gray-300">About</Badge>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome to GRYPHONIX
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
              GRYPHONIX is the flagship national-level technical symposium of Jeppiaar Engineering College.
              It brings together tech enthusiasts, innovators, and creative minds from across the country
              to compete, collaborate, and celebrate technology. With a diverse range of technical and
              non-technical events, GRYPHONIX offers something for everyone.
            </p>
          </AnimateOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "20+", label: "Events", icon: Trophy },
              { value: "1000+", label: "Participants", icon: Users },
              { value: "50+", label: "Colleges", icon: GraduationCap },
              { value: "₹1L+", label: "Prize Pool", icon: Trophy },
            ].map((stat, index) => (
              <AnimateOnScroll key={index} animation="zoom-in" delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-gray-400" />
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNICAL EVENTS SECTION ============ */}
      <section id="technical-events" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 ring-1 ring-blue-500/30">
                <Code className="h-10 w-10 text-blue-400" />
              </div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/30">Technical</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Showcase your technical skills in coding, development, and innovation.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technicalEvents.map((event, index) => (
              <EventCard key={index} {...event} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ NON-TECHNICAL EVENTS SECTION ============ */}
      <section id="non-technical-events" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 ring-1 ring-purple-500/30">
                <Gamepad2 className="h-10 w-10 text-purple-400" />
              </div>
              <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/30">Non-Technical</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Non-Technical Events</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Fun-filled events for everyone! Gaming, creative challenges, and more.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nonTechnicalEvents.map((event, index) => (
              <EventCard key={index} {...event} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ STAFF COORDINATORS SECTION ============ */}
      <section id="staff-coordinators" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/15 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 ring-1 ring-emerald-500/30">
                <GraduationCap className="h-10 w-10 text-emerald-400" />
              </div>
              <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/30">Faculty</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Staff Coordinators</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet our dedicated faculty members behind GRYPHONIX.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {staffCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} delay={index * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT COORDINATORS SECTION ============ */}
      <section id="student-coordinators" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/15 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 ring-1 ring-orange-500/30">
                <Users className="h-10 w-10 text-orange-400" />
              </div>
              <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/30">Students</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Student Coordinators</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The driving force behind GRYPHONIX.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {studentCoordinators.map((coordinator, index) => (
              <CoordinatorCard key={index} {...coordinator} delay={index * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 ring-1 ring-cyan-500/30">
                <Mail className="h-10 w-10 text-cyan-400" />
              </div>
              <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/30">Get in Touch</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions about GRYPHONIX? We&apos;re here to help!
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimateOnScroll animation="fade-right">
              <Card className="border-white/10 bg-gradient-to-br from-gray-900 to-black h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", content: "Jeppiaar Engineering College\nOMR, Chennai - 600119\nTamil Nadu, India" },
                    { icon: Mail, title: "Email", content: "gryphonix@jeppiaar.ac.in", link: "mailto:gryphonix@jeppiaar.ac.in" },
                    { icon: Phone, title: "Phone", content: "+91 98765 43210", link: "tel:+919876543210" },
                    { icon: Clock, title: "Working Hours", content: "Mon - Fri: 9AM - 5PM\nSat: 9AM - 1PM" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} className="text-gray-400 hover:text-white transition-colors whitespace-pre-line">
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
              <Card className="border-white/10 bg-gradient-to-br from-gray-900 to-black">
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
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
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
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                        placeholder="Type your message here..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
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
