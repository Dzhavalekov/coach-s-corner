import heroImage from "@/assets/hero-coach-new.jpg";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                За мен
              </h2>
              
              <motion.div 
                className="space-y-5 text-lg leading-relaxed"
                initial={{ backgroundSize: "0% 100%" }}
                animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                }}
              >
                <p className="text-muted-foreground">
                  Казвам се <strong className="text-foreground">Илиян Джавалеков</strong> и от над 5 години работя с деца като футболен треньор. 
                  Притежавам UEFA C лиценз и съм част от детско-юношеската школа на FC Bucephal.
                </p>
                
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Защо работя с деца?</strong> Защото вярвам, че 
                  това е възрастта, в която се изграждат най-важните качества – упоритост, честност, 
                  умение да се справяш с трудности и да работиш с другите.
                </p>
                
                <p className="text-muted-foreground">
                  Футболът е само средството. Истинската ми цел е всяко дете да се чувства 
                  по-уверено в себе си – на терена и извън него.
                </p>
                
                <p className="text-muted-foreground">
                  Работя с деца на възраст от 5 до 14 години. Независимо дали детето ви 
                  прави първите си стъпки във футбола или вече има опит, подходът ми е един – 
                  търпение, внимание и уважение.
                </p>
              </motion.div>
              
              <blockquote className="mt-8 border-l-4 border-primary pl-6 py-2">
                <p className="text-foreground font-medium text-lg italic">
                  "Когато едно дете се чувства разбрано и подкрепено, 
                  то е способно на всичко."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default AboutSection;
