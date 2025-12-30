import { Heart, Shield, Users, TrendingUp } from "lucide-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const principles = [
    {
      icon: Heart,
      title: t("philosophy.development.title"),
      description: t("philosophy.development.desc"),
    },
    {
      icon: Shield,
      title: t("philosophy.confidence.title"),
      description: t("philosophy.confidence.desc"),
    },
    {
      icon: Users,
      title: t("philosophy.teamwork.title"),
      description: t("philosophy.teamwork.desc"),
    },
    {
      icon: TrendingUp,
      title: t("philosophy.longterm.title"),
      description: t("philosophy.longterm.desc"),
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-background">
      <HeroHighlight containerClassName="h-auto">
        <div className="container mx-auto px-4" ref={ref}>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mb-16">
              <p className="text-primary mb-3 uppercase tracking-wide text-sm">{t("philosophy.label")}</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                {t("philosophy.title")}
              </h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed rounded-lg px-3 py-2 -mx-3"
                initial={{ backgroundSize: "0% 100%" }}
                animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut", 
                  delay: 0.2 
                }}
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                }}
              >
                {t("philosophy.intro")}
              </motion.p>
            </div>

            {/* Principles grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className="group p-8 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeOut", 
                    delay: 0.6 + index * 0.3 
                  }}
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.08))",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom quote */}
            <motion.div 
              className="mt-16 text-center"
              initial={{ backgroundSize: "0% 100%" }}
              animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut", 
                delay: 1.8 
              }}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                borderRadius: "0.5rem",
                padding: "1rem",
              }}
            >
              <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
                "{t("philosophy.quote")}"
              </p>
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default PhilosophySection;
