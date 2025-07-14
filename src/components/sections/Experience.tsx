import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { useDarkMode } from "./DarkModeContext";

const ExperienceItem = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const { darkMode } = useDarkMode();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex flex-col lg:flex-row ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-start gap-8 lg:gap-12 w-full group`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
    >
      {/* Timeline élégante */}
      <div className="flex flex-col items-center min-w-[120px] lg:min-w-[140px]">
        <div className={`text-sm font-light tracking-wide transition-colors duration-500 ${darkMode ? 'text-white/80 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-800'
          }`}>
          {experience.date}
        </div>
        <div className={`w-px h-24 mt-4 transition-all duration-500 ${darkMode ? 'bg-white/20 group-hover:bg-white/40' : 'bg-gray-300 group-hover:bg-gray-400'
          }`} />
        {/* Point de timeline */}
        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${darkMode
            ? 'bg-white/40 group-hover:bg-white/80 group-hover:shadow-lg group-hover:shadow-white/50'
            : 'bg-gray-400 group-hover:bg-gray-600 group-hover:shadow-md'
          }`} />
      </div>

      {/* Carte d'expérience redesignée */}
      <div
        className={`w-full lg:max-w-[75%] p-8 transition-all duration-700 ease-out group-hover:-translate-y-2 ${darkMode
            ? 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15'
            : 'bg-white/70 border border-gray-200/60 hover:bg-white hover:border-gray-300/80'
          }`}
        style={{
          borderRadius: "24px",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow: darkMode
            ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
            : "0 8px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* Glow effect subtil */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${darkMode
            ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
            : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'
          }`} style={{ borderRadius: "24px" }} />

        {/* Header avec icon */}
        <div className="flex items-start gap-6 mb-8 relative z-10">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${darkMode ? 'bg-white/10 shadow-lg' : 'bg-white shadow-md border border-gray-100'
            }`}>
            {/* Glow derrière l'icône */}
            <div className={`absolute inset-0 rounded-2xl blur-sm opacity-50 transition-opacity duration-500 ${darkMode ? 'bg-white group-hover:opacity-70' : 'bg-blue-100 group-hover:opacity-80'
              }`} />
            <img
              src={experience.icon}
              alt={experience.companyName}
              className="relative w-8 h-8 object-contain"
              style={{
                filter: darkMode ? "brightness(0) invert(1)" : "none",
              }}
            />
          </div>

          <div className="flex-1 pt-1">
            <h3 className={`text-2xl font-light leading-tight mb-2 transition-colors duration-500 tracking-tight ${darkMode ? 'text-white/95 group-hover:text-white' : 'text-gray-900 group-hover:text-gray-800'
              }`}>
              {experience.title}
            </h3>
            <p className={`text-base font-light transition-colors duration-500 ${darkMode ? 'text-white/60 group-hover:text-white/80' : 'text-gray-600 group-hover:text-gray-700'
              }`}>
              {experience.companyName}
            </p>
          </div>
        </div>

        {/* Separator line */}
        <div className={`w-full h-px mb-8 transition-all duration-500 ${darkMode
            ? 'bg-gradient-to-r from-white/10 via-white/20 to-white/10 group-hover:from-white/20 group-hover:via-white/40 group-hover:to-white/20'
            : 'bg-gradient-to-r from-gray-200/50 via-gray-300 to-gray-200/50 group-hover:from-gray-300 group-hover:via-gray-400 group-hover:to-gray-300'
          }`} />

        {/* Points d'expérience */}
        <div className="space-y-4 relative z-10">
          {experience.points.map((point: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-start gap-4 group/item"
            >
              <div className={`w-2 h-2 rounded-full mt-2.5 flex-shrink-0 transition-all duration-300 ${darkMode
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 group-hover:shadow-lg group-hover:shadow-blue-400/50'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 group-hover:shadow-md group-hover:shadow-blue-400/30'
                }`} />
              <p className={`text-base leading-relaxed font-light transition-colors duration-500 ${darkMode ? 'text-white/80 group-hover:text-white/95' : 'text-gray-700 group-hover:text-gray-800'
                }`}>
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
      {/* Fond subtil en mode clair uniquement */}
      {!darkMode && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-[url('/noise.svg')] opacity-[0.02] absolute inset-0" />
          <div className="bg-[url('/grid.svg')] bg-center opacity-[0.03] absolute inset-0" />
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent absolute inset-0" />
        </div>
      )}

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header élégant */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Badge de statut */}
            <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border transition-colors duration-500 ${darkMode
                ? 'bg-white/5 border-white/10 text-white/70'
                : 'bg-white border-gray-200 text-gray-600'
              }`}>
              <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400/60' : 'bg-blue-500'
                }`}>
                <div className={`w-full h-full rounded-full animate-pulse ${darkMode ? 'bg-blue-400/40' : 'bg-blue-500/40'
                  }`} />
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">Mon Parcours</span>
            </div>

            {/* Titre principal */}
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
              }`}>
              Expériences
              <br />
              <span className={`${darkMode ? 'text-white/40' : 'text-gray-400'}`}>professionnelles</span>
            </h2>

            {/* Sous-titre */}
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
              Un aperçu de mon parcours professionnel et des projets
              qui ont façonné mon expertise.
            </p>
          </motion.div>
        </div>

        {/* Timeline des expériences */}
        <div className="space-y-20 lg:space-y-24">
          {experiences.map((exp, idx) => (
            <ExperienceItem key={idx} experience={exp} index={idx} />
          ))}
        </div>

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

export default SectionWrapper(Experience, "work");