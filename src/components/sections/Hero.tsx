import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";

const Hero = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xParallax = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const yParallax = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={`relative h-screen w-full overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>

      {/* Background elements */}
      {darkMode && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.015] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/3 via-transparent to-transparent" />
        </div>
      )}

      {/* Floating elements */}
      <motion.div
        style={{ x: xParallax, y: yParallax }}
        className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-white/10' : 'bg-blue-200/40'
          }`}
      />
      <motion.div
        style={{ x: useTransform(xParallax, x => x * -0.5), y: useTransform(yParallax, y => y * -0.3) }}
        className={`absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-2xl opacity-30 ${darkMode ? 'bg-white/5' : 'bg-purple-200/30'
          }`}
      />

      {/* Navbar minimaliste */}
      <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${darkMode
        ? 'bg-black/40 border-b border-white/[0.08]'
        : 'bg-white/60 border-b border-gray-200/40'
        }`}
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
        }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-6 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${darkMode ? 'bg-white/10' : 'bg-gray-900'
              }`}>
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-white'
                }`}>C</span>
            </div>
            <span className={`text-lg font-light tracking-wide ${darkMode ? 'text-white/90' : 'text-gray-900'
              }`}>Chancel</span>
          </motion.div>

          <motion.div
            className="hidden md:flex gap-8 text-sm font-light"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['À propos', 'Projets', 'Contact'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('à propos', 'about')}`}
                className={`relative transition-colors duration-300 ${darkMode
                  ? 'text-white/70 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
                  } group`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${darkMode ? 'bg-white' : 'bg-gray-900'
                  }`} />
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Status badge élégant */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute top-32 left-6 sm:left-12 z-20"
      >
        <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500 ${darkMode
          ? 'bg-white/[0.08] border border-white/[0.12] text-white/80'
          : 'bg-white/80 border border-gray-200/60 text-gray-700'
          }`}
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}>
          <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-400' : 'bg-green-500'
            }`}>
            <div className={`w-full h-full rounded-full animate-pulse ${darkMode ? 'bg-green-400/60' : 'bg-green-500/60'
              }`} />
          </div>
          <span className="text-xs font-medium tracking-wide">En mission IA & Produit chez Diversity</span>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
          <div className="max-w-4xl">

            {/* Titre principal */}
            <motion.div
              style={{ x: useTransform(xParallax, x => x * 0.1) }}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className={`font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
                }`}>
                <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">Je suis</span>
                <span className={`block text-6xl sm:text-7xl lg:text-8xl ${darkMode
                  ? 'text-white'
                  : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent'
                  }`}>
                  Chancel
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              style={{ x: useTransform(xParallax, x => x * 0.05) }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <div className={`max-w-2xl p-8 rounded-3xl transition-all duration-500 ${darkMode
                ? 'bg-white/[0.03] border border-white/[0.08]'
                : 'bg-white/60 border border-gray-200/50'
                }`}
                style={{
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                }}>
                <p className={`text-lg sm:text-xl leading-relaxed font-light ${darkMode ? 'text-white/80' : 'text-gray-700'
                  }`}>
                  Je conçois des solutions numériques comme des applications mobiles, web ou basées sur l'intelligence artificielle.
                  La data science et la gestion de projet font aussi partie de mon quotidien. Mon but : créer des outils utiles,
                  fluides et adaptés aux vrais besoins.
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#about"
                className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${darkMode
                  ? 'bg-white text-black hover:bg-white/90 hover:scale-105'
                  : 'bg-gray-900 text-white hover:bg-gray-800 hover:scale-105'
                  }`}
                style={{
                  boxShadow: darkMode
                    ? "0 8px 32px rgba(255, 255, 255, 0.15)"
                    : "0 8px 32px rgba(0, 0, 0, 0.15)",
                }}
              >
                <span>Découvrir mon travail</span>
                <motion.div
                  className="w-4 h-4"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>

              <button
                onClick={toggleDarkMode}
                className={`inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${darkMode
                  ? 'bg-white/[0.08] border border-white/[0.12] text-white/80 hover:bg-white/[0.12]'
                  : 'bg-white/80 border border-gray-200/60 text-gray-700 hover:bg-white'
                  }`}
                style={{
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span className="text-lg">{darkMode ? "☀️" : "🌙"}</span>
                <span>{darkMode ? "Mode clair" : "Mode sombre"}</span>
              </button>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-4"
            >
              <span className={`text-sm font-light ${darkMode ? 'text-white/50' : 'text-gray-500'
                }`}>
                Me suivre
              </span>
              <div className={`w-12 h-px ${darkMode ? 'bg-white/20' : 'bg-gray-300'
                }`} />

              {[
                { icon: FaGithub, href: "https://github.com/tonprofil", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/tonprofil", label: "LinkedIn" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode
                    ? 'text-white/60 hover:text-white hover:bg-white/[0.08]'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator minimaliste */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`w-6 h-10 rounded-full border-2 flex justify-center transition-colors duration-300 ${darkMode ? 'border-white/30' : 'border-gray-400'
            }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`w-1 h-3 rounded-full mt-2 ${darkMode ? 'bg-white/60' : 'bg-gray-600'
              }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;