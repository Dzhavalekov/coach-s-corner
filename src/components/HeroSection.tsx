import { ArrowDown, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import heroBackground from "@/assets/hero-background.png";
import { useLanguage } from "@/contexts/LanguageContext";

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
      
      {/* Enhanced gradient overlay for better readability */}
      <div className="absolute inset-0 hero__overlay" />
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-20 md:py-28 relative z-10">
        <div className="max-w-[600px] text-center md:text-left">
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-sm font-medium text-white/90 tracking-wide uppercase">
              {t("hero.eyebrow")}
            </span>
          </motion.div>
          
          {/* Main headline with text shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold md:font-bold leading-[1.1] md:leading-[1.15] mb-4 sm:mb-6 max-w-[520px] md:max-w-[600px] text-white"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
          >
            {t("hero.title")}{" "}
            <span className="text-primary" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)' }}>
              {t("hero.title.highlight")}
            </span>{" "}
            {t("hero.title.end")}
          </motion.h1>
          
          {/* Subtitle with text shadow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[480px] md:max-w-[520px] mb-6 sm:mb-8 leading-[1.4] md:leading-[1.5] text-white/90"
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          >
            {t("hero.subtitle")}
          </motion.p>
          
          {/* Trust bullets with inline SVG check icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8 justify-center md:justify-start"
          >
            {[
              { labelKey: "hero.bullet.license", key: "uefa" },
              { labelKey: "hero.bullet.age", key: "age" },
              { labelKey: "hero.bullet.plan", key: "plan" }
            ].map((bullet) => (
              <div key={bullet.key} className="flex items-center gap-2 text-white/90">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                </div>
                <span className="text-sm font-medium">{t(bullet.labelKey)}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollToSection('philosophy')}
              className="btn--primary flex items-center justify-center gap-2 text-base sm:text-lg"
              aria-label={t("hero.cta.learn")}
            >
              {t("hero.cta.learn")}
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="btn--secondary flex items-center justify-center gap-2 text-base sm:text-lg"
              aria-label={t("hero.cta.contact")}
            >
              {t("hero.cta.contact")}
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-white/70 hover:text-primary transition-colors"
        >
          <span className="text-xs sm:text-sm mb-2">{t("hero.scroll")}</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
