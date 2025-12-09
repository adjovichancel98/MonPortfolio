import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";

type Principle = {
  number: string;
  title: string;
  description: string;
  keywords: string[];
  impact: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Excellence Technique",
    description: "Architecture scalable, code maintenable et best practices pour des applications robustes qui durent.",
    keywords: ["Clean Code", "Scalable", "Performance"],
    impact: "Maintenance -70%"
  },
  {
    number: "02",
    title: "Design Thinking",
    description: "Approche centrée utilisateur avec prototypage rapide et itérations continues basées sur les retours réels.",
    keywords: ["UX First", "Iterative", "User Research"],
    impact: "Adoption +85%"
  },
  {
    number: "03",
    title: "Livraison Continue",
    description: "Déploiements fréquents, communication transparente et feedback loops courts pour une valeur immédiate.",
    keywords: ["Agile", "CI/CD", "Transparent"],
    impact: "Time-to-Market -50%"
  },
  {
    number: "04",
    title: "Innovation Pragmatique",
    description: "Technologies modernes adoptées avec discernement quand elles apportent une réelle valeur ajoutée mesurable.",
    keywords: ["AI Ready", "Modern Stack", "ROI Focused"],
    impact: "Compétitivité +60%"
  },
];

const Feedbacks = () => {
  const { darkMode } = useDarkMode();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 sm:py-32 px-6 sm:px-12 transition-colors duration-700 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'
        }`}
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-emerald-500/[0.02]' : 'bg-emerald-500/[0.04]'
            }`}
        />
        <div
          className={`absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-blue-500/[0.02]' : 'bg-blue-500/[0.04]'
            }`}
        />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header - MÊME POSITION que les autres sections */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-white/20' : 'bg-black/20'
                        }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-[0.3em] font-medium ${darkMode ? 'text-white/40' : 'text-gray-400'
                    }`}
                >
                  Méthode & Process
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              className={`text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] mb-6 ${darkMode ? 'text-white' : 'text-black'
                }`}
            >
              Approche
              <br />
              <span className={darkMode ? 'text-white/30' : 'text-black/30'}>
                & Principes
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/40' : 'text-gray-500'
                }`}
            >
              Une méthodologie éprouvée qui allie excellence technique,
              design thinking et agilité pour des résultats mesurables.
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
            style={{ originX: 0.5 }}
          >
            <div
              className={`h-px ${darkMode
                  ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
                }`}
            />
          </motion.div>
        </div>

        {/* Process Flow - 3 Étapes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className={`text-xs uppercase tracking-[0.3em] mb-3 ${darkMode ? 'text-white/40' : 'text-gray-400'
              }`}>
              Process de Création
            </h3>
            <div className={`h-px w-16 mx-auto ${darkMode ? 'bg-white/10' : 'bg-gray-200'
              }`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Découvrir",
                description: "Analyse du contexte, benchmark concurrentiel et définition des objectifs mesurables avec les parties prenantes.",
                icon: "🔍",
                metrics: "Sprint 0"
              },
              {
                step: "02",
                title: "Concevoir",
                description: "Prototypage UX/UI, tests utilisateurs et itérations rapides jusqu'à validation du concept final.",
                icon: "✨",
                metrics: "1-2 semaines"
              },
              {
                step: "03",
                title: "Livrer",
                description: "Développement agile, déploiement continu et accompagnement post-lancement avec monitoring actif.",
                icon: "🚀",
                metrics: "Sprints 2-4"
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className={`p-8 transition-all duration-500 ${darkMode
                    ? 'hover:bg-white/[0.03]'
                    : 'hover:bg-gray-50'
                  }`}>
                  {/* Icon & Step */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                      <span className="text-2xl">{phase.icon}</span>
                    </div>
                    <span className={`text-xs font-medium tracking-[0.2em] uppercase ${darkMode ? 'text-white/30' : 'text-gray-400'
                      }`}>
                      Étape {phase.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-light mb-3 ${darkMode ? 'text-white' : 'text-black'
                    }`}>
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-white/50' : 'text-gray-600'
                    }`}>
                    {phase.description}
                  </p>

                  {/* Metrics Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] ${darkMode
                      ? 'bg-white/5 text-white/40'
                      : 'bg-gray-100 text-gray-500'
                    }`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {phase.metrics}
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    className={`mt-6 h-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'
                      }`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                    style={{ originX: 0 }}
                  />
                </div>

                {/* Connector Arrow (except last) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <motion.svg
                      className={`w-8 h-8 ${darkMode ? 'text-white/20' : 'text-gray-300'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Principles Grid - 4 Piliers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className={`text-xs uppercase tracking-[0.3em] mb-3 ${darkMode ? 'text-white/40' : 'text-gray-400'
              }`}>
              4 Piliers Fondamentaux
            </h3>
            <div className={`h-px w-16 mx-auto ${darkMode ? 'bg-white/10' : 'bg-gray-200'
              }`} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
              >
                <div className={`p-8 transition-all duration-500 h-full ${darkMode
                    ? 'hover:bg-white/[0.03]'
                    : 'hover:bg-gray-50'
                  }`}>
                  {/* Header: Number & Impact */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                      <span className={`text-3xl font-light ${darkMode ? 'text-white/60' : 'text-gray-600'
                        }`}>
                        {principle.number}
                      </span>
                    </div>

                    {/* Impact Badge */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === idx ? 1.05 : 1,
                        opacity: hoveredIndex === idx ? 1 : 0.7
                      }}
                      className={`px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-medium ${darkMode
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-emerald-50 text-emerald-600'
                        }`}
                    >
                      {principle.impact}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl sm:text-3xl font-light mb-4 transition-colors ${darkMode
                      ? 'text-white/90 group-hover:text-white'
                      : 'text-gray-900'
                    }`}>
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-white/50' : 'text-gray-600'
                    }`}>
                    {principle.description}
                  </p>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {principle.keywords.map((keyword, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 + i * 0.03 }}
                        viewport={{ once: true }}
                        className={`text-[9px] font-medium uppercase tracking-[0.2em] px-2.5 py-1.5 ${darkMode
                            ? 'bg-white/5 text-white/40'
                            : 'bg-gray-100 text-gray-500'
                          }`}
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress Line */}
                  <motion.div
                    className={`h-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'
                      }`}
                    animate={{
                      scaleX: hoveredIndex === idx ? 1 : 0.3,
                      originX: 0
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className={`p-8 sm:p-12 ${darkMode ? 'bg-white/[0.02]' : 'bg-gray-50'
            }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3+", label: "Années", sublabel: "Expérience" },
                { value: "15+", label: "Projets", sublabel: "Livrés" },
                { value: "100%", label: "Satisfaction", sublabel: "Clients" },
                { value: "∞", label: "Apprentissage", sublabel: "Continu" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`text-5xl font-light mb-2 ${darkMode ? 'text-white' : 'text-black'
                    }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-gray-700'
                    }`}>
                    {stat.label}
                  </div>
                  <div className={`text-[10px] uppercase tracking-[0.2em] ${darkMode ? 'text-white/40' : 'text-gray-400'
                    }`}>
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="mt-24"
          style={{ originX: 0.5 }}
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

export default Feedbacks;