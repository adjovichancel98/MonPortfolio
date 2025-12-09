import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { useDarkMode } from "./DarkModeContext";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const { darkMode } = useDarkMode();
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: form.message,
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm(INITIAL_STATE);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
  };

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-24 sm:py-32 px-6 sm:px-12 transition-colors duration-700 overflow-hidden ${darkMode ? 'bg-black' : 'bg-transparent'
        }`}
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-blue-500/[0.03]' : 'bg-blue-500/[0.05]'
            }`}
        />
        <div
          className={`absolute bottom-1/4 left-0 w-[600px] h-[600px] rounded-full blur-[150px] ${darkMode ? 'bg-purple-500/[0.03]' : 'bg-purple-500/[0.05]'
            }`}
        />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
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
                  Discutons Ensemble
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              className={`text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] mb-6 ${darkMode ? 'text-white' : 'text-black'
                }`}
            >
              Travaillons
              <br />
              <span className={darkMode ? 'text-white/30' : 'text-black/30'}>
                Ensemble
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light ${darkMode ? 'text-white/40' : 'text-gray-500'
                }`}
            >
              Une idée, un projet ? Contactez-moi et transformons
              vos visions en réalité.
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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info - Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              {/* Email Card */}
              <motion.a
                href={`mailto:${config.html.email}`}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                className="block group"
              >
                <div className={`p-6 transition-all duration-300 ${darkMode
                  ? 'hover:bg-white/[0.02]'
                  : 'hover:bg-gray-50'
                  }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                      <svg
                        className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-gray-600'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-xs uppercase tracking-[0.2em] mb-2 ${darkMode ? 'text-white/40' : 'text-gray-400'
                          }`}
                      >
                        Email
                      </p>
                      <p
                        className={`text-base font-light ${darkMode ? 'text-white/80' : 'text-gray-900'
                          }`}
                      >
                        {config.html.email}
                      </p>
                    </div>
                    <motion.div
                      className={`mt-2 ${darkMode ? 'text-white/40' : 'text-gray-400'
                        }`}
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`p-6 ${darkMode ? 'bg-white/[0.01]' : 'bg-gray-50/50'
                  }`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center ${darkMode ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                      <svg
                        className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-gray-600'
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-xs uppercase tracking-[0.2em] mb-2 ${darkMode ? 'text-white/40' : 'text-gray-400'
                          }`}
                      >
                        Localisation
                      </p>
                      <p
                        className={`text-base font-light ${darkMode ? 'text-white/80' : 'text-gray-900'
                          }`}
                      >
                        Cotonou, Bénin
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p
                className={`text-xs uppercase tracking-[0.2em] mb-4 ${darkMode ? 'text-white/40' : 'text-gray-400'
                  }`}
              >
                Suivez-moi
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 flex items-center justify-center ${darkMode
                      ? 'bg-white/5 hover:bg-white/10'
                      : 'bg-gray-100 hover:bg-gray-200'
                      } transition-colors`}
                  >
                    <svg
                      className={`w-5 h-5 ${darkMode ? 'text-white/60' : 'text-gray-600'
                        }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form - Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {Object.keys(config.contact.form).map((input, idx) => {
                const { span, placeholder } =
                  config.contact.form[input as keyof typeof config.contact.form];
                const Component = input === "message" ? "textarea" : "input";
                const isFocused = focusedField === input;

                return (
                  <motion.div
                    key={input}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <label
                      className={`block text-xs uppercase tracking-[0.2em] mb-3 transition-colors ${isFocused
                        ? darkMode
                          ? 'text-white'
                          : 'text-black'
                        : darkMode
                          ? 'text-white/40'
                          : 'text-gray-400'
                        }`}
                    >
                      {span}
                    </label>
                    <Component
                      type={input === "email" ? "email" : "text"}
                      name={input}
                      value={form[input]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(input)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={placeholder}
                      required
                      className={`w-full px-0 py-3 bg-transparent border-b-2 transition-all duration-300 outline-none ${isFocused
                        ? darkMode
                          ? 'border-white text-white'
                          : 'border-black text-black'
                        : darkMode
                          ? 'border-white/10 text-white/80 placeholder:text-white/30'
                          : 'border-gray-200 text-gray-900 placeholder:text-gray-400'
                        } ${darkMode
                          ? 'hover:border-white/30'
                          : 'hover:border-gray-400'
                        }`}
                      {...(input === "message" && { rows: 4 })}
                    />

                    {/* Focus indicator */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-[2px] ${darkMode ? 'bg-white' : 'bg-black'
                        }`}
                      initial={{ width: 0 }}
                      animate={{ width: isFocused ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              })}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: loading ? 1 : 1.02, y: -2 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 ${success
                  ? darkMode
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-green-50 text-green-600 border border-green-200'
                  : loading
                    ? darkMode
                      ? 'bg-white/10 text-white/50 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : darkMode
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-black text-white hover:bg-gray-900'
                  }`}
              >
                {success ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message envoyé !
                  </span>
                ) : loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Envoyer le message
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");