import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string | null;
}

const ContactInfoCard = memo(({ icon: Icon, label, value, href }: ContactInfoCardProps) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <h3 className="text-foreground text-sm sm:text-base mb-1 sm:mb-2">{label}</h3>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground text-xs sm:text-sm">{value}</p>
      )}
    </div>
  );
});

ContactInfoCard.displayName = "ContactInfoCard";

export default ContactInfoCard;
