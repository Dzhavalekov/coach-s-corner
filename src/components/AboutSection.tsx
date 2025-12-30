import heroImage from "@/assets/hero-coach-new.jpg";
import { memo, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = memo(() => {
  const { t } = useLanguage();
  const { ref, isInView } = useIntersectionObserver();

  const paragraphs = useMemo(() => [
    t("about.p1"),
    t("about.p2"),
    t("about.p3"),
    t("about.p4"),
  ], [t]);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-2xl -rotate-3" />
              <img
                src={heroImage}
                alt="Футболен треньор"
                className="relative w-56 sm:w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-lg object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2" ref={ref as React.RefObject<HTMLDivElement>}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 sm:mb-8">
              {t("about.title")}
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={`text-muted-foreground rounded-lg px-3 py-2 -mx-3 animate-highlight ${isInView ? 'in-view' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {text}
                </p>
              ))}
            </div>
            
            <blockquote 
              className={`mt-6 sm:mt-8 border-l-4 border-primary pl-4 sm:pl-6 py-2 rounded-r-lg animate-highlight ${isInView ? 'in-view' : ''}`}
              style={{ animationDelay: `${paragraphs.length * 0.2}s` }}
            >
              <p className="text-foreground text-base sm:text-lg italic">
                "{t("about.quote")}"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
