import { ArrowDown, Lightbulb, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import heroBackground from "@/assets/hero-background.png";
import { useLanguage } from "@/contexts/LanguageContext";
import TrustIndicators from "@/components/TrustIndicators";

const HeroSection = memo(() => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Only apply parallax on desktop for better mobile performance
  const parallaxStyle = useMemo(() => ({
    backgroundImage: `url(${heroBackground})`,
    transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px)` : undefined,
  }), [scrollY]);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with optimized parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={parallaxStyle}
      />
      
      {/* Enhanced overlay for better readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
      />
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-20 md:py-28 relative z-10">
        <div className="max-w-[600px] text-center md:text-left">
          {/* Main headline with improved hierarchy */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] md:leading-[1.12] mb-5 sm:mb-7 max-w-[520px] md:max-w-[650px] text-white drop-shadow-lg"
          >
            {t("hero.title")}{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">{t("hero.title.highlight")}</span> {t("hero.title.end")}
          </motion.h1>
          
          {/* Subheadline with improved readability */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[480px] md:max-w-[560px] mb-8 sm:mb-12 leading-[1.5] md:leading-[1.6] text-white/95 drop-shadow-md font-light"
          >
            {t("hero.subtitle")}
          </motion.p>
          
          {/* Enhanced CTAs with primary/secondary styling */}
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
  <motion.button
    onClick={() => scrollToSection('philosophy')}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
    whileTap={{ scale: 0.98 }}
    className="relative rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg bg-primary hover:bg-primary/90 transition-colors flex items-center justify-center gap-2.5"
    aria-label={t("hero.cta.learn")}
  >
    <Lightbulb className="w-5 h-5" />
    {t("hero.cta.learn")}
  </motion.button>

  <motion.button
    onClick={() => scrollToSection('contact')}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
    whileTap={{ scale: 0.98 }}
    className="relative rounded-xl px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all flex items-center justify-center gap-2.5"
    aria-label={t("hero.cta.contact")}
  >
    <Mail className="w-5 h-5" />
    {t("hero.cta.contact")}
  </motion.button>
</div>
          
          {/* Trust indicators */}
          <TrustIndicators />
        </div>
      </div>
      
      {/* Scroll indicator with smooth animation */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-xs sm:text-sm mb-2 font-medium">{t("hero.scroll")}</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce group-hover:text-primary transition-colors" />
        </button>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
