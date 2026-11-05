import { Check, CheckCircle, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AboutImg from "../assets/AboutImg.jpeg";
import AboutImg2 from "../assets/AboutImg2.jpeg";
import MissionImg from "../assets/MissionImg.jpeg";
import VisionImg from "../assets/VisionImg.jpeg";

const stats = [
  { value: "500+", label: "Families Helped" },
  { value: "1k+", label: "Volunteers Engaged" },
  { value: "300+", label: "Books Distributed" },
];

const missionAndVision = [
  {
    title: "Our Mission",
    desc: "Our mission is to improve vision and eye health through sustainable eye care, outreach, education, and partnerships across Africa.",
    img: MissionImg,
    features: ["Free Eye Screening", "Community Outreach", "Partnership Across Africa"],
    side: "right",
  },
  {
    title: "Our Vision",
    desc: "Our vision is a world where quality eye care is accessible to every community across Africa.",
    img: VisionImg,
    features: ["Free Eye Screening", "Community Outreach", "Education & Awareness"],
    side: "right",
  },
];

const teamMembers = [
  { image: AboutImg2, name: "Dr. Adebayo Johnson", role: "Medical Director" },
  { image: AboutImg2, name: "Grace Williams", role: "Program Coordinator" },
  { image: AboutImg2, name: "Dr. Musa Ibrahim", role: "Lead Ophthalmologist" },
  { image: AboutImg2, name: "Sarah Okafor", role: "Outreach Manager" },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: "easeOut" } },
};

export default function About() {
  return (
    <>
      <main className="motion-page bg-blue-50 px-5 text-[#10142f]">
        <Navbar />

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto max-w-7xl py-14 lg:py-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div variants={sectionReveal}>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                About Love Eye Foundation
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Compassionate care for children, families, and communities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We make essential support easier to reach through eye care, learning support, and family welfare programs.
              </p>

              <motion.div variants={cardList} className="mt-8 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <motion.div variants={cardReveal} key={item.label} className="stat-card motion-card rounded-lg border border-slate-100 bg-slate-50 p-5">
                    <p className="text-3xl font-bold text-blue-700">{item.value}</p>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={cardList} className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
                {["Long-term support", "Transparent reporting", "Community-centered programs", "Practical support for families"].map((item) => (
                  <motion.div variants={cardReveal} key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={16} />
                    </span>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={cardList} className="grid gap-4 sm:grid-cols-[1fr_0.8fr]">
              <motion.img variants={cardReveal} src={AboutImg} alt="Community outreach" className="motion-drift h-96 w-full rounded-xl object-cover" />
              <div className="grid gap-4">
                <motion.img variants={cardReveal} src={AboutImg2} alt="Children receiving support" className="motion-drift-alt h-56 w-full rounded-xl object-cover" />
                <motion.div variants={cardReveal} className="motion-glow rounded-xl bg-[#10142f] p-6 text-white">
                  <p className="text-4xl font-bold">500+</p>
                  <p className="mt-2 text-white/70">children and families supported</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section className="mx-auto max-w-7xl px-2 pt-24 sm:px-6">
          {missionAndVision.map((about) => (
            <div key={about.title} className="mb-40 flex flex-col items-center gap-16 lg:flex-row">
              <motion.div
                initial={{ opacity: 0, x: about.side === "right" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.05, ease: "easeOut" }}
                className="w-full lg:w-1/2"
              >
                <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter md:text-4xl">
                  {about.title}
                </h2>
                <p className="mb-8 text-lg font-medium leading-relaxed text-slate-600">
                  {about.desc}
                </p>

                <div className="flex flex-col gap-y-4">
                  {about.features.map((feat, idx) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.12, duration: 0.55 }}
                      viewport={{ once: false }}
                      className="motion-card flex w-60 items-center gap-2 rounded-full bg-white py-3 pl-5 text-xs font-black uppercase tracking-tight text-slate-800"
                    >
                      <CheckCircle size={18} className="shrink-0 text-[#98D63D]" />
                      {feat}
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Link to="/services" className="shine-button motion-card mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-5 py-3 font-semibold text-white">
                    <ArrowUpRight />
                  </Link>
                  <Link to="/services" className="shine-button motion-card mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-5 py-3 font-semibold text-white">
                    View Our Services
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: about.side === "right" ? 100 : -100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 1.05, ease: "easeOut" }}
                className="group relative h-[300px] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl md:h-[450px] lg:w-1/2"
              >
                <div className="absolute inset-0 z-10 bg-[#98D63D]/10 transition-colors duration-700 group-hover:bg-transparent" />
                <motion.img src={about.img} alt={about.title} whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }} className="h-full w-full object-cover" />
              </motion.div>
            </div>
          ))}
        </section>

        <motion.section
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mx-auto grid max-w-7xl gap-8 pb-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <motion.div variants={cardReveal} className="stat-card motion-card rounded-xl bg-white p-7 shadow-sm">
            <Users className="text-amber-500" size={36} />
            <h2 className="mt-5 text-3xl font-bold">Why communities trust us</h2>
          </motion.div>
          <motion.div variants={cardList} className="grid gap-4 sm:grid-cols-2">
            {["We listen before creating programs.", "We track progress clearly.", "We work with local partners.", "We focus on practical help."].map((item) => (
              <motion.p variants={cardReveal} key={item} className="motion-card flex items-center gap-3 rounded-lg bg-white p-5 font-semibold shadow-sm">
                <Check className="shrink-0 text-emerald-600" size={20} />
                {item}
              </motion.p>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl pt-10 text-center"
        >
          <div className="my-15">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Volunteers
            </span>
            <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
              Meet Our Team.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Our volunteers and staff work passionately to create real impact.
            </p>
          </div>
        </motion.section>

        <section className="pb-10">
          <motion.div variants={cardList} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="mx-auto grid grid-cols-1 gap-6 py-10 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <motion.div variants={cardReveal} key={member.name} className="stat-card motion-card group overflow-hidden rounded-[1rem] bg-white shadow-sm">
                <div className="overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="bg-[#014D43] p-3">
                  <h3 className="text-white sm:text-xl text:sm font-semibold">{member.name}</h3>
                  <p className="text-white/80 sm:text-lg text:xs mt-2">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
