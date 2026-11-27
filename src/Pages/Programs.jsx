import {
    Eye,
    Stethoscope,
    Users,
    HeartHandshake,
    School,
    ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const programs = [
    {
        icon: Eye,
        title: "Eye Screening",
        description:
            "Comprehensive eye examinations to detect vision problems and eye diseases early.",
    },
    {
        icon: Stethoscope,
        title: "Eye Treatment",
        description:
            "Access to professional treatment and care for various eye conditions.",
    },
    {
        icon: Users,
        title: "Community Outreach",
        description:
            "Taking quality eye care services directly to underserved communities.",
    },
    {
        icon: HeartHandshake,
        title: "Vision Support",
        description:
            "Providing support and assistance to individuals living with visual impairments.",
    },
    {
        icon: School,
        title: "Eye Health Education",
        description:
            "Educating communities on preventive eye care and healthy vision practices.",
    },
    {
        icon: ShieldCheck,
        title: "Preventive Care",
        description:
            "Promoting regular eye checkups and preventive measures for long-term eye health.",
    },
];

const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11 } },
};

const card = {
    hidden: { opacity: 0, y: 34, rotate: -1, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.58, ease: "easeOut" },
    },
};

export default function Programs() {
    return (
        <div className="motion-page bg-blue-50 min-h-screen px-5">
            <Navbar />
            <motion.section
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="mx-auto max-w-7xl py-14 text-center lg:py-10"
            >
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                    What we Do 
                </span>
                <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
                    Programs built around urgent needs and lasting support.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Accessible, affordable, and life-changing eye care services.
                </p>
            </motion.section>

            <section className="max-w-7xl mx-auto px-1 sm:px-6 py-15">
                <motion.div
                    variants={grid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.05 }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {programs.map((programs) => {
                        const Icon = programs.icon;

                        return (
                            <motion.article
                                variants={card}
                                whileHover={{ y: -10, rotate: 0.6, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                key={programs.title}
                                className="stat-card motion-card bg-white rounded-3xl p-8 shadow-sm"
                            >
                                <div className="stat-icon-bloom w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                                    <Icon className="text-blue-900" size={28} />
                                </div>

                                <h3 className="text-xl font-bold mb-3">
                                    {programs.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {programs.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-1 sm:px-6 pb-20"
            >
                <div className="motion-glow bg-white rounded-[2rem] p-10 md:p-16 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Restoring Sight, Restoring Hope
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-lg">
                        Quality eye care should be accessible to everyone.
                    </p>
                </div>
            </motion.section>
            <Footer />
        </div>
    );
};


