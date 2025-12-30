import heroImage from "@/assets/hero-coach-new.jpg";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const paragraphs = [
    t("about.p1"),
    t("about.p2"),
    t("about.p3"),
    t("about.p4"),
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <HeroHighlight containerClassName="h-auto">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-3" />
                <img
                  src={heroImage}
                  alt="Футболен треньор Илиян Джавалеков"
                  className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-lg object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2" ref={ref}>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
                {t("about.title")}
              </h2>
              
              <div className="space-y-5 text-lg leading-relaxed">
                {paragraphs.map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-muted-foreground rounded-lg px-3 py-2 -mx-3"
                    initial={{ backgroundSize: "0% 100%" }}
                    animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut", 
                      delay: 0.2 + index * 0.4 
                    }}
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                    }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
              
              <motion.blockquote 
                className="mt-8 border-l-4 border-primary pl-6 py-2 rounded-r-lg"
                initial={{ backgroundSize: "0% 100%" }}
                animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut", 
                  delay: 0.2 + paragraphs.length * 0.4 
                }}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                }}
              >
                <p className="text-foreground text-lg italic">
                  "{t("about.quote")}"
                </p>
              </motion.blockquote>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default AboutSection;
