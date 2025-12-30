import { Heart, Shield, Users, TrendingUp } from "lucide-react";
import { memo, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const PhilosophySection = memo(() => {
  const { t } = useLanguage();
  const { ref, isInView } = useIntersectionObserver();

  const principles = useMemo(() => [
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
  ], [t]);

  return (
    <section id="philosophy" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-16">
            <p className="text-primary mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">{t("philosophy.label")}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 sm:mb-6">
              {t("philosophy.title")}
            </h2>
            <p 
              className={`text-base sm:text-lg text-muted-foreground leading-relaxed rounded-lg px-3 py-2 -mx-3 animate-highlight ${isInView ? 'in-view' : ''}`}
            >
              {t("philosophy.intro")}
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`group p-5 sm:p-8 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-200 animate-highlight ${isInView ? 'in-view' : ''}`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-1.5 sm:mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom quote */}
          <div 
            className={`mt-10 sm:mt-16 text-center bg-primary/5 rounded-lg p-4 sm:p-6 animate-highlight ${isInView ? 'in-view' : ''}`}
            style={{ animationDelay: '0.9s' }}
          >
            <p className="text-base sm:text-lg text-muted-foreground italic max-w-2xl mx-auto">
              "{t("philosophy.quote")}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

PhilosophySection.displayName = "PhilosophySection";

export default PhilosophySection;
