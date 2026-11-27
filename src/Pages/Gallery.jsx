import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import CurvedGallery from "../Component/CurvedGallery";
import AboutImg from "../assets/AboutImg.jpeg";
import AboutImg2 from "../assets/AboutImg2.jpeg";
import HeroImg from "../assets/HeroImg.jpeg";
import { motion } from "framer-motion";

const gallery = [
  { src: AboutImg, alt: "Vision outreach day" },
  { src: AboutImg2, alt: "Children support program" },
  { src: HeroImg, alt: "Community care visit" },
  { src: AboutImg2, alt: "Education support" },
  { src: AboutImg, alt: "Volunteer action" },
  { src: HeroImg, alt: "Family care visit" },
];

export default function Gallery() {
  return (
    <>
      <main className="motion-page bg-blue-50 px-5 text-[#10142f]">
        <Navbar />

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-7xl py-14 text-center lg:py-10">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Our Gallery
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
            Our work in action across care, learning, and outreach.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A glimpse into the people and programs behind our mission.
          </p>
        </motion.section>


        <div className="mx-auto max-w-7xl pb-14 sm:pb-20">
          <CurvedGallery images={gallery} speed={0.05} direction={1} />
        </div>

        <section className="mx-auto grid max-w-7xl gap-5 pb-20 sm:grid-cols-3">
          {[
            ["500+", "Patients helped"],
            ["1k+", "Materials Dispensed"],
            ["1k+", "Free treatment"],
          ].map(([value, label]) => (
            <div key={label} className="stat-card motion-card rounded-lg bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-700">{value}</p>
              <p className="mt-2 font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </section>

        <div className="pb-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900">
            Get involved <ArrowUpRight size={18} />
          </Link>
        </div>
      </main >
      <Footer />
    </>
  );
}
