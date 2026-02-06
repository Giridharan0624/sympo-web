import { EventCard } from "@/components/event-card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2 } from "lucide-react";

const nonTechnicalEvents = [
    {
        name: "Gaming Tournament",
        description: "Battle it out in popular multiplayer games. Compete in teams or solo across various gaming titles and win exciting prizes.",
        category: "Gaming",
        registrationLink: "#",
    },
    {
        name: "Photography Contest",
        description: "Capture the essence of the symposium through your lens. Submit your best shots and let your creativity shine.",
        category: "Creative",
        registrationLink: "#",
    },
    {
        name: "Treasure Hunt",
        description: "Navigate through clues, solve puzzles, and race against other teams to find the hidden treasure across the campus.",
        category: "Adventure",
        registrationLink: "#",
    },
    {
        name: "Just a Minute (JAM)",
        description: "Speak on a random topic for 60 seconds without hesitation, deviation, or repetition. Test your quick thinking skills.",
        category: "Speaking",
        registrationLink: "#",
    },
    {
        name: "Meme Making",
        description: "Create the funniest and most creative memes on given topics. Let your humor and creativity take center stage.",
        category: "Creative",
        registrationLink: "#",
    },
    {
        name: "Dumb Charades",
        description: "Act out movie names, songs, or phrases without speaking. A classic game of fun and laughter with your team.",
        category: "Fun",
        registrationLink: "#",
    },
    {
        name: "Quiz Mania",
        description: "A general knowledge quiz covering movies, sports, current affairs, and pop culture. Test your general awareness.",
        category: "Quiz",
        registrationLink: "#",
    },
    {
        name: "Short Film Contest",
        description: "Create and submit your short films on given themes. Showcase your storytelling and filmmaking abilities.",
        category: "Creative",
        registrationLink: "#",
    },
];

export default function NonTechnicalEventsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 ring-1 ring-purple-500/30">
                        <Gamepad2 className="h-10 w-10 text-purple-400" />
                    </div>

                    <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/30">
                        Non-Technical
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Non-Technical Events
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Fun-filled events for everyone! From gaming to creative challenges,
                        there&apos;s something exciting waiting for you.
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {nonTechnicalEvents.map((event, index) => (
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
