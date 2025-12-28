import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image with blur and desaturation */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          filter: 'blur(2px) saturate(0.95)',
        }}
      />
      
      {/* Dark overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.35) 100%)'
        }}
      />
      
      <div className="container mx-auto px-16 md:px-20 py-24 md:py-28 relative z-10">
        <div className="max-w-[600px] text-left md:text-left text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-white/85 font-medium">Детско-юношески футбол в София</span>
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold md:font-bold leading-[1.1] md:leading-[1.15] mb-6 opacity-0 animate-fade-in max-w-[520px] md:max-w-[600px]" 
            style={{ color: '#FFFFFF', animationDelay: "0.1s" }}
          >
            Помагам на децата да растат{" "}
            <span className="text-primary">уверени</span>, силни и{" "}
            <span className="text-primary">щастливи</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-base md:text-lg lg:text-xl max-w-[480px] md:max-w-[520px] mb-10 leading-[1.4] md:leading-[1.5] opacity-0 animate-fade-in" 
            style={{ color: 'rgba(255, 255, 255, 0.85)', animationDelay: "0.2s" }}
          >
            Футболът е повече от игра – той учи децата на дисциплина, работа в екип 
            и вяра в себе си. Тук изграждаме характер в сигурна и подкрепяща среда.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button 
              variant="default"
              size="lg" 
              className="font-medium px-8 py-6 text-base"
              onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Научи повече за моя подход
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="font-medium px-8 py-6 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Свържи се с мен
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-12 pt-12 border-t border-white/20 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">5+</div>
              <div className="text-sm text-white/70">години опит</div>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">UEFA C</div>
              <div className="text-sm text-white/70">лиценз</div>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-white">5-14</div>
              <div className="text-sm text-white/70">години възраст</div>
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
          <span className="text-sm mb-2">Разгледай</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
