import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, User } from "lucide-react";

interface CoordinatorCardProps {
    name: string;
    department: string;
    role: string;
    email?: string;
    phone?: string;
    image?: string;
}

export function CoordinatorCard({ name, department, role, email, phone }: CoordinatorCardProps) {
    return (
        <Card className="group relative overflow-hidden border-white/10 bg-gradient-to-br from-gray-900 to-black transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <CardHeader className="relative text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-700 to-gray-900 ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/20">
                    <User className="h-10 w-10 text-gray-400" />
                </div>

                <CardTitle className="text-lg font-bold text-white">
                    {name}
                </CardTitle>

                <Badge variant="secondary" className="mx-auto mt-2 bg-white/10 text-gray-300">
                    {role}
                </Badge>
            </CardHeader>

            <CardContent className="relative space-y-3 text-center">
                <p className="text-sm text-gray-400">{department}</p>

                <div className="flex flex-col gap-2">
                    {email && (
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            <Mail className="h-4 w-4" />
                            {email}
                        </a>
                    )}

                    {phone && (
                        <a
                            href={`tel:${phone}`}
                            className="flex items-center justify-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                        >
                            <Phone className="h-4 w-4" />
                            {phone}
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
