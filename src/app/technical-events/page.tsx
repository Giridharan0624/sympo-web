import { EventCard } from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

const technicalEvents = [
    {
        name: "Code Sprint",
        description: "A fast-paced competitive programming challenge where participants solve algorithmic problems within a time limit. Test your coding skills and problem-solving abilities.",
        category: "Programming",
        registrationLink: "#",
    },
    {
        name: "Hackathon",
        description: "24-hour hackathon where teams build innovative solutions to real-world problems. Showcase your creativity, teamwork, and technical prowess.",
        category: "Development",
        registrationLink: "#",
    },
    {
        name: "Paper Presentation",
        description: "Present your research papers on emerging technologies. Share your findings with peers and experts in the field of computer science and engineering.",
        category: "Research",
        registrationLink: "#",
    },
    {
        name: "Technical Quiz",
        description: "Test your knowledge in a thrilling quiz competition covering programming, tech history, current trends, and general computer science concepts.",
        category: "Quiz",
        registrationLink: "#",
    },
    {
        name: "Web Development",
        description: "Design and develop stunning websites within a given time frame. Show off your frontend and backend skills with creative web solutions.",
        category: "Development",
        registrationLink: "#",
    },
    {
        name: "Debugging Challenge",
        description: "Find and fix bugs in given code snippets. Race against time to debug more code than your competitors in this intense challenge.",
        category: "Programming",
        registrationLink: "#",
    },
    {
        name: "UI/UX Design",
        description: "Create intuitive and beautiful user interfaces for given problem statements. Demonstrate your design thinking and creativity.",
        category: "Design",
        registrationLink: "#",
    },
    {
        name: "Project Expo",
        description: "Showcase your innovative projects and prototypes. Present your ideas to a panel of judges and compete for the best project award.",
        category: "Innovation",
        registrationLink: "#",
    },
];

export default function TechnicalEventsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 ring-1 ring-blue-500/30">
                        <Code className="h-10 w-10 text-blue-400" />
                    </div>

                    <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/30">
                        Technical
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Technical Events
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Showcase your technical skills in coding, development, and innovation.
                        Compete with the best minds and prove your expertise.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {technicalEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                name={event.name}
                                description={event.description}
                                category={event.category}
                                registrationLink={event.registrationLink}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
