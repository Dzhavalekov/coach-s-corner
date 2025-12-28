import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in"
          >
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-sm text-muted-foreground font-medium">Детско-юношески футбол в София</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-semibold text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Помагам на децата да растат{" "}
            <span className="text-primary">уверени</span>, силни и{" "}
            <span className="text-primary">щастливи</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.2s" }}
          >
            Футболът е повече от игра – той учи децата на дисциплина, работа в екип 
            и вяра в себе си. Тук изграждаме характер в сигурна и подкрепяща среда.
          </p>
          
          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
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
              className="font-medium px-8 py-6 text-base"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Свържи се с мен
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div 
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-12 border-t border-border/50 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">години опит</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-foreground">UEFA C</div>
              <div className="text-sm text-muted-foreground">лиценз</div>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl font-heading font-semibold text-foreground">5-14</div>
              <div className="text-sm text-muted-foreground">години възраст</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
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
