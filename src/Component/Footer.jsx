import { ArrowUpRight, Heart, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import AboutImg from "../assets/AboutImg.jpeg";
import AboutImg2 from "../assets/AboutImg2.jpeg";
import HeroImg from "../assets/HeroImg.jpeg";
import Logo from "../assets/Logo.png";

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
  { label: "Services", to: "/services" },
];

const utilityLinks = ["Faq", "Review", "Style Guide", "Licence", "Changelog"];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-white text-[#10142f] relative z-10">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl px-5 py-16 text-center lg:py-40"
      >
        <motion.img
          src={AboutImg}
          alt="Outreach support"
          animate={{ y: [0, -12, 0], rotate: [-3, 2, -3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-5 top-10 hidden h-28 w-28 rounded-xl object-cover shadow-lg lg:block"
        />
        <motion.img
          src={HeroImg}
          alt="Community program"
          animate={{ y: [0, 14, 0], rotate: [4, -2, 4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-8 top-16 hidden h-36 w-28 rounded-xl object-cover shadow-lg lg:block"
        />
        <motion.img
          src={AboutImg2}
          alt="Children receiving support"
          animate={{ y: [0, 10, 0], rotate: [-2, 3, -2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-24 hidden h-32 w-44 rounded-xl object-cover shadow-lg lg:block"
        />
        <motion.img
          src={AboutImg}
          alt="Volunteer outreach"
          animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-24 hidden h-28 w-44 rounded-xl object-cover shadow-lg lg:block"
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          animate={{ y: [0, -6, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700"
        >
          <Heart fill="currentColor" size={28} />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-6xl"
        >
          Make a Difference Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600"
        >
          Your support can change lives. With your donation, we can help those
          who need it the most and make a lasting impact in our communities.
        </motion.p>
        <Link
          to="/donate"
          className="shine-button motion-card mx-auto mt-8 flex w-fit items-center gap-2 rounded-xl bg-[#10142f] px-7 py-4 font-semibold text-white"
        >
          Donate Now <ArrowUpRight size={18} />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative mx-0 mt-10 rounded-t-[1rem] text-white pt-26"
      >
        {/*Background Image */}
        <img
          src={HeroImg}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-800/80" />

        {/* Logo */}
        <div
          className="
    absolute
    left-1/2
    z-50
    -translate-x-1/2
    top-[-60px]
    sm:top-[-50px]
    md:top-[60px]
    lg:top-[-70px]
  "
        >      <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="
    flex items-center justify-center
    h-30 w-30
    sm:h-28 sm:w-28
    md:h-36 md:w-36
    lg:h-40 lg:w-40
    rounded-full
    bg-white
    border-[6px] sm:border-[8px] lg:border-[10px]
    border-white
    shadow-xl
  "
        >
            <img
              src={Logo}
              alt="Love Eye Foundation"
              className="w-[70%] h-[70%] object-contain" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-0 sm:py-10 sm:px-8">

          <div className="flex flex-col items-center gap-6 text-center">

            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-semibold text-white/80">
              {mainLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="motion-link transition hover:text-white"
                >
                  {link.label}
                </NavLink>
              ))}

              <a href="#" className="motion-link transition hover:text-white">
                Donate
              </a>
            </nav>

            <form className="mt-2 flex w-full max-w-xl flex-col gap-3 rounded-xl bg-white p-2 sm:flex-row">
              <label className="flex flex-1 items-center gap-3 px-4 text-slate-500">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-3 text-[#10142f] outline-none"
                />
              </label>

              <button className="shine-button rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white">
                Subscribe
              </button>
            </form>

          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-white/60 lg:flex-row">
            <p>
              Designed for Love Eye Foundation. Powered by community support.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {utilityLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="motion-link transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </footer>
  );
}




