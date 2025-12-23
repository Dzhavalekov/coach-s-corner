import heroImageMobile from "@/assets/hero-coach.png";

const heroImageDesktop = "/images/hero-coach-desktop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Images - Full cover */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <img
          src={heroImageMobile}
          alt="Футболен треньор"
          className="h-full w-full object-cover md:hidden"
          loading="eager"
          decoding="async"
        />
        {/* Desktop */}
        <img
          src={heroImageDesktop}
          alt="Футболен треньор"
          className="hidden md:block h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HeroSection;
