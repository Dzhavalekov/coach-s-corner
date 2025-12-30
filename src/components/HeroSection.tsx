import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.png";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.05)`,
        }}
      />
      
      {/* Light dark overlay (35-40% opacity) */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.37)' }}
      />
      
      {/* Left-to-right gradient overlay - darker left, lighter right */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 60%, rgba(0, 0, 0, 0.05) 100%)'
        }}
      />
      
      <div className="container mx-auto px-12 md:px-16 lg:px-20 py-24 md:py-28 relative z-10">
        <div className="max-w-[600px] text-center md:text-left">
          {/* Main headline - shorter, stronger */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold md:font-bold leading-[1.1] md:leading-[1.15] mb-6 opacity-0 animate-fade-in max-w-[520px] md:max-w-[600px]" 
            style={{ color: '#FFFFFF', animationDelay: "0.15s", animationDuration: "0.4s", animationFillMode: "forwards" }}
          >
            {t("hero.title")}{" "}
            <span className="text-primary">{t("hero.title.highlight")}</span> {t("hero.title.end")}
          </h1>
          
          {/* Subheadline - explains how */}
          <p 
            className="text-base md:text-lg lg:text-xl max-w-[480px] md:max-w-[520px] mb-10 leading-[1.4] md:leading-[1.5] opacity-0 animate-fade-in" 
            style={{ color: 'rgba(255, 255, 255, 0.85)', animationDelay: "0.35s", animationDuration: "0.4s", animationFillMode: "forwards" }}
          >
            {t("hero.subtitle")}
          </p>
          
          {/* CTAs with hover animations */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="default"
              size="lg" 
              className="font-medium px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30"
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta.learn")}
            </Button>
            <Button 
              variant="default"
              size="lg" 
              className="font-medium px-8 py-6 text-base transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-primary/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.cta.contact")}
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-12 pt-12 border-t border-white/20 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">5+</div>
              <div className="text-sm text-white/70">{t("hero.years")}</div>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">UEFA C</div>
              <div className="text-sm text-white/70">{t("hero.license")}</div>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">5-14</div>
              <div className="text-sm text-white/70">{t("hero.age")}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in z-10" style={{ animationDelay: "0.8s" }}>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-white/70 hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">{t("hero.scroll")}</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
