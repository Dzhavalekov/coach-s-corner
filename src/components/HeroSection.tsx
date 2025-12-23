import heroImage from "@/assets/hero-coach-new.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Full contain to show entire image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Футболен треньор с деца на терена"
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
};

export default HeroSection;
