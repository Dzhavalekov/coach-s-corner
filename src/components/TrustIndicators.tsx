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
      className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/20"
    >
      {indicators.map((indicator, index) => (
        <div key={indicator.labelKey} className="flex items-center gap-4 sm:gap-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-heading font-semibold text-white" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              {indicator.value}
            </div>
            <div className="text-xs sm:text-sm text-white/80">
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
