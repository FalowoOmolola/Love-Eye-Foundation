import { motion } from 'framer-motion';
import HeroImg from '../assets/HeroImg.jpeg';
import Navbar from './Navbar';
import Logo from '../assets/Logo.png'
import { Link} from 'react-router-dom';

const Hero = () => (
  <motion.div
    initial={{ scale: 1.2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="motion-page pb-20 bg-blue-50 min-h-screen sm:px-5 px-2 text-center max-w-full"
  >
    <Navbar />
    {/* CENTER FLOATING LOGO */}
    <div
      className="
    absolute
    left-1/2
    z-30
    -translate-x-1/2
    top-[50px]
    sm:top-[55px]
    md:top-[60px]
    lg:top-10
  "
    >      <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
      className="orbit-dot motion-glow flex items-center justify-center h-25 w-25
    sm:h-28 sm:w-28
    md:h-36 md:w-36
    lg:h-40 lg:w-40
    rounded-full
    bg-white
    border-[6px] sm:border-[8px] lg:border-[10px]
    border-blue-50
    shadow-xl
  "
    >
        <img
          src={Logo}
          alt="Love Eye Foundation"
          className="w-[70%] h-[70%] object-contain" />
      </motion.div>
    </div>

    <div className="relative min-h-[700px] h-[90vh] sm:h-[800px] w-full overflow-hidden rounded-[1rem] sm:rounded-[2rem]">

      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Eye Care Outreach"
        className="motion-drift absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/45 to-blue-800/20" />

      {/* Desktop Staircase Stats */}
      <div className="hidden lg:flex absolute top-16 right-30 z-20 flex-col gap-4">
        {[
          "1000+ Children Helped",
          "1000+ Materials Dispensed",
          "Long Term Eye Support  ",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`
          bg-white/10 backdrop-blur-md border border-white/20
          rounded-full px-5 py-3 text-white
          ${i === 1 ? "translate-x-6" : ""}
          ${i === 2 ? "translate-x-12" : ""}
        `}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-300" />
              <p className="text-sm">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start text-left px-5 pb-8 sm:px-8 sm:pb-12 lg:px-14 lg:pb-14">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <div className="inline-flex border border-white/30 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-white text-md sm:text-sm">
            Your Support Changes Lives
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]"
        >
          Together We Transform
          <br />
          Lives Through Eye Care
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
        >
          Join our mission to bring hope, sight restoration,
          outreach programs and accessible eye care services
          to communities that need them most.
        </motion.p>

        {/* Mobile Stats */}
        <div className="flex flex-col gap-2 mt-5 w-full lg:hidden">
          {[
            "1000+ Patients Helped",
            "1000+ Materials Dispensed",
            "Long Term Eye Support",
          ].map((item, i) => (
            <div
              key={i}
              className="w-fit bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                <p className="text-xs sm:text-sm">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-row gap-3 w-full sm:w-auto">

          <Link to="/services" className="motion-card w-auto bg-white text-black px-2 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold">
            Our Causes
          </Link>

          <Link to="/programs" className="motion-card w-auto border border-white text-white px-2 py-3 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold">
            Our Programs
          </Link>

        </div>

      </div>

    </div>
  </motion.div>
);

export default Hero;


