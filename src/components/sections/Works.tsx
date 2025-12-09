import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { useDarkMode } from "./DarkModeContext";
import type { TProject } from "../../types";

interface Project {
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  sourceCodeLink?: string;
  live_demo_link?: string;
  category?: 'mobile' | 'web' | 'data';
}

// 🎨 PROJECT CARD - DESIGN EXCEPTIONNEL
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}> = ({ project, index, isActive, onActivate }) => {
  const { darkMode } = useDarkMode();
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tracking pour parallax 3D
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [3, -3]);
  const rotateY = useTransform(mouseX, [-100, 100], [-3, 3]);
  const scale = useTransform(mouseX, [-100, 100], [0.98, 1.02]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isActive) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer"
    >
      <motion.div
        style={{
          rotateX: isActive ? 0 : rotateX,
          rotateY: isActive ? 0 : rotateY,
          scale: isActive ? 1.02 : scale,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <div className="relative" onClick={onActivate}>
          {/* Image Container avec effet de profondeur */}
          <div className="relative overflow-hidden mb-6">
            <motion.div
              className="aspect-[16/9] relative"
              animate={{
                scale: isActive ? 1.05 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image principale */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isActive ? 1.15 : 1,
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay gradient sophistiqué */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: darkMode
                    ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.95) 100%)'
                    : 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.95) 100%)'
                }}
                animate={{
                  opacity: isActive ? 1 : 0.8
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Glow effect border */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: darkMode
                    ? '0 0 30px rgba(59, 130, 246, 0.3) inset'
                    : '0 0 30px rgba(59, 130, 246, 0.2) inset'
                }}
              />

              {/* Index Number - Design sophistiqué */}
              <motion.div
                className="absolute top-6 left-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
              >
                <div className="relative">
                  <div className={`w-12 h-12 flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-black/5'
                    }`}
                    style={{
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
                    }}>
                    <span className={`text-sm font-light ${darkMode ? 'text-white/70' : 'text-black/70'
                      }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Accent line */}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-px ${darkMode ? 'bg-white/30' : 'bg-black/30'
                      }`}
                    animate={{
                      width: isActive ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Category Badge - Design moderne */}
              {project.category && (
                <motion.div
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className={`px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.25em] ${darkMode ? 'bg-white text-black' : 'bg-black text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                    }}
                  >
                    {project.category}
                  </motion.div>
                </motion.div>
              )}

              {/* Interaction indicator - Center */}
              <AnimatePresence>
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/10' : 'bg-black/10'
                        }`}
                      style={{
                        backdropFilter: "blur(30px)",
                        WebkitBackdropFilter: "blur(30px)",
                      }}
                    >
                      <svg
                        className={`w-8 h-8 ${darkMode ? 'text-white' : 'text-black'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-6 right-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-black/5'
                        }`}
                      style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                    >
                      <motion.svg
                        className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Content - Design sophistiqué */}
          <motion.div
            animate={{
              y: isActive ? -8 : 0,
              scale: isActive ? 1.02 : 1
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Title avec ligne animée */}
            <div className="mb-4">
              <motion.h3
                className={`text-2xl sm:text-3xl font-light tracking-tight mb-2 ${darkMode ? 'text-white' : 'text-black'
                  }`}
                animate={{
                  x: isActive ? 4 : 0
                }}
                transition={{ duration: 0.4 }}
              >
                {project.name}
              </motion.h3>

              {/* Accent line sous le titre */}
              <motion.div
                className={`h-px ${darkMode ? 'bg-white/20' : 'bg-black/20'}`}
                animate={{
                  width: isActive ? '60px' : '0px'
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Description avec reveal intelligent */}
            <motion.div className="overflow-hidden">
              <motion.p
                className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-white/60' : 'text-gray-600'
                  }`}
                animate={{
                  height: isActive ? 'auto' : '40px',
                  opacity: isActive ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: isActive ? 'unset' : 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Tags avec animation stagger */}
            <motion.div
              className="flex flex-wrap gap-2 mb-5"
              animate={{
                opacity: isActive ? 1 : 0.7
              }}
            >
              {(isActive ? project.tags : project.tags.slice(0, 4)).map((tag, i) => (
                <motion.span
                  key={tag.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: isActive ? i * 0.05 : 0,
                    duration: 0.3
                  }}
                  className={`text-[9px] font-medium uppercase tracking-[0.2em] px-2.5 py-1.5 ${darkMode
                    ? 'bg-white/5 text-white/50'
                    : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {tag.name}
                </motion.span>
              ))}
              {!isActive && project.tags.length > 4 && (
                <span className={`text-[9px] font-medium px-2.5 py-1.5 ${darkMode ? 'text-white/30' : 'text-gray-400'
                  }`}>
                  +{project.tags.length - 4}
                </span>
              )}
            </motion.div>

            {/* Actions - Apparition élégante */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden pt-2"
                >
                  <div className="flex gap-3">
                    {project.live_demo_link && (
                      <motion.a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex-1 py-3 px-4 text-center text-[10px] uppercase tracking-[0.2em] font-medium ${darkMode
                          ? 'bg-white text-black'
                          : 'bg-black text-white'
                          }`}
                      >
                        Voir le site
                      </motion.a>
                    )}
                    {project.sourceCodeLink && (
                      <motion.a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex-1 py-3 px-4 text-center text-[10px] uppercase tracking-[0.2em] font-medium ${darkMode
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'bg-gray-100 text-black border border-gray-200'
                          }`}
                      >
                        Code
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Bottom accent bar */}
          <motion.div
            className={`mt-6 h-px ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}
            animate={{
              scaleX: isActive ? 1 : 0.3,
              originX: 0
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// 🎨 SECTION PRINCIPALE
const Projects = () => {
  const { darkMode } = useDarkMode();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'mobile' | 'web' | 'data'>('all');
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Scroll parallax pour le background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const categories = [
    { id: 'all' as const, label: 'Tous', emoji: '✨', count: projects.length },
    {
      id: 'mobile' as const,
      label: 'Mobile',
      emoji: '📱',
      count: projects.filter((p: TProject) => p.category === 'mobile').length
    },
    {
      id: 'web' as const,
      label: 'Web',
      emoji: '🌐',
      count: projects.filter((p: TProject) => p.category === 'web').length
    },
    {
      id: 'data' as const,
      label: 'Data',
      emoji: '📊',
      count: projects.filter((p: TProject) => p.category === 'data').length
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p: TProject) => p.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 sm:py-32 px-6 sm:px-12 transition-colors duration-700 overflow-hidden ${darkMode ? 'bg-black' : 'bg-transparent'
        }`}
    >
      {/* Animated Background avec parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[180px] ${darkMode ? 'bg-blue-500/[0.02]' : 'bg-blue-500/[0.04]'
            }`}
        />
        <motion.div
          style={{ y: y2 }}
          className={`absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full blur-[180px] ${darkMode ? 'bg-purple-500/[0.02]' : 'bg-purple-500/[0.04]'
            }`}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header sophistiqué */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge animé */}
            <div className="mb-10">
              <motion.div className="inline-flex items-center gap-3">
                <div className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-white/30' : 'bg-black/30'
                        }`}
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                <span
                  className={`text-[9px] uppercase tracking-[0.35em] font-medium ${darkMode ? 'text-white/50' : 'text-gray-400'
                    }`}
                >
                  Portfolio Sélection
                </span>
              </motion.div>
            </div>

            {/* Title avec effet de typing */}
            <motion.h2
              className={`text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.95] mb-8 ${darkMode ? 'text-white' : 'text-black'
                }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Projets
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-12 ${darkMode ? 'text-white/50' : 'text-gray-500'
                }`}
            >
              Applications mobiles, web et solutions data science
              qui transforment des idées en produits concrets.
            </motion.p>

            {/* Filtres redesignés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, idx) => (
                <motion.button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setActiveProject(null);
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-400 ${selectedCategory === category.id
                    ? darkMode
                      ? 'text-black'
                      : 'text-white'
                    : darkMode
                      ? 'text-white/50'
                      : 'text-gray-500'
                    }`}
                >
                  {/* Background animé */}
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className={darkMode ? 'bg-white' : 'bg-black'}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: -1,
                        clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    />
                  )}

                  <span className="flex items-center gap-2">
                    <span className="text-sm">{category.emoji}</span>
                    {category.label}
                    <span className={`px-2 py-0.5 rounded-full text-[9px] ${selectedCategory === category.id
                      ? darkMode
                        ? 'bg-black/15'
                        : 'bg-white/20'
                      : darkMode
                        ? 'bg-white/10'
                        : 'bg-black/10'
                      }`}>
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Ligne décorative */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-16"
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

        {/* Projects Grid avec animation de transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`project-${selectedCategory}-${index}`}
                project={project}
                index={index}
                isActive={activeProject === index}
                onActivate={() => setActiveProject(activeProject === index ? null : index)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State élégant */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-6 opacity-20"
            >
              📦
            </motion.div>
            <p
              className={`text-xs uppercase tracking-[0.3em] ${darkMode ? 'text-white/30' : 'text-gray-400'
                }`}
            >
              Aucun projet dans cette catégorie
            </p>
          </motion.div>
        )}

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div
            className={`h-px mb-6 ${darkMode
              ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
              }`}
          />
          <p
            className={`text-[9px] uppercase tracking-[0.3em] ${darkMode ? 'text-white/20' : 'text-gray-300'
              }`}
          >
            {filteredProjects.length} {filteredProjects.length > 1 ? 'Projets' : 'Projet'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");