import { memo } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  intro?: string;
  introClassName?: string;
  centered?: boolean;
}

const SectionHeader = memo(({ 
  label, 
  title, 
  intro, 
  introClassName = "",
  centered = false 
}: SectionHeaderProps) => {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-10 sm:mb-16`}>
      {label && (
        <p className="text-primary mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">
          {label}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 sm:mb-6">
        {title}
      </h2>
      {intro && (
        <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed ${introClassName}`}>
          {intro}
        </p>
      )}
    </div>
  );
});

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
