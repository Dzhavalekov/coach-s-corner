import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TrustIndicator {
  value: string;
  labelKey: string;
}

const indicators: TrustIndicator[] = [
  { value: "5+", labelKey: "hero.years" },
  { value: "UEFA C", labelKey: "hero.license" },
  { value: "5-14", labelKey: "hero.age" },
];

const TrustIndicators = memo(() => {
  const { t } = useLanguage();

  return (
    <div 
      className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/20 opacity-0 animate-fade-in"
      style={{ animationDelay: "0.35s", animationDuration: "0.3s", animationFillMode: "forwards" }}
    >
      {indicators.map((indicator, index) => (
        <div key={indicator.labelKey} className="flex items-center gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-heading font-semibold text-white">
              {indicator.value}
            </div>
            <div className="text-xs sm:text-sm text-white/70">
              {t(indicator.labelKey)}
            </div>
          </div>
          {index < indicators.length - 1 && (
            <div className="w-px h-8 sm:h-10 bg-white/30 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
});

TrustIndicators.displayName = "TrustIndicators";

export default TrustIndicators;
