import { CheckCircle, Clock, User, MessageCircle } from "lucide-react";
import { memo, useMemo } from "react";
import coachWithChildImage from "@/assets/coach-with-child.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";

const ApproachSection = memo(() => {
  const { t } = useLanguage();
  const { ref, isInView } = useIntersectionObserver();

  const approaches = useMemo(() => [
    {
      icon: Clock,
      title: t("approach.structure.title"),
      description: t("approach.structure.desc"),
      points: [
        t("approach.structure.p1"),
        t("approach.structure.p2"),
        t("approach.structure.p3"),
      ],
    },
    {
      icon: User,
      title: t("approach.individual.title"),
      description: t("approach.individual.desc"),
      points: [
        t("approach.individual.p1"),
        t("approach.individual.p2"),
        t("approach.individual.p3"),
      ],
    },
    {
      icon: MessageCircle,
      title: t("approach.communication.title"),
      description: t("approach.communication.desc"),
      points: [
        t("approach.communication.p1"),
        t("approach.communication.p2"),
        t("approach.communication.p3"),
      ],
    },
  ], [t]);

  return (
    <section id="approach" className="py-16 sm:py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <SectionHeader
            label={t("approach.label")}
            title={t("approach.title")}
            intro={t("approach.intro")}
            introClassName={`rounded-lg px-3 py-2 animate-highlight ${isInView ? 'in-view' : ''}`}
            centered
          />

          {/* Main layout: cards on left, image on right */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-stretch">
            {/* Cards column - stacked vertically */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {approaches.map((approach, index) => (
                <div 
                  key={index} 
                  className={`bg-card p-4 sm:p-5 rounded-xl border border-border animate-highlight ${isInView ? 'in-view' : ''}`}
                  style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <approach.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base font-heading font-semibold text-foreground">
                      {approach.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                    {approach.description}
                  </p>
                  
                  <ul className="space-y-1 sm:space-y-1.5">
                    {approach.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Image column */}
            <div className="flex justify-center lg:justify-start order-first lg:order-last h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <div className="relative w-full h-full">
                <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-2xl rotate-1" />
                <img
                  src={coachWithChildImage}
                  alt="Треньор работи с дете"
                  className="relative w-full h-full rounded-2xl shadow-lg object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ApproachSection.displayName = "ApproachSection";

export default ApproachSection;
