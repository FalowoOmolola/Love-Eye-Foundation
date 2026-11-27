import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `font-medium motion-link ${isActive ? "text-blue-800" : ""}`;

  return (
    <header className="relative z-50 motion-rise">
      <div className="flex items-center justify-between bg-none px-0 py-6 sm:px-8 lg:px-1">
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="motion-card flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#10142f] shadow-sm md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          type="button"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/donate"
            className="shine-button motion-card hidden w-16 items-center justify-center rounded-lg bg-blue-900 px-6 py-3 text-white md:flex"
          >
            <ArrowUpRight />
          </Link>

          <Link to="/donate" className="shine-button motion-card rounded-lg bg-blue-900 px-6 py-3 text-white">
            Donate
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-50 grid gap-2 rounded-2xl border border-blue-100 bg-white p-4 shadow-2xl md:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 font-semibold transition ${
                    isActive ? "bg-blue-100 text-blue-800" : "text-[#10142f] hover:bg-blue-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
