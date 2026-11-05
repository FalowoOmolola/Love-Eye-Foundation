import {
  ArrowUpRight,
  BookOpen,
  Droplets,
  Eye,
  GraduationCap,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const programs = [
  {
    icon: Eye,
    title: "Eye Care Outreach",
    text: "Community screenings, referrals, and early support for families.",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    text: "Books, school materials, tutoring, and mentorship.",
  },
  {
    icon: ShieldCheck,
    title: "Child Welfare",
    text: "Protection-focused care that supports safety and dignity.",
  },
  {
    icon: HeartPulse,
    title: "Health & Hygiene",
    text: "Simple health education, hygiene kits, and outreach.",
  },
  {
    icon: Droplets,
    title: "Clean Water Support",
    text: "Awareness and practical help for water and sanitation needs.",
  },
  {
    icon: BookOpen,
    title: "Literacy Programs",
    text: "Reading clubs and learning resources for classroom confidence.",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const card = {
  hidden: { opacity: 0, y: 34, rotate: 1, scale: 0.96 },
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
    <>
      <main className="motion-page bg-blue-50 px-5 text-[#10142f]">
        <Navbar />

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-7xl py-14 text-center lg:py-10"
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Our Programs
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Programs built around urgent needs and lasting support.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Eye care, education, and family welfare programs that meet people where they are.
          </p>
        </motion.section>

        <motion.section
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.05 }}
          className="mx-auto grid max-w-7xl gap-5 pb-20 md:grid-cols-2 lg:grid-cols-3"
        >
          {programs.map(({ icon: Icon, title, text }) => (
            <motion.article
              variants={card}
              whileHover={{ y: -10, rotate: -0.6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={title}
              className="stat-card motion-card rounded-lg bg-white p-7 shadow-sm"
            >
              <div className="stat-icon-bloom mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Icon size={26} />
              </div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
              <button className="mt-8 flex items-center gap-2 font-semibold text-blue-700">
                Learn More <ArrowUpRight size={17} />
              </button>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.28 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-7xl pb-20"
        >
          <div className="motion-glow grid gap-8 rounded-xl bg-[#10142f] p-7 text-white sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Partner with us to reach more families.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/70">
                Volunteers, donors, and community partners turn each program into practical support.
              </p>
            </div>
            <button className="shine-button motion-card flex w-fit items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-[#10142f] lg:justify-self-end">
              Contact Us <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}

