import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { useDarkMode } from "./DarkModeContext";

const Tech = () => {
  const { darkMode } = useDarkMode();

  const categories = {
    "Frontend": ["HTML 5", "CSS 3", "JavaScript", "TypeScript", "React JS", "Tailwind CSS"],
    "Backend": ["Node JS", "MongoDB", "git", "figma"],
    "Mobile": ["React Native"],
    "Tools": ["docker", "redux", "threejs"]
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Frontend": darkMode ? "from-blue-400/20 to-cyan-400/20" : "from-blue-100 to-cyan-100",
      "Backend": darkMode ? "from-green-400/20 to-emerald-400/20" : "from-green-100 to-emerald-100",
      "Mobile": darkMode ? "from-purple-400/20 to-pink-400/20" : "from-purple-100 to-pink-100",
      "Tools": darkMode ? "from-orange-400/20 to-red-400/20" : "from-orange-100 to-red-100"
    };
    return colors[category as keyof typeof colors] || (darkMode ? "from-gray-400/20 to-gray-400/20" : "from-gray-100 to-gray-100");
  };



  return (
    <section className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
      <div className="max-w-6xl mx-auto">

        {/* Header élégant */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Badge de technologies */}
            <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border transition-colors duration-500 ${darkMode
              ? 'bg-white/5 border-white/10 text-white/70'
              : 'bg-white border-gray-200 text-gray-600'
              }`}>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-blue-400/60' : 'bg-blue-500'
                      }`}
                    style={{
                      animation: `pulse 2s ease-in-out infinite ${i * 0.4}s`,
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium tracking-wider uppercase">Technologies</span>
            </div>

            {/* Titre principal */}
            <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
              }`}>
              Stack
              <br />
              <span className={`${darkMode ? 'text-white/40' : 'text-gray-400'}`}>technique</span>
            </h2>

            {/* Sous-titre */}
            <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/60' : 'text-gray-600'
              }`}>
              Les outils et technologies que j'utilise quotidiennement
              pour créer des expériences digitales exceptionnelles.
            </p>
          </motion.div>
        </div>

        {/* Technologies par catégories */}
        <div className="space-y-16">
          {Object.entries(categories).map(([category, categoryTechs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Titre de catégorie */}
              <div className="mb-8">
                <h3 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white/80' : 'text-gray-800'
                  }`}>
                  {category}
                </h3>
                <div className={`w-16 h-px bg-gradient-to-r ${getCategoryColor(category)}`} />
              </div>

              {/* Grid des technologies */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
                {technologies
                  .filter(tech => categoryTechs.includes(tech.name))
                  .map((tech, index) => {
                    const categoryColor = getCategoryColor(category);

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        viewport={{ once: true }}
                        className="group relative"
                      >
                        <div
                          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 cursor-pointer ${darkMode
                            ? 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15'
                            : 'bg-white/70 border border-gray-200/60 hover:bg-white hover:border-gray-300/80'
                            }`}
                          style={{
                            backdropFilter: "blur(40px)",
                            WebkitBackdropFilter: "blur(40px)",
                            boxShadow: darkMode
                              ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                              : "0 8px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                          }}
                        >
                          {/* Glow effect subtil */}
                          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${categoryColor} rounded-2xl`} />

                          {/* Icon */}
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                          />

                          {/* Tooltip moderne */}
                          <div className={`absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-xl text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${darkMode
                            ? 'bg-white/90 text-gray-900 border border-white/20'
                            : 'bg-gray-900/90 text-white border border-gray-700/20'
                            }`}
                            style={{
                              backdropFilter: "blur(20px)",
                              WebkitBackdropFilter: "blur(20px)",
                            }}>
                            {tech.name}
                            {/* Flèche */}
                            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${darkMode ? 'bg-white/90' : 'bg-gray-900/90'
                              }`} />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies restantes sans catégorie */}
        {technologies.filter(tech => !Object.values(categories).flat().includes(tech.name)).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="mb-8">
              <h3 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white/80' : 'text-gray-800'
                }`}>
                Autres
              </h3>
              <div className="w-16 h-px bg-gradient-to-r from-gray-400/20 to-gray-400/20" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 lg:gap-6">
              {technologies
                .filter(tech => !Object.values(categories).flat().includes(tech.name))
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center transition-all duration-500 cursor-pointer ${darkMode
                        ? 'bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/15'
                        : 'bg-white/70 border border-gray-200/60 hover:bg-white hover:border-gray-300/80'
                        }`}
                      style={{
                        backdropFilter: "blur(40px)",
                        WebkitBackdropFilter: "blur(40px)",
                        boxShadow: darkMode
                          ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                          : "0 8px 32px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                      />

                      <div className={`absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 px-3 py-2 rounded-xl text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${darkMode
                        ? 'bg-white/90 text-gray-900 border border-white/20'
                        : 'bg-gray-900/90 text-white border border-gray-700/20'
                        }`}
                        style={{
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                        }}>
                        {tech.name}
                        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${darkMode ? 'bg-white/90' : 'bg-gray-900/90'
                          }`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}

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

export default SectionWrapper(Tech, "tech");