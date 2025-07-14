import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { config } from "./constants/config";
import { DarkModeProvider, useDarkMode } from "./components/sections/DarkModeContext";

const AppContent = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={`relative z-0 min-h-screen transition-colors duration-300 ${darkMode
        ? 'bg-black text-white'
        : 'bg-gray-50 text-gray-900'
        }`}>
        {/* Hero section */}
        <div className={`${darkMode
          ? 'bg-black'
          : 'bg-gradient-to-br from-gray-50 to-white'
          } bg-cover bg-center bg-no-repeat transition-colors duration-300`}>
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        <div className="relative z-0">
          <Contact />
          {darkMode && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;