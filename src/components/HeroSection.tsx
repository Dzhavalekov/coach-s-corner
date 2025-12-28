import heroImage from "@/assets/hero-coach-new.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-background">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content - Main Focus */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight mb-6 opacity-0 animate-fade-in">
              Помагам на децата да растат уверени, силни и щастливи
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
            >
              Футболът е повече от игра – това е начин да научим децата на дисциплина, 
              работа в екип и вяра в себе си. Заедно изграждаме характер.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
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
                className="font-medium px-8 py-6 text-base border-primary/30 text-primary hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Свържи се с мен
              </Button>
            </div>
          </div>
          
          {/* Image - Secondary, Supporting Visual */}
          <div 
            className="lg:col-span-5 flex justify-center lg:justify-end opacity-0 animate-fade-in-slow"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-110" />
              <img
                src={heroImage}
                alt="Треньор по футбол"
                className="relative w-full h-auto rounded-full shadow-lg object-cover aspect-square"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Разгледай</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;