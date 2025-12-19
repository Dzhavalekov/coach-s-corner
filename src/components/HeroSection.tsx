import heroImage from "@/assets/hero-coach-v2.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Hero image (sharp, fully visible) + blurred fill behind it */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Football coach guiding young players on the field"
          className="absolute inset-0 h-full w-full object-cover scale-110 blur-md"
          loading="eager"
        />
        <img
          src={heroImage}
          alt="Football coach with young players"
          className="absolute inset-0 h-full w-full object-contain"
          loading="eager"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-in">
          Футболен треньор
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Развивам млади таланти чрез индивидуален подход, 
          дисциплина и любов към играта
        </p>
        <Button 
          size="lg" 
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-lg animate-fade-in"
          style={{ animationDelay: "0.4s" }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Свържи се с мен
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
