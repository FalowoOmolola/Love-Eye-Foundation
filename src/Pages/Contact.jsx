import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const contactItems = [
  { icon: MapPin, title: "Visit us", text: "Community outreach center, Lagos, Nigeria" },
  { icon: Phone, title: "Call us", text: "+234 800 000 0000" },
  { icon: Mail, title: "Email us", text: "hello@Loveeye.org" },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <>
      <main className="motion-page bg-blue-50 px-5 text-[#10142f]">
        <Navbar />

        <motion.section
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-10"
        >
          <div>
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Contact Us
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              Let us talk about how to help more people together.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach out for donations, volunteering, partnerships, or questions.
            </p>

            <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} className="mt-8 grid gap-4">
              {contactItems.map(({ icon: Icon, title, text }) => (
                <motion.div variants={card} key={title} className="stat-card motion-card flex gap-4 rounded-lg bg-white p-5 shadow-sm">
                  <span className="stat-icon-bloom flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="mt-1 text-slate-600">{text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 34, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="motion-card rounded-xl bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 font-semibold">
                First Name
                <input className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" placeholder="Your first name" />
              </label>
              <label className="grid gap-2 font-semibold">
                Last Name
                <input className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" placeholder="Your last name" />
              </label>
            </div>
            <label className="mt-5 grid gap-2 font-semibold">
              Email
              <input type="email" className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" placeholder="you@example.com" />
            </label>
            <label className="mt-5 grid gap-2 font-semibold">
              Interest
              <select className="rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500">
                <option>Donation</option>
                <option>Volunteering</option>
                <option>Partnership</option>
                <option>Program support</option>
              </select>
            </label>
            <label className="mt-5 grid gap-2 font-semibold">
              Message
              <textarea className="min-h-40 rounded-lg border border-slate-200 px-4 py-3 font-normal outline-none focus:border-blue-500" placeholder="Tell us how we can help" />
            </label>
            <button className="shine-button motion-card mt-6 flex items-center gap-3 rounded-xl bg-[#10142f] px-7 py-4 font-semibold text-white">
              Send Message <ArrowUpRight size={18} />
            </button>
          </motion.form>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
