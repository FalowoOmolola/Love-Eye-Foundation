import {
  ArrowUpRight,
  Check,
  Eye,
  Stethoscope,
  GraduationCap,
  HandHeart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import AboutImg from "../assets/AboutImg.jpeg";
import AboutImg2 from "../assets/AboutImg2.jpeg";
import HeroImg from "../assets/HeroImg.jpeg";

const stats = [
  { value: "500+", label: "Families Helped" },
  { value: "1k+", label: "Volunteers Engaged" },
  { value: "300+", label: "Free Treatments" },
];

const programs = [
  {
    icon: Eye,
    title: "Vision Outreach",
    text: "Free eye checks, referrals, and early support for families.",
    tone: "bg-blue-100 text-blue-700",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    text: "School materials and mentoring for young learners.",
    tone: "bg-amber-100 text-amber-700",
  },
  {
    icon: ShieldCheck,
    title: "Child Welfare",
    text: "Community-led care focused on dignity and safety.",
    tone: "bg-emerald-100 text-emerald-700",
  },
];

const causes = [
  {
    icon: Eye,
    title: "Eye Screening",
    text: "Early checks for vision problems and eye disease.",
  },
  {
    icon: Stethoscope,
    title: "Eye Treatment",
    text: "Access to professional care for common eye conditions.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    text: "Bringing care directly to underserved communities.",
  },
];

const workImages = [
  { image: AboutImg, title: "Vision outreach day" },
  { image: AboutImg2, title: "Children support program" },
  { image: HeroImg, title: "Community care visit" },
  { image: AboutImg2, title: "Education support" },
  { image: AboutImg, title: "Volunteer action" },
  { image: HeroImg, title: "Family care visit" },
];

const MotionNavLink = motion(NavLink);

const section = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const cardList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function HomeSections() {
  return (
    <main className="motion-page bg-blue-50 text-[#071374]">
      <motion.section
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="pb-16 lg:pb-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[1rem] bg-white p-6 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900">
              Who we are
            </span>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Helping communities through care that reaches home.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We support children and families through eye care, education, and practical community resources.
            </p>

            <motion.div variants={cardList} initial="hidden" whileInView="show" viewport={{ once: false }} className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <motion.div variants={card} key={item.label} className="stat-card motion-card rounded-lg border border-slate-100 bg-slate-50 p-5">
                  <p className="text-3xl font-bold text-blue-700">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2">
              {["Long-term support", "Transparent reporting", "Community-centered programs", "Practical help for families"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check size={16} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="shine-button motion-card mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-7 py-4 font-semibold text-white">
              More About Us <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid min-h-[420px] gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <img src={AboutImg} alt="Foundation outreach support" className="motion-drift h-full min-h-72 w-full rounded-xl object-cover" />
            <div className="flex flex-col gap-4">
              <img src={AboutImg2} alt="Children receiving community care" className="motion-drift-alt h-64 w-full rounded-xl object-cover sm:h-full" />
              <div className="motion-glow rounded-xl bg-[#10142f] p-6 text-white">
                <HandHeart className="mb-6 text-amber-300" size={34} />
                <p className="text-2xl font-bold">Every gift becomes real help.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: false }} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-900">Programs</span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
                Education, health, and protection for all.
              </h2>
            </div>
            <Link to="/programs" className="shine-button motion-card flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-6 py-4 font-semibold text-white">
              See All Programs <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div variants={cardList} initial="hidden" whileInView="show" viewport={{ once: false }} className="mt-10 grid gap-5 lg:grid-cols-3">
            {programs.map(({ icon: Icon, title, text, tone }) => (
              <motion.article variants={card} key={title} className="stat-card motion-card rounded-lg border border-slate-100 bg-white p-7 shadow-sm">
                <div className={`stat-icon-bloom mb-8 flex h-14 w-14 items-center justify-center rounded-xl ${tone}`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-700">
                  Learn More <ArrowUpRight size={17} />
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={section} initial="hidden" whileInView="show" viewport={{ once: false }} className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">Our Causes</span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
                Clear goals for a better tomorrow.
              </h2>
            </div>
            <Link to="/services" className="motion-card flex w-fit items-center gap-2 rounded-xl border border-slate-200 px-6 py-4 font-semibold">
              See All Causes <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div variants={cardList} initial="hidden" whileInView="show" viewport={{ once: false }} className="mt-10 grid gap-5 lg:grid-cols-3">
            {causes.map(({ icon: Icon, title, text }) => (
              <motion.article variants={card} key={title} className="stat-card motion-card rounded-lg bg-blue-50 p-6">
                <div className="stat-icon-bloom mb-7 flex h-52 items-center justify-center rounded-lg bg-white">
                  <Icon className="text-blue-700" size={70} strokeWidth={1.4} />
                </div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#10142f] py-5 text-white">
        <div className="flex w-max animate-[scroll_28s_linear_infinite] gap-8 whitespace-nowrap text-2xl font-bold sm:text-4xl">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="flex items-center gap-8">
              Donate <HandHeart className="text-amber-300" /> Support Families <Users className="text-emerald-300" />
            </span>
          ))}
        </div>
      </section>

      <motion.section variants={section} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className="bg-blue-50 px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Our Gallery
              </span>
              <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">Our work in action</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                Real moments from outreach, education support, and community care programs.
              </p>
            </div>
            <MotionNavLink to="/gallery" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} className="shine-button motion-card flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-6 py-4 font-semibold text-white">
              Explore More <ArrowUpRight size={18} />
            </MotionNavLink>
          </div>

          <div className="mt-10 overflow-hidden">
            <div className="flex w-max gap-5 animate-[marquee-left_38s_linear_infinite] hover:[animation-play-state:paused]">
              {[...workImages, ...workImages].map((item, index) => (
                <MotionNavLink key={`${item.title}-top-${index}`} to="/gallery" whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }} transition={{ type: "spring", stiffness: 260, damping: 18 }} className="group relative h-60 w-80 shrink-0 overflow-hidden rounded-xl bg-blue-50 shadow-sm sm:w-96">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10142f]/80 via-[#10142f]/10 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 text-xl font-bold text-white">{item.title}</h3>
                </MotionNavLink>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}


