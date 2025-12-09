import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { useDarkMode } from "./DarkModeContext";

const ExperienceCard = ({
  experience,
  index,
  isLast
}: {
  experience: any;
  index: number;
  isLast: boolean;
}) => {
  const { darkMode } = useDarkMode();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="relative mb-24 last:mb-0"
    >
      {/* Vertical Line Connector (sauf pour le dernier) */}
      {!isLast && (
        <div
          className={`absolute left-6 top-0 bottom-0 w-[1px] translate-y-full ${darkMode ? "bg-white/5" : "bg-gray-200"
            }`}
          style={{ height: "100px" }}
        />
      )}

      <div className="flex gap-8">
        {/* Timeline Indicator */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Outer Ring */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${darkMode
                ? "bg-white/5 ring-1 ring-white/10"
                : "bg-gray-50 ring-1 ring-gray-200"
                }`}
            >
              {/* Inner Dot with Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-4 h-4 rounded-full ${index === 0
                  ? "bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.5)]"
                  : index === 1
                    ? "bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.5)]"
                    : index === 2
                      ? "bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.5)]"
                      : "bg-orange-400 shadow-[0_0_20px_rgba(251,146,60,0.5)]"
                  }`}
              />
            </div>

            {/* Year Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="absolute -left-2 top-14 whitespace-nowrap"
            >
              <div
                className={`text-[10px] uppercase tracking-[0.25em] font-medium ${darkMode ? "text-white/30" : "text-gray-400"
                  }`}
              >
                {experience.date.split(" - ")[0]}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1]
          }}
          viewport={{ once: true }}
          className="flex-1 group"
        >
          <div
            className={`relative overflow-hidden transition-all duration-500 ${darkMode
              ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:from-white/[0.06] hover:to-white/[0.02]"
              : "bg-gradient-to-br from-white to-gray-50/50 hover:from-white hover:to-white"
              }`}
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
                }`,
            }}
          >
            {/* Top Gradient Bar */}
            <div
              className={`h-1 ${index === 0
                ? "bg-gradient-to-r from-green-400 to-emerald-400"
                : index === 1
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400"
                  : index === 2
                    ? "bg-gradient-to-r from-purple-400 to-pink-400"
                    : "bg-gradient-to-r from-orange-400 to-red-400"
                }`}
            />

            <div className="p-8 sm:p-10">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* Company & Status */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 mb-3"
                    >
                      <h4
                        className={`text-sm font-medium ${darkMode ? "text-white/70" : "text-gray-700"
                          }`}
                      >
                        {experience.companyName}
                      </h4>
                      {index === 0 && (
                        <div
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${darkMode
                            ? "bg-green-400/10 text-green-400"
                            : "bg-green-50 text-green-600"
                            }`}
                        >
                          <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[9px] uppercase tracking-wider font-medium">
                            En cours
                          </span>
                        </div>
                      )}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`text-2xl sm:text-3xl font-light leading-tight mb-2 ${darkMode
                        ? "text-white/95 group-hover:text-white"
                        : "text-gray-900"
                        }`}
                    >
                      {experience.title}
                    </motion.h3>
                  </div>

                  {/* Duration Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium ${darkMode
                      ? "bg-white/5 text-white/50"
                      : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    {experience.date}
                  </motion.div>
                </div>
              </div>

              {/* Missions / Points */}
              <div className="space-y-3">
                {experience.points.map((point: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group/point"
                  >
                    {/* Icon */}
                    <div
                      className={`mt-1.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all ${darkMode
                        ? "bg-white/5 group-hover/point:bg-white/10"
                        : "bg-gray-100 group-hover/point:bg-gray-200"
                        }`}
                    >
                      <svg
                        className={`w-3 h-3 transition-colors ${darkMode
                          ? "text-white/30 group-hover/point:text-white/50"
                          : "text-gray-400 group-hover/point:text-gray-600"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    {/* Text */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-colors ${darkMode
                        ? "text-white/50 group-hover/point:text-white/70"
                        : "text-gray-600 group-hover/point:text-gray-900"
                        }`}
                    >
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Tags / Technologies (si disponibles) */}
              {experience.tags && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mt-6 pt-6 border-t border-white/5"
                >
                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-[10px] uppercase tracking-wider font-medium rounded-full ${darkMode
                          ? "bg-white/5 text-white/40"
                          : "bg-gray-100 text-gray-500"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Accent Line */}
            <motion.div
              className={`h-px ${darkMode
                ? "bg-white/5 group-hover:bg-white/10"
                : "bg-gray-200 group-hover:bg-gray-300"
                } transition-colors duration-500`}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { darkMode } = useDarkMode();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 transition-colors duration-700 overflow-hidden ${darkMode ? "bg-black" : "bg-transparent"
        }`}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-1/4 -right-64 w-96 h-96 rounded-full blur-[120px] ${darkMode ? "bg-blue-500/[0.03]" : "bg-blue-500/[0.05]"
            }`}
        />
        <div
          className={`absolute bottom-1/4 -left-64 w-96 h-96 rounded-full blur-[120px] ${darkMode ? "bg-purple-500/[0.03]" : "bg-purple-500/[0.05]"
            }`}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Animated Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-4 py-2">
                <motion.div
                  className="flex gap-1.5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${darkMode ? "bg-white/20" : "bg-black/20"
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
                </motion.div>
                <span
                  className={`text-[10px] uppercase tracking-[0.3em] font-medium ${darkMode ? "text-white/40" : "text-gray-400"
                    }`}
                >
                  Parcours Professionnel
                </span>
              </div>
            </div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.95] mb-8 ${darkMode ? "text-white" : "text-black"
                }`}
            >
              Expériences
              <br />
              <span className={darkMode ? "text-white/30" : "text-black/30"}>
                & Missions
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto ${darkMode ? "text-white/40" : "text-gray-500"
                }`}
            >
              De la transformation digitale au développement mobile et IA,
              découvrez mon parcours et les missions qui ont façonné mon expertise.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 flex items-center justify-center gap-12"
            >
              <div className="text-center">
                <div
                  className={`text-3xl font-light mb-1 ${darkMode ? "text-white" : "text-black"
                    }`}
                >
                  {experiences.length}+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-[0.2em] ${darkMode ? "text-white/30" : "text-gray-400"
                    }`}
                >
                  Expériences
                </div>
              </div>
              <div
                className={`w-px h-12 ${darkMode ? "bg-white/10" : "bg-gray-200"
                  }`}
              />
              <div className="text-center">
                <div
                  className={`text-3xl font-light mb-1 ${darkMode ? "text-white" : "text-black"
                    }`}
                >
                  3+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-[0.2em] ${darkMode ? "text-white/30" : "text-gray-400"
                    }`}
                >
                  Années
                </div>
              </div>
              <div
                className={`w-px h-12 ${darkMode ? "bg-white/10" : "bg-gray-200"
                  }`}
              />
              <div className="text-center">
                <div
                  className={`text-3xl font-light mb-1 ${darkMode ? "text-white" : "text-black"
                    }`}
                >
                  5+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-[0.2em] ${darkMode ? "text-white/30" : "text-gray-400"
                    }`}
                >
                  Secteurs
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
            style={{ originX: 0.5 }}
          >
            <div
              className={`h-px ${darkMode
                ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"
                }`}
            />
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div
            className={`h-px mb-12 ${darkMode
              ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
              : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              }`}
          />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium transition-colors ${darkMode
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-gray-900"
              }`}
          >
            Travaillons ensemble
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");