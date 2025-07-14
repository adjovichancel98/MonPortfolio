import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import profileImg from "../../assets/photo_profil.png";
import { useDarkMode } from "./DarkModeContext";

const About = () => {
  const { darkMode } = useDarkMode();
  const [animatedText, setAnimatedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    "Je conçois des expériences numériques utiles.",
    "Je développe des applications performantes.",
    "J'intègre l'IA pour résoudre des problèmes réels.",
    "J'accompagne les entreprises dans leur transformation digitale.",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setAnimatedText(phrases[i]);
      setCurrentIndex(i);
      i = (i + 1) % phrases.length;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
      {/* Contenu principal */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header élégant */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Badge de présentation */}
            <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border transition-colors duration-500 ${darkMode
                ? 'bg-white/5 border-white/10 text-white/70'
                : 'bg-white border-gray-200 text-gray-600'
              }`}>
              <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-400/60' : 'bg-green-500'
                }`}>
                <div className={`w-full h-full rounded-full animate-pulse ${darkMode ? 'bg-green-400/40' : 'bg-green-500/40'
                  }`} />
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">Présentation</span>
            </div>

            {/* Titre principal */}
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
              }`}>
              À propos
              <br />
              <span className={`${darkMode ? 'text-white/40' : 'text-gray-400'}`}>de moi</span>
            </h2>
          </motion.div>
        </div>

        {/* Section principale redesignée */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Photo avec design ultra-minimaliste */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div
                className={`w-80 h-80 overflow-hidden transition-all duration-700 group-hover:-translate-y-2 ${darkMode
                    ? 'bg-white/[0.03] border border-white/[0.08]'
                    : 'bg-white/70 border border-gray-200/60'
                  }`}
                style={{
                  borderRadius: "32px",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  boxShadow: darkMode
                    ? "0 20px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                    : "0 20px 64px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Chancel Adjovi"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay minimaliste */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode
                    ? 'bg-gradient-to-t from-black/10 to-transparent'
                    : 'bg-gradient-to-t from-white/20 to-transparent'
                  }`} />
              </div>

              {/* Indicateur de statut */}
              <div className={`absolute top-6 right-6 w-4 h-4 rounded-full border-2 transition-all duration-500 ${darkMode
                  ? 'bg-green-400 border-white/20 shadow-lg shadow-green-400/50'
                  : 'bg-green-500 border-white shadow-md'
                }`}>
                <div className={`absolute inset-0 rounded-full animate-ping ${darkMode ? 'bg-green-400/60' : 'bg-green-500/60'
                  }`} />
              </div>
            </div>
          </motion.div>

          {/* Contenu textuel */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 1)}
            className="lg:col-span-3 space-y-8"
          >
            {/* Description principale */}
            <div
              className={`p-8 transition-all duration-500 ${darkMode
                  ? 'bg-white/[0.02] border border-white/[0.06]'
                  : 'bg-white/60 border border-gray-200/50'
                }`}
              style={{
                borderRadius: "24px",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
              }}
            >
              <p className={`text-lg leading-relaxed font-light transition-colors duration-500 ${darkMode ? 'text-white/85' : 'text-gray-700'
                }`}>
                Je suis Chancel Adjovi Agbogbo, ingénieur en intelligence artificielle et développeur full-stack.
                Je conçois des solutions numériques intelligentes en combinant IA, développement mobile (Flutter),
                développement web (React, Node.js) et transformation digitale. De l'analyse des besoins jusqu'au déploiement,
                j'interviens sur toutes les étapes pour créer des applications utiles, performantes et centrées sur l'humain
                — avec des technologies modernes et des approches concrètes.
              </p>
            </div>

            {/* Phrase animée élégante */}
            <div className="text-center lg:text-left">
              <motion.h3
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className={`text-2xl sm:text-3xl font-light leading-tight transition-colors duration-500 ${darkMode ? 'text-white/90' : 'text-gray-800'
                  }`}
              >
                {animatedText}
              </motion.h3>

              {/* Indicateurs de progression */}
              <div className="flex justify-center lg:justify-start gap-2 mt-4">
                {phrases.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentIndex
                        ? darkMode ? 'bg-white w-8' : 'bg-gray-800 w-8'
                        : darkMode ? 'bg-white/30' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Compétences redesignées */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className={`text-center text-lg font-light mb-12 tracking-wide ${darkMode ? 'text-white/60' : 'text-gray-600'
            }`}>
            Domaines d'expertise
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "📱", text: "Mobile Flutter", color: "from-blue-500 to-cyan-500" },
              { icon: "🌐", text: "React.js", color: "from-purple-500 to-pink-500" },
              { icon: "🧠", text: "IA & NLP", color: "from-indigo-500 to-blue-500" },
              { icon: "🛠️", text: "Node.js", color: "from-green-500 to-emerald-500" },
              { icon: "🔁", text: "Digital", color: "from-orange-500 to-red-500" },
              { icon: "📊", text: "Data", color: "from-teal-500 to-cyan-500" },
              { icon: "🚀", text: "Firebase", color: "from-violet-500 to-purple-500" },
              { icon: "🤝", text: "Consulting", color: "from-rose-500 to-pink-500" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`group relative p-6 text-center transition-all duration-300 cursor-pointer ${darkMode
                    ? 'bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04]'
                    : 'bg-white/60 border border-gray-200/50 hover:bg-white/80'
                  }`}
                style={{
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <p className={`text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-white/70 group-hover:text-white/90' : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                  {skill.text}
                </p>

                {/* Accent coloré au survol */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Décoration finale */}
        <div className="mt-20">
          <div className={`h-px ${darkMode
              ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
            }`} />
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");