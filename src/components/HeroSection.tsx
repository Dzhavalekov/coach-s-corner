import { ArrowDown, Lightbulb, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo, useCallback, memo } from "react";
import heroBackground from "@/assets/hero-background.png";
import { useLanguage } from "@/contexts/LanguageContext";
import TrustIndicators from "@/components/TrustIndicators";

// Animation variants with reduced motion support
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const trustBullets = [
  { key: "hero.bullet.license" },
  { key: "hero.bullet.age" },
  { key: "hero.bullet.plan" },
];

const HeroSection = memo(() => {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

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

  // Animation helper - returns instant values if reduced motion preferred
  const getAnimationProps = (delay: number) => {
    if (prefersReducedMotion) {
      return { initial: { opacity: 1, y: 0 } };
    }
    return {
      initial: "hidden",
      animate: "visible",
      custom: delay,
      variants: fadeUpVariant,
    };
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with optimized parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={parallaxStyle}
      />
      
      {/* Enhanced gradient overlay - stronger on left, fading to right */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20"
      />
      {/* Additional vertical gradient for bottom contrast */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
      />
      
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-20 py-20 md:py-28 relative z-10">
        <div className="max-w-[600px] text-center md:text-left">
          
          {/* Eyebrow label */}
          <motion.div
            {...getAnimationProps(0)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6"
          >
            <span className="text-xs sm:text-sm font-medium text-primary tracking-wide uppercase">
              {t("hero.eyebrow")}
            </span>
          </motion.div>

          {/* Main headline with text shadow */}
          <motion.h1
            {...getAnimationProps(0.12)}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold md:font-bold leading-[1.15] md:leading-[1.2] mb-5 sm:mb-6 max-w-[520px] md:max-w-[600px] text-white"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            {t("hero.title")}{" "}
            <span className="text-primary" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              {t("hero.title.highlight")}
            </span>{" "}
            {t("hero.title.end")}
          </motion.h1>
          
          {/* Subheadline with text shadow */}
          <motion.p
            {...getAnimationProps(0.24)}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[480px] md:max-w-[520px] mb-6 sm:mb-8 leading-[1.5] md:leading-[1.6] text-white/90"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Trust bullets */}
          <motion.div
            {...getAnimationProps(0.36)}
            className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 justify-center md:justify-start"
          >
            {trustBullets.map((bullet) => (
              <div
                key={bullet.key}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 border border-primary/40">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm sm:text-base font-medium">
                  {t(bullet.key)}
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* CTAs: Primary (solid) and Secondary (outline) */}
          <motion.div
            {...getAnimationProps(0.48)}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            {/* Primary CTA - solid accent color */}
            <motion.button
              onClick={() => scrollToSection('philosophy')}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="relative rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              aria-label={t("hero.cta.learn")}
            >
              <Lightbulb className="w-5 h-5" />
              {t("hero.cta.learn")}
            </motion.button>

            {/* Secondary CTA - outline style */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={prefersReducedMotion ? {} : { scale: 1.03, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              className="relative rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              aria-label={t("hero.cta.contact")}
            >
              <Mail className="w-5 h-5" />
              {t("hero.cta.contact")}
            </motion.button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div {...getAnimationProps(0.6)}>
            <TrustIndicators />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        {...getAnimationProps(0.72)}
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
