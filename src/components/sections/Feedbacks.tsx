import { motion } from "framer-motion";
//import { fadeIn } from "../../utils/motion";
import { testimonials } from "../../constants";
import { TTestimonial } from "../../types";
import { useDarkMode } from "./DarkModeContext";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <div
        className={`relative h-full p-8 transition-all duration-700 ease-out ${darkMode
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
        {/* Subtle glow effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${darkMode
          ? 'bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5'
          : 'bg-gradient-to-br from-blue-50/80 via-purple-50/80 to-pink-50/80'
          }`} style={{ borderRadius: "24px" }} />

        {/* Floating quote indicator */}
        <div className={`absolute top-6 left-6 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${darkMode ? 'bg-white/10 text-white/60' : 'bg-gray-100 text-gray-400'
          } group-hover:scale-110`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>

        {/* Content with perfect spacing */}
        <div className="relative pt-16">
          {/* Testimonial text */}
          <p className={`text-lg leading-relaxed mb-8 font-light transition-colors duration-500 ${darkMode ? 'text-white/80 group-hover:text-white/95' : 'text-gray-700 group-hover:text-gray-800'
            }`}>
            {testimonial}
          </p>

          {/* Author section */}
          <div className="flex items-center gap-4">
            {/* Avatar with subtle border */}
            <div className="relative">
              <img
                src={image}
                alt={name}
                className={`w-14 h-14 rounded-full object-cover transition-all duration-300 ${darkMode
                  ? 'border-2 border-white/10 group-hover:border-white/20'
                  : 'border-2 border-gray-200 group-hover:border-gray-300'
                  }`}
              />
              {/* Subtle ring effect */}
              <div className={`absolute inset-0 rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${darkMode ? 'ring-2 ring-white/20' : 'ring-2 ring-blue-200/50'
                }`} />
            </div>

            {/* Author info */}
            <div className="flex-1">
              <h4 className={`font-medium mb-1 transition-colors duration-300 ${darkMode ? 'text-white/90 group-hover:text-white' : 'text-gray-900'
                }`}>
                {name}
              </h4>
              <p className={`text-sm font-light transition-colors duration-300 ${darkMode ? 'text-white/50 group-hover:text-white/70' : 'text-gray-500 group-hover:text-gray-600'
                }`}>
                {designation}
              </p>
              <p className={`text-xs font-medium tracking-wide transition-colors duration-300 ${darkMode ? 'text-white/40 group-hover:text-white/60' : 'text-gray-400 group-hover:text-gray-500'
                }`}>
                {company}
              </p>
            </div>
          </div>
        </div>

        {/* Minimal bottom accent */}
        <div className={`absolute bottom-0 left-8 right-8 h-px transition-all duration-700 ${darkMode
          ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100'
          : 'bg-gradient-to-r from-transparent via-gray-300/60 to-transparent opacity-0 group-hover:opacity-100'
          }`} />
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-50'
      }`}>
      {/* Elegant header */}
      <div className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          {/* Status indicator */}
          <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border transition-colors duration-500 ${darkMode
            ? 'bg-white/5 border-white/10 text-white/70'
            : 'bg-white border-gray-200 text-gray-600'
            }`}>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-yellow-400/60' : 'bg-yellow-500'
                    }`}
                  style={{
                    animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wider uppercase">Témoignages</span>
          </div>

          {/* Main title */}
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-8 ${darkMode ? 'text-white/95' : 'text-gray-900'
            }`}>
            Retours
            <br />
            <span className={`${darkMode ? 'text-white/40' : 'text-gray-400'}`}>d'expérience</span>
          </h2>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/60' : 'text-gray-600'
            }`}>
            Découvrez ce que mes collaborateurs et clients pensent
            de notre travail ensemble.
          </p>
        </motion.div>
      </div>

      {/* Testimonials grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={`testimonial-${index}`}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className={`h-px ${darkMode
          ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-200 to-transparent'
          }`} />
      </div>
    </section>
  );
};

export default Feedbacks;