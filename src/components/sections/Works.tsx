import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { useDarkMode } from "./DarkModeContext";

interface Project {
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
  live_demo_link?: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { darkMode } = useDarkMode();

  const handleProjectClick = () => {
    const link = project.live_demo_link || project.source_code_link;
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group cursor-pointer h-full"
      onClick={handleProjectClick}
    >
      <div
        className={`relative h-full overflow-hidden transition-all duration-700 ease-out ${darkMode
          ? 'bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20'
          : 'bg-white/60 border border-gray-200/60 hover:bg-white hover:border-gray-300/80'
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
        {/* Subtle glow effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${darkMode
          ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
          : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'
          }`} style={{ borderRadius: "24px" }} />

        {/* Floating indicator */}
        <div className={`absolute top-6 right-6 w-3 h-3 rounded-full transition-all duration-500 ${darkMode ? 'bg-green-400/60' : 'bg-green-500/80'
          } group-hover:scale-125 group-hover:shadow-lg ${darkMode ? 'group-hover:shadow-green-400/50' : 'group-hover:shadow-green-500/30'
          }`}>
          <div className={`absolute inset-0 rounded-full animate-pulse ${darkMode ? 'bg-green-400/40' : 'bg-green-500/40'
            }`} />
        </div>

        {/* Image container */}
        <div className="relative overflow-hidden" style={{ borderRadius: "24px 24px 0 0" }}>
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>

          {/* Minimal overlay */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode
            ? 'bg-gradient-to-t from-black/20 via-transparent to-transparent'
            : 'bg-gradient-to-t from-white/10 via-transparent to-transparent'
            }`} />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title with minimal spacing */}
          <h3 className={`text-2xl font-light mb-4 transition-colors duration-500 tracking-tight ${darkMode
            ? 'text-white/90 group-hover:text-white'
            : 'text-gray-900 group-hover:text-gray-800'
            }`}>
            {project.name}
          </h3>

          {/* Description with perfect line height */}
          <p className={`text-base leading-relaxed mb-8 transition-colors duration-500 ${darkMode ? 'text-white/60 group-hover:text-white/80' : 'text-gray-600 group-hover:text-gray-700'
            }`}>
            {project.description}
          </p>

          {/* Minimal tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.div
                key={tag.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + tagIndex * 0.1 }}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${darkMode
                  ? 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white/90'
                  : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                style={{ borderRadius: "12px" }}
              >
                {tag.name}
              </motion.div>
            ))}
          </div>

          {/* Minimal CTA */}
          <div className={`flex items-center gap-3 text-sm font-medium transition-all duration-500 ${darkMode
            ? 'text-white/50 group-hover:text-white/90'
            : 'text-gray-500 group-hover:text-gray-900'
            }`}>
            <span className="tracking-wide">Explorer</span>
            <div className="w-6 h-px bg-current transition-all duration-500 group-hover:w-8" />
            <svg
              className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </div>
        </div>

        {/* Subtle bottom accent */}
        <div className={`absolute bottom-0 left-8 right-8 h-px transition-opacity duration-700 opacity-0 group-hover:opacity-100 ${darkMode
          ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300/50 to-transparent'
          }`} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border transition-colors duration-500 ${darkMode
            ? 'bg-white/5 border-white/10 text-white/70'
            : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}>
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-400/60' : 'bg-green-500'
              }`}>
              <div className={`w-full h-full rounded-full animate-pulse ${darkMode ? 'bg-green-400/40' : 'bg-green-500/40'
                }`} />
            </div>
            <span className="text-sm font-medium tracking-wider uppercase">Mes Réalisations</span>
          </div>

          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
            }`}>
            Projets
            <br />
            <span className={`${darkMode ? 'text-white/40' : 'text-gray-400'}`}>sélectionnés</span>
          </h2>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/60' : 'text-gray-600'
            }`}>
            Une collection soigneusement choisie de créations digitales,
            alliant esthétique moderne et innovation technique.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className={`h-px ${darkMode
          ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          }`} />
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "projects");