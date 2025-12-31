import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo, useMemo, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionHeader from "@/components/SectionHeader";
import ContactInfoCard from "@/components/ContactInfoCard";

const ContactSection = memo(() => {
  const { t } = useLanguage();
  const { ref, isInView } = useIntersectionObserver();

  const contactInfo = useMemo(() => [
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+359 88 888 8888",
      href: "tel:+359888888888",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "coach@example.com",
      href: "mailto:coach@example.com",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.location.value"),
      href: null,
    },
  ], [t]);

  const handleEmailClick = useCallback(() => {
    window.location.href = 'mailto:coach@example.com';
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6" ref={ref as React.RefObject<HTMLDivElement>}>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <SectionHeader
            label={t("contact.label")}
            title={t("contact.title")}
            intro={t("contact.intro")}
            introClassName={`max-w-xl mx-auto rounded-lg px-3 py-2 animate-highlight ${isInView ? 'in-view' : ''}`}
            centered
          />

          {/* Contact cards */}
          <div 
            className={`bg-muted rounded-2xl p-6 sm:p-8 md:p-12 animate-highlight ${isInView ? 'in-view' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {contactInfo.map((item, index) => (
                <ContactInfoCard
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  href={item.href}
                />
              ))}
            </div>
            
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border text-center">
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                {t("contact.prefer")}
              </p>
              <Button 
                size="lg" 
                className="px-6 sm:px-8"
                onClick={handleEmailClick}
              >
                {t("contact.send")}
              </Button>
            </div>
          </div>
          
          {/* Closing message */}
          <p className="text-center text-muted-foreground mt-8 sm:mt-10 text-xs sm:text-sm">
            {t("contact.closing")}
          </p>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
