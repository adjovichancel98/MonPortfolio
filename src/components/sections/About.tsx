import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import profileImg from "../../assets/photo_profil.png";
import { useDarkMode } from "./DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    "Je conçois des expériences numériques utiles.",
    "Je développe des applications performantes.",
    "J'intègre l'IA pour résoudre des problèmes réels.",
    "J'accompagne les entreprises dans leur transformation digitale.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "5+", label: "Années", sublabel: "d'expérience" },
    { value: "30+", label: "Projets", sublabel: "réalisés" },
    { value: "100%", label: "Satisfaction", sublabel: "clients" },
  ];

  const skills = [
    { icon: "📱", label: "Mobile", tech: "Flutter", color: "from-blue-500 to-cyan-500" },
    { icon: "⚛️", label: "Frontend", tech: "React.js", color: "from-cyan-500 to-blue-500" },
    { icon: "🧠", label: "Intelligence", tech: "IA & ML", color: "from-purple-500 to-pink-500" },
    { icon: "⚡", label: "Backend", tech: "Node.js", color: "from-green-500 to-emerald-500" },
    { icon: "📊", label: "Data", tech: "Analytics", color: "from-orange-500 to-red-500" },
    { icon: "🎨", label: "Design", tech: "UI/UX", color: "from-pink-500 to-rose-500" },
  ];

  return (
    <section
      className={`relative w-full py-32 px-6 sm:px-12 overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-black' : 'bg-transparent'
        }`}
    >
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-blue-500/[0.03]' : 'bg-blue-500/[0.08]'
            }`}
        />
        <div
          className={`absolute bottom-1/4 -right-64 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-purple-500/[0.03]' : 'bg-purple-500/[0.08]'
            }`}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span
              className={`text-xs uppercase tracking-[0.3em] font-light ${darkMode ? 'text-white/40' : 'text-gray-500'
                }`}
            >
              À propos
            </span>
          </motion.div>

          {/* Title */}
          <h2
            className={`text-7xl md:text-8xl lg:text-9xl font-extralight tracking-tighter mb-6 ${darkMode ? 'text-white' : 'text-black'
              }`}
          >
            Qui suis-je
            <span className={darkMode ? 'text-white/20' : 'text-black/20'}>?</span>
          </h2>

          {/* Animated Subtitle */}
          <div className="h-16 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`text-xl md:text-2xl font-light max-w-3xl ${darkMode ? 'text-white/60' : 'text-gray-600'
                  }`}
              >
                {phrases[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {phrases.map((_, idx) => (
              <motion.div
                key={idx}
                className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex
                  ? darkMode
                    ? 'bg-white w-12'
                    : 'bg-black w-12'
                  : darkMode
                    ? 'bg-white/20 w-1'
                    : 'bg-gray-300 w-1'
                  }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <motion.div
                className="relative w-96 h-96 overflow-hidden"
                style={{
                  borderRadius: '200px 200px 40px 40px',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={profileImg}
                  alt="Chancel Adjovi"
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 ${darkMode
                    ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                    : 'bg-gradient-to-t from-white/40 via-transparent to-transparent'
                    }`}
                />

                {/* Status Badge */}
                <motion.div
                  className="absolute top-6 right-6 px-4 py-2 rounded-full backdrop-blur-xl"
                  style={{
                    background: darkMode
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.9)',
                    border: darkMode
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span
                      className={`text-xs font-medium ${darkMode ? 'text-white' : 'text-black'
                        }`}
                    >
                      Disponible
                    </span>
                  </div>
                </motion.div>

                {/* Name Badge Bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-xl"
                  style={{
                    background: darkMode
                      ? 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)'
                      : 'linear-gradient(to top, rgba(255, 255, 255, 0.9), transparent)',
                  }}
                >
                  <h3
                    className={`text-2xl font-light ${darkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    Chancel Adjovi
                  </h3>
                  <p
                    className={`text-sm ${darkMode ? 'text-white/60' : 'text-gray-600'
                      }`}
                  >
                    Ingénieur IA & Full-Stack
                  </p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className={`absolute -top-4 -right-4 w-32 h-32 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
                  } blur-3xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full ${darkMode ? 'bg-purple-500/10' : 'bg-purple-500/20'
                  } blur-3xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            {/* Bio */}
            <div>
              <h4
                className={`text-sm uppercase tracking-[0.3em] font-light mb-4 ${darkMode ? 'text-white/40' : 'text-gray-500'
                  }`}
              >
                Biographie
              </h4>
              <p
                className={`text-lg leading-relaxed font-light ${darkMode ? 'text-white/70' : 'text-gray-700'
                  }`}
              >
                Je suis{' '}
                <span className={darkMode ? 'text-white' : 'text-black'}>
                  Chancel Adjovi Agbogbo
                </span>
                , ingénieur en intelligence artificielle et développeur full-stack. Je
                conçois des solutions numériques intelligentes en combinant IA, développement
                mobile (Flutter), développement web (React, Node.js) et transformation digitale.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={`text-center p-6 rounded-3xl transition-all duration-300 ${darkMode
                    ? 'bg-white/[0.02] border border-white/10 hover:bg-white/[0.04]'
                    : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                    }`}
                >
                  <div
                    className={`text-4xl font-light mb-2 ${darkMode ? 'text-white' : 'text-black'
                      }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-xs font-medium ${darkMode ? 'text-white/60' : 'text-gray-600'
                      }`}
                  >
                    {stat.label}
                  </div>
                  <div
                    className={`text-xs ${darkMode ? 'text-white/40' : 'text-gray-500'
                      }`}
                  >
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium text-white relative overflow-hidden"
              style={{
                background: darkMode
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              }}
            >
              <span className="relative z-10">Travaillons ensemble</span>
              <motion.svg
                className="w-4 h-4 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
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
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.a>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3
              className={`text-sm uppercase tracking-[0.3em] font-light mb-4 ${darkMode ? 'text-white/40' : 'text-gray-500'
                }`}
            >
              Technologies & Compétences
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`relative p-6 text-center rounded-3xl transition-all duration-300 group cursor-pointer ${darkMode
                  ? 'bg-white/[0.02] border border-white/10 hover:bg-white/[0.04]'
                  : 'bg-gray-50 border border-gray-200 hover:bg-white'
                  }`}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <div
                  className={`text-sm font-medium mb-1 ${darkMode ? 'text-white/80' : 'text-gray-800'
                    }`}
                >
                  {skill.label}
                </div>
                <div
                  className={`text-xs ${darkMode ? 'text-white/50' : 'text-gray-500'
                    }`}
                >
                  {skill.tech}
                </div>

                {/* Gradient Bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${skill.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div
            className={`h-px ${darkMode
              ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
              }`}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");