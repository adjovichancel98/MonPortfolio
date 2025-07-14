export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  
  // Hero Texts - Design moderne avec couleurs adaptées au thème clair
  heroHeadText:
    "font-black text-gray-900 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 tracking-tight",
  heroSubText:
    "text-gray-600 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] max-w-4xl",
  
  // Section Texts - Hiérarchie typographique claire
  sectionHeadText:
    "text-gray-900 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] tracking-tight leading-tight",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider font-semibold",
  
  // Cards & Components modernes
  cardBase:
    "bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm",
  cardHover:
    "transform hover:-translate-y-1 transition-all duration-300 ease-out",
  cardGradient:
    "bg-gradient-to-br from-white to-gray-50 border border-gray-100",
  
  // Boutons UI modernes
  buttonPrimary:
    "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
  buttonSecondary:
    "bg-white border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium px-6 py-2.5 rounded-lg transition-all duration-200",
  buttonOutline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200",
  
  // Inputs & Forms modernes
  inputBase:
    "w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200",
  labelText:
    "block text-sm font-medium text-gray-700 mb-2",
  
  // Navigation moderne
  navLink:
    "text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300",
  navActive:
    "text-blue-600 font-semibold",
  
  // Badges & Tags UI
  badgePrimary:
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800",
  badgeSecondary:
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800",
  badgeSuccess:
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
  badgeWarning:
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800",
  
  // Containers & Layout
  containerMax:
    "max-w-7xl mx-auto",
  containerSection:
    "relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8",
  gridResponsive:
    "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8",
  
  // Text Variants modernes
  textDisplay:
    "text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight",
  textHeading:
    "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight",
  textSubheading:
    "text-lg sm:text-xl font-semibold text-gray-700",
  textBody:
    "text-base text-gray-600 leading-relaxed",
  textSmall:
    "text-sm text-gray-500",
  textMuted:
    "text-gray-400",
  
  // Gradients UI modernes (subtils et professionnels)
  gradientPrimary:
    "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600",
  gradientSecondary:
    "bg-gradient-to-br from-gray-50 to-gray-100",
  gradientAccent:
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  gradientText:
    "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
  
  // States & Interactions
  hoverScale:
    "hover:scale-[1.02] transition-transform duration-200",
  hoverLift:
    "hover:-translate-y-1 transition-transform duration-200",
  focusRing:
    "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none",
  
  // Shadows modernes
  shadowSm:
    "shadow-sm",
  shadowMd:
    "shadow-md",
  shadowLg:
    "shadow-lg hover:shadow-xl transition-shadow duration-300",
  shadowXl:
    "shadow-xl",
  
  // Borders & Dividers
  borderLight:
    "border border-gray-200",
  borderMedium:
    "border border-gray-300",
  divider:
    "h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent",
  
  // Loading & States
  loadingSpinner:
    "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
  disabledState:
    "opacity-50 cursor-not-allowed",
  
  // Responsive Utilities
  hiddenMobile:
    "hidden sm:block",
  hiddenDesktop:
    "block sm:hidden",
  responsiveText:
    "text-sm sm:text-base lg:text-lg",
};