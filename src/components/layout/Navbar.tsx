import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { useDarkMode } from "../sections/DarkModeContext"; // ✅ Chemin corrigé

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute("id");
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActive(id ?? "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? darkMode
            ? "bg-black/80 border-b border-white/[0.08]"
            : "bg-white/80 border-b border-gray-200/50"
          : "bg-transparent"
          }`}
        style={{
          backdropFilter: scrolled ? "blur(40px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(40px)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

          {/* Logo redesigné */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${darkMode
                ? 'bg-white/10 group-hover:bg-white/15'
                : 'bg-gray-900 group-hover:bg-gray-800'
                }`}
            >
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-white'
                }`}>
                C
              </span>
            </motion.div>
            <span className={`text-lg font-light tracking-wide transition-colors duration-300 ${darkMode ? 'text-white/90' : 'text-gray-900'
              }`}>
              Chancel
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center">
            <div className={`flex items-center gap-1 p-1 rounded-2xl transition-all duration-300 ${darkMode
              ? 'bg-white/[0.06] border border-white/[0.12]'
              : 'bg-gray-100/80 border border-gray-200/60'
              }`}
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}>
              {navLinks.map((nav, index) => (
                <motion.a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.id)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`relative text-sm px-6 py-3 rounded-xl font-medium transition-all duration-500 cursor-pointer ${active === nav.id
                    ? darkMode
                      ? "text-black"
                      : "text-white"
                    : darkMode
                      ? "text-white/70 hover:text-white/90"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {active === nav.id && (
                    <motion.div
                      layoutId="activeNavTab"
                      className={`absolute inset-0 rounded-xl shadow-lg ${darkMode
                        ? 'bg-white'
                        : 'bg-gray-900'
                        }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.6
                      }}
                      style={{
                        boxShadow: darkMode
                          ? "0 4px 20px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                          : "0 4px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                      }}
                    />
                  )}
                  <span className="relative z-10 font-medium">{nav.title}</span>
                </motion.a>
              ))}
            </div>

            {/* Séparateur moderne */}
            <div className={`w-px h-8 mx-6 ${darkMode ? 'bg-white/10' : 'bg-gray-300/60'
              }`} />

            {/* Toggle dark mode stylé */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-3 rounded-2xl transition-all duration-300 ${darkMode
                ? 'bg-white/[0.06] border border-white/[0.12] text-white/80 hover:text-white'
                : 'bg-gray-100/80 border border-gray-200/60 text-gray-600 hover:text-gray-900'
                }`}
              style={{
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.6,
                  duration: 0.6
                }}
                className="w-5 h-5 flex items-center justify-center"
              >
                {darkMode ? "☀️" : "🌙"}
              </motion.div>

              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 ${darkMode
                ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10'
                : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10'
                }`} />
            </motion.button>
          </nav>

          {/* Menu mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Toggle dark mode mobile */}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              {darkMode ? "☀️" : "🌙"}
            </motion.button>

            {/* Hamburger menu */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300`}
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300`}
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  className={`w-6 h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all duration-300`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className={`absolute inset-0 ${darkMode ? 'bg-black/60' : 'bg-gray-900/60'
              } backdrop-blur-sm`} />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] ${darkMode
                ? 'bg-black/95 border-l border-white/10'
                : 'bg-white/95 border-l border-gray-200'
                }`}
              style={{
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-6">
                {/* Header mobile menu */}
                <div className="flex items-center justify-between mb-8">
                  <span className={`text-lg font-light ${darkMode ? 'text-white/90' : 'text-gray-900'
                    }`}>
                    Navigation
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2 rounded-lg transition-colors ${darkMode
                      ? 'text-white/70 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    ✕
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="space-y-1">
                  {navLinks.map((nav, index) => (
                    <motion.a
                      key={nav.id}
                      href={`#${nav.id}`}
                      onClick={() => {
                        setActive(nav.id);
                        setMobileMenuOpen(false);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`relative block px-4 py-4 rounded-2xl font-medium transition-all duration-300 group ${active === nav.id
                        ? darkMode
                          ? "text-black"
                          : "text-white"
                        : darkMode
                          ? "text-white/70 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                      {active === nav.id && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className={`absolute inset-0 rounded-2xl ${darkMode
                            ? 'bg-white shadow-lg'
                            : 'bg-gray-900 shadow-lg'
                            }`}
                          initial={false}
                          transition={{
                            type: "spring",
                            bounce: 0.15,
                            duration: 0.6
                          }}
                          style={{
                            boxShadow: darkMode
                              ? "0 8px 32px rgba(255, 255, 255, 0.2)"
                              : "0 8px 32px rgba(0, 0, 0, 0.15)",
                          }}
                        />
                      )}
                      <span className="relative z-10 flex items-center justify-between">
                        {nav.title}
                        {active === nav.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gray-900' : 'bg-white'
                              }`}
                          />
                        )}
                      </span>

                      {/* Glow effect au survol */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${active !== nav.id ? (darkMode
                        ? 'bg-white/5'
                        : 'bg-gray-100/80') : ''
                        }`} />
                    </motion.a>
                  ))}
                </nav>

                {/* Footer mobile menu */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className={`text-xs ${darkMode ? 'text-white/40' : 'text-gray-500'
                    }`}>
                    © 2024 Chancel Adjovi
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;