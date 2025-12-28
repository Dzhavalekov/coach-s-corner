import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Телефон",
      value: "+359 88 888 8888",
      href: "tel:+359888888888",
    },
    {
      icon: Mail,
      label: "Имейл",
      value: "coach@example.com",
      href: "mailto:coach@example.com",
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "София, България",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">Контакт</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
              Нека поговорим
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Ако имате въпроси за мен, за тренировките или просто искате да 
              разберете дали подходът ми е подходящ за вашето дете – пишете ми 
              или се обадете. Няма ангажимент.
            </p>
          </div>

          {/* Contact cards */}
          <div className="bg-muted rounded-2xl p-8 md:p-12">
            <div className="grid sm:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{item.label}</h3>
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
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-6">
                Предпочитате да пишете? Изпратете ми имейл и ще ви отговоря до 24 часа.
              </p>
              <Button 
                size="lg" 
                className="font-medium px-8"
                onClick={() => window.location.href = 'mailto:coach@example.com'}
              >
                Изпратете имейл
              </Button>
            </div>
          </div>
          
          {/* Closing message */}
          <p className="text-center text-muted-foreground mt-10 text-sm">
            Очаквам с нетърпение да се запознаем!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
