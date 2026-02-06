import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface EventCardProps {
    name: string;
    description: string;
    category?: string;
    registrationLink?: string;
}

export function EventCard({ name, description, category, registrationLink = "#" }: EventCardProps) {
    return (
        <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <CardHeader className="relative">
                {category && (
                    <Badge variant="secondary" className="mb-2 w-fit bg-white/10 text-gray-300 hover:bg-white/20">
                        {category}
                    </Badge>
                )}
                <CardTitle className="text-xl font-bold text-white transition-colors group-hover:text-gray-100">
                    {name}
                </CardTitle>
            </CardHeader>

            <CardContent className="relative">
                <CardDescription className="text-gray-400 line-clamp-3">
                    {description}
                </CardDescription>
            </CardContent>

            <CardFooter className="relative">
                <Button
                    asChild
                    className="w-full bg-white text-black transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02]"
                >
                    <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                        Register Now
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
