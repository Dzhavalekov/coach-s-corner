import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const contactInfo = [
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
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <HeroHighlight containerClassName="h-auto">
        <div className="container mx-auto px-4" ref={ref}>
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-primary mb-3 uppercase tracking-wide text-sm">{t("contact.label")}</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                {t("contact.title")}
              </h2>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto rounded-lg px-3 py-2"
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
                {t("contact.intro")}
              </motion.p>
            </div>

            {/* Contact cards */}
            <motion.div 
              className="bg-muted rounded-2xl p-8 md:p-12"
              initial={{ backgroundSize: "0% 100%" }}
              animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut", 
                delay: 0.6 
              }}
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.08))",
              }}
            >
              <div className="grid sm:grid-cols-3 gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeOut", 
                      delay: 0.8 + index * 0.2 
                    }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-foreground mb-2">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-10 pt-8 border-t border-border text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeOut", 
                  delay: 1.4 
                }}
              >
                <p className="text-muted-foreground mb-6">
                  {t("contact.prefer")}
                </p>
                <Button 
                  size="lg" 
                  className="px-8"
                  onClick={() => window.location.href = 'mailto:coach@example.com'}
                >
                  {t("contact.send")}
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Closing message */}
            <motion.p 
              className="text-center text-muted-foreground mt-10 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut", 
                delay: 1.6 
              }}
            >
              {t("contact.closing")}
            </motion.p>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default ContactSection;
