import { CoordinatorCard } from "@/components/coordinator-card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const staffCoordinators = [
    {
        name: "Dr. Sarah Johnson",
        department: "Computer Science & Engineering",
        role: "Head Coordinator",
        email: "sarah.johnson@jeppiaar.ac.in",
        phone: "+91 98765 43210",
    },
    {
        name: "Prof. Rajesh Kumar",
        department: "Information Technology",
        role: "Technical Lead",
        email: "rajesh.kumar@jeppiaar.ac.in",
        phone: "+91 98765 43211",
    },
    {
        name: "Dr. Priya Sharma",
        department: "Electronics & Communication",
        role: "Event Coordinator",
        email: "priya.sharma@jeppiaar.ac.in",
        phone: "+91 98765 43212",
    },
    {
        name: "Prof. Michael David",
        department: "Mechanical Engineering",
        role: "Logistics Coordinator",
        email: "michael.david@jeppiaar.ac.in",
        phone: "+91 98765 43213",
    },
    {
        name: "Dr. Anitha Rajan",
        department: "Electrical Engineering",
        role: "Finance Coordinator",
        email: "anitha.rajan@jeppiaar.ac.in",
        phone: "+91 98765 43214",
    },
    {
        name: "Prof. Venkatesh M",
        department: "Computer Science & Engineering",
        role: "Registration Coordinator",
        email: "venkatesh.m@jeppiaar.ac.in",
        phone: "+91 98765 43215",
    },
];

export default function StaffCoordinatorsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

                <div className="relative container mx-auto px-4 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 ring-1 ring-emerald-500/30">
                        <GraduationCap className="h-10 w-10 text-emerald-400" />
                    </div>

                    <Badge className="mb-4 bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                        Faculty
                    </Badge>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
                        Staff Coordinators
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Meet our dedicated faculty members who work tirelessly to make
                        GRYPHONIX a grand success every year.
                    </p>
                </div>
            </section>

            {/* Coordinators Grid */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {staffCoordinators.map((coordinator, index) => (
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
