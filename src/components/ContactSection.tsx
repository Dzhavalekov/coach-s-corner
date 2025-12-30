import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { memo, useMemo, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = memo(() => {
  const { t } = useLanguage();

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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-primary mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">{t("contact.label")}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 sm:mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {t("contact.intro")}
            </p>
          </div>

          {/* Contact cards */}
          <div className="bg-muted rounded-2xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-foreground text-sm sm:text-base mb-1 sm:mb-2">{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.value}</p>
                  )}
                </div>
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
