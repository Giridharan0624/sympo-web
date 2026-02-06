import { CoordinatorCard } from "@/components/coordinator-card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const studentCoordinators = [
    {
        name: "Arun Kumar",
        department: "Computer Science & Engineering",
        role: "Overall Coordinator",
        email: "arun.k@student.jec.ac.in",
        phone: "+91 98765 12345",
    },
    {
        name: "Priya Venkatesh",
        department: "Information Technology",
        role: "Technical Head",
        email: "priya.v@student.jec.ac.in",
        phone: "+91 98765 12346",
    },
    {
        name: "Rahul Sharma",
        department: "Computer Science & Engineering",
        role: "Events Coordinator",
        email: "rahul.s@student.jec.ac.in",
        phone: "+91 98765 12347",
    },
    {
        name: "Sneha Reddy",
        department: "Electronics & Communication",
        role: "Registration Head",
        email: "sneha.r@student.jec.ac.in",
        phone: "+91 98765 12348",
    },
    {
        name: "Vikram Singh",
        department: "Mechanical Engineering",
        role: "Logistics Head",
        email: "vikram.s@student.jec.ac.in",
        phone: "+91 98765 12349",
    },
    {
        name: "Deepika M",
        department: "Computer Science & Engineering",
        role: "Marketing Head",
        email: "deepika.m@student.jec.ac.in",
        phone: "+91 98765 12350",
    },
    {
        name: "Karthik R",
        department: "Information Technology",
        role: "Hospitality Head",
        email: "karthik.r@student.jec.ac.in",
        phone: "+91 98765 12351",
    },
    {
        name: "Anjali Krishnan",
        department: "Electrical Engineering",
        role: "Sponsorship Head",
        email: "anjali.k@student.jec.ac.in",
        phone: "+91 98765 12352",
    },
];

export default function StudentCoordinatorsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 ring-1 ring-orange-500/30">
                        <Users className="h-10 w-10 text-orange-400" />
                    </div>

                    <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/30">
                        Students
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Student Coordinators
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The driving force behind GRYPHONIX. Meet the passionate students
                        who organize and manage every aspect of this grand event.
                    </p>
                </div>
            </section>

            {/* Coordinators Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {studentCoordinators.map((coordinator, index) => (
                            <CoordinatorCard
                                key={index}
                                name={coordinator.name}
                                department={coordinator.department}
                                role={coordinator.role}
                                email={coordinator.email}
                                phone={coordinator.phone}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
