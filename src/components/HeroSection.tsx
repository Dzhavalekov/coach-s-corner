import heroImage from "@/assets/hero-coach-new.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full aspect-[3/2] flex items-center justify-center overflow-hidden">
      {/* Background Image - Full contain to show entire image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Футболен треньор с деца на терена"
          className="h-full w-full object-cover object-[center_20%]"
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
