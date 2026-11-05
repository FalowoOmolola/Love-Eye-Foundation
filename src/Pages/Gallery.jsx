import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import AboutImg from "../assets/AboutImg.jpeg";
import AboutImg2 from "../assets/AboutImg2.jpeg";
import HeroImg from "../assets/HeroImg.jpeg";

const gallery = [
  { image: AboutImg, title: "Vision outreach day", span: "md:col-span-2 md:row-span-2" },
  { image: AboutImg2, title: "Children support program", span: "" },
  { image: HeroImg, title: "Community care visit", span: "" },
  { image: AboutImg2, title: "Education support", span: "" },
  { image: AboutImg, title: "Volunteer action", span: "md:col-span-2" },
];

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.58, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <>
      <main className="motion-page bg-blue-50 px-5 text-[#10142f]">
        <Navbar />

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-7xl py-14 text-center lg:py-10"
        >
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

        <motion.section
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.08 }}
          className="mx-auto grid max-w-7xl auto-rows-[260px] gap-5 pb-20 md:grid-cols-4"
        >
          {gallery.map((item) => (
            <motion.article
              variants={card}
              whileHover={{ y: -8, rotate: 0.5, scale: 1.01 }}
              key={item.title}
              className={`motion-card group relative overflow-hidden rounded-xl bg-white shadow-sm ${item.span}`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10142f]/80 via-[#10142f]/10 to-transparent" />
              <h2 className="absolute bottom-5 left-5 right-5 text-xl font-bold text-white">{item.title}</h2>
            </motion.article>
          ))}
        </motion.section>

        <motion.section
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.12 }}
          className="mx-auto grid max-w-7xl gap-5 pb-20 sm:grid-cols-3"
        >
          {[
            ["500+", "Children helped"],
            ["1k+", "Volunteers joined"],
            ["300+", "Resources distributed"],
          ].map(([value, label]) => (
            <motion.div variants={card} key={label} className="stat-card motion-card rounded-lg bg-white p-7 text-center shadow-sm">
              <p className="text-4xl font-bold text-blue-700">{value}</p>
              <p className="mt-2 font-semibold text-slate-600">{label}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
