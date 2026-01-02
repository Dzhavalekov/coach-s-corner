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
      
      {/* Combined overlay for better performance */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10"
      />
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-20 md:py-28 relative z-10">
        <div className="max-w-[600px] text-center md:text-left">
          {/* Main headline */}
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold md:font-bold leading-[1.1] md:leading-[1.15] mb-4 sm:mb-6 opacity-0 animate-fade-in max-w-[520px] md:max-w-[600px] text-white" 
            style={{ animationDelay: "0.1s", animationDuration: "0.3s", animationFillMode: "forwards" }}
          >
            {t("hero.title")}{" "}
            <span className="text-primary md:text-primary">{t("hero.title.highlight")}</span> {t("hero.title.end")}
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[480px] md:max-w-[520px] mb-6 sm:mb-10 leading-[1.4] md:leading-[1.5] opacity-0 animate-fade-in text-white/90" 
            style={{ animationDelay: "0.2s", animationDuration: "0.3s", animationFillMode: "forwards" }}
          >
            {t("hero.subtitle")}
          </p>
          
          {/* CTAs */}
         {/* CTAs: animated boxed CTAs using Framer Motion */}
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
  <motion.button
    onClick={() => scrollToSection('philosophy')}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: 0.1 }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    className="relative rounded-2xl px-8 py-3 sm:py-4 text-base font-semibold text-white shadow-md border border-white/20 bg-white/5 backdrop-blur-sm flex items-center gap-2"
    aria-label={t("hero.cta.learn")}
  >
    <Lightbulb className="w-5 h-5" />
    {t("hero.cta.learn")}
  </motion.button>

  <motion.button
    onClick={() => scrollToSection('contact')}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: 0.22 }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    className="relative rounded-2xl px-8 py-3 sm:py-4 text-base font-semibold text-white shadow-md border border-white/20 bg-white/5 backdrop-blur-sm flex items-center gap-2"
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in z-10" style={{ animationDelay: "0.5s", animationDuration: "0.3s", animationFillMode: "forwards" }}>
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-white/70 hover:text-primary transition-colors"
        >
          <span className="text-xs sm:text-sm mb-2">{t("hero.scroll")}</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
