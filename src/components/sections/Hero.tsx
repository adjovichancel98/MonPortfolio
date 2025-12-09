import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect avec 4 roles
  const roles = [
    "Ingénieur IA",
    "Développeur Full-Stack",
    "Data Scientist",
    "Product Builder"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const currentRole = roles[currentRoleIndex];
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 40);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentRoleIndex]);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-black' : 'bg-white'
        }`}
    >
      {/* Gradient Orbs - Subtils */}
      {mounted && (
        <motion.div
          style={{ y }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div
            className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[200px] ${darkMode ? 'bg-blue-500/[0.02]' : 'bg-blue-500/[0.04]'
              }`}
          />
          <div
            className={`absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[200px] ${darkMode ? 'bg-purple-500/[0.015]' : 'bg-purple-500/[0.03]'
              }`}
          />
        </motion.div>
      )}

      {/* Grid Pattern Subtil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Navbar Ultra-Moderne Extraordinaire */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-6">
          <motion.div
            className={`relative backdrop-blur-2xl transition-all duration-500 overflow-hidden ${darkMode
                ? 'bg-black/40 border border-white/10'
                : 'bg-white/40 border border-gray-200/50'
              }`}
            style={{
              borderRadius: '100px',
              boxShadow: darkMode
                ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 py-3">

              {/* Logo avec Animation Gradient */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                        : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    }}
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                        '0 0 40px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(59, 130, 246, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-white font-bold text-sm relative z-10">CA</span>

                    {/* Animated Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Nav Links avec Hover Effects */}
              <div className="hidden md:flex items-center gap-2">
                {[
                  { label: 'Projets', href: '#projects', icon: '💼' },
                  { label: 'À propos', href: '#about', icon: '👨‍💻' },
                  { label: 'Contact', href: '#contact', icon: '📬' }
                ].map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 group ${darkMode
                        ? 'text-white/60 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    <span className="flex items-center gap-2 relative z-10">
                      <span className="text-sm">{item.icon}</span>
                      {item.label}
                    </span>

                    {/* Hover Background */}
                    <motion.div
                      className={`absolute inset-0 rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/5'
                        }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Active Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Right Section: Theme Toggle + CTA */}
              <div className="flex items-center gap-3">

                {/* Theme Toggle Ultra-Sophistiqué */}
                <motion.button
                  onClick={toggleDarkMode}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-11 h-11 rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))'
                      : 'linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(249, 115, 22, 0.2))',
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={darkMode ? 'dark' : 'light'}
                      initial={{ rotate: -180, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 180, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {darkMode ? (
                        <motion.svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </motion.svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Pulsing Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-orange-500'
                      }`}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: [0, 0.2, 0], scale: [1, 1.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>

                {/* CTA Button Gradient */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium text-white relative overflow-hidden"
                  style={{
                    background: darkMode
                      ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                      : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                    boxShadow: darkMode
                      ? '0 4px 20px rgba(139, 92, 246, 0.4)'
                      : '0 4px 20px rgba(124, 58, 237, 0.4)',
                  }}
                >
                  <span className="relative z-10">Discutons</span>
                  <motion.svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>

                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    }}
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`md:hidden w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-white/10' : 'bg-black/5'
                    }`}
                >
                  <svg
                    className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-black'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: darkMode
                  ? 'linear-gradient(90deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.3))'
                  : 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2), rgba(59,130,246,0.2))',
                backgroundSize: '200% 100%',
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full py-24">
          <div className="max-w-5xl">

            {/* Status Badge Sophistiqué */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-3">
                <motion.div
                  className="relative w-2 h-2"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-emerald-400" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <span className={`text-[9px] uppercase tracking-[0.3em] font-light ${darkMode ? 'text-white/40' : 'text-gray-500'
                  }`}>
                  Disponible pour nouveaux projets
                </span>
              </div>
            </motion.div>

            {/* Name - Ultra Clean */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <h1 className={`font-extralight tracking-tighter leading-[0.85] ${darkMode ? 'text-white' : 'text-black'
                }`}
                style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
              >
                Chancel
                <br />
                <span className={darkMode ? 'text-white/20' : 'text-black/20'}>
                  Adjovi
                </span>
              </h1>
            </motion.div>

            {/* Role avec Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-14"
            >
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-extralight ${darkMode ? 'text-white/70' : 'text-gray-700'
                  }`}>
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className={`text-5xl font-extralight ${darkMode ? 'text-white/30' : 'text-gray-400'
                    }`}
                >
                  |
                </motion.span>
              </div>

              {/* Progress Dots */}
              <div className="flex gap-3 mt-6">
                {roles.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="relative"
                    animate={{
                      scale: idx === currentRoleIndex ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`h-[2px] rounded-full transition-all duration-500 ${idx === currentRoleIndex
                        ? darkMode
                          ? 'bg-white w-12'
                          : 'bg-black w-12'
                        : darkMode
                          ? 'bg-white/10 w-2'
                          : 'bg-gray-200 w-2'
                        }`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className={`text-base sm:text-lg leading-relaxed font-light max-w-2xl mb-14 ${darkMode ? 'text-white/40' : 'text-gray-600'
                }`}
            >
              Je transforme des idées en{" "}
              <span className={darkMode ? 'text-white/70' : 'text-gray-900'}>
                produits digitaux
              </span>
              . Applications mobiles, web et solutions IA qui résolvent de vrais problèmes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative px-10 py-4 overflow-hidden transition-all duration-500 ${darkMode
                  ? 'bg-white text-black hover:bg-white/90'
                  : 'bg-black text-white hover:bg-black/90'
                  }`}
              >
                <span className="relative z-10 text-[11px] uppercase tracking-[0.25em] font-light flex items-center gap-3">
                  Voir mes projets
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`px-10 py-4 text-[11px] uppercase tracking-[0.25em] font-light transition-all duration-500 ${darkMode
                  ? 'text-white/60 hover:text-white border border-white/10 hover:border-white/30'
                  : 'text-black/60 hover:text-black border border-gray-200 hover:border-gray-400'
                  }`}
              >
                Me contacter
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex items-center gap-8"
            >
              <span className={`text-[9px] uppercase tracking-[0.3em] font-light ${darkMode ? 'text-white/20' : 'text-gray-400'
                }`}>
                Suivez-moi
              </span>
              <div className={`h-[1px] w-12 ${darkMode ? 'bg-white/10' : 'bg-gray-200'
                }`} />
              {[
                { icon: FaGithub, href: "https://github.com/adjovichancel98" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/chancel-adjovi" }
              ].map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-colors ${darkMode
                    ? 'text-white/30 hover:text-white'
                    : 'text-gray-400 hover:text-black'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* 3D Cube Element - Right Side */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block"
              style={{ perspective: '1200px' }}
            >
              <div className="relative w-96 h-96">
                {/* Rotating Circles Background */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 rounded-full ${darkMode ? 'border-white/3' : 'border-black/3'
                      }`}
                    style={{
                      borderWidth: '1px',
                      scale: 1 - i * 0.2,
                    }}
                    animate={{
                      rotate: i % 2 === 0 ? 360 : -360,
                    }}
                    transition={{
                      duration: 40 + i * 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}

                {/* 3D Cube Isométrique */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="relative w-20 h-20" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Face avant */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'translateZ(40px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    {/* Face arrière */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'translateZ(-40px) rotateY(180deg)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    {/* Face droite */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'rotateY(90deg) translateZ(40px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    {/* Face gauche */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'rotateY(-90deg) translateZ(40px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    {/* Face haut */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'rotateX(90deg) translateZ(40px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                    {/* Face bas */}
                    <div
                      className={`absolute w-20 h-20 ${darkMode ? 'bg-white/[0.03] border border-white/10' : 'bg-black/[0.03] border border-black/10'
                        }`}
                      style={{
                        transform: 'rotateX(-90deg) translateZ(40px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                </motion.div>

                {/* Particules flottantes autour */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  const radius = 110;
                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-white/20' : 'bg-black/20'
                        }`}
                      style={{
                        left: '50%',
                        top: '50%',
                        x: Math.cos((angle * Math.PI) / 180) * radius,
                        y: Math.sin((angle * Math.PI) / 180) * radius,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className={`text-[8px] uppercase tracking-[0.3em] font-light ${darkMode ? 'text-white/20' : 'text-gray-400'
            }`}>
            Scroll
          </span>
          <div className={`w-[1px] h-14 ${darkMode ? 'bg-white/10' : 'bg-gray-200'
            } relative overflow-hidden`}>
            <motion.div
              className={`absolute top-0 left-0 w-full h-8 ${darkMode ? 'bg-white/30' : 'bg-gray-500'
                }`}
              animate={{ y: [0, 28, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;