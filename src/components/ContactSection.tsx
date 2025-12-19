import { Phone, Mail, MapPin, Instagram } from "lucide-react";
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
    {
      icon: Instagram,
      label: "Instagram",
      value: "@coach_football",
      href: "https://instagram.com",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Свържи се с мен
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Готов съм да отговоря на вашите въпроси и да обсъдим как мога 
            да помогна на вашето дете да развие своите футболни умения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-primary-foreground/80">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="secondary"
            className="font-semibold px-8"
            onClick={() => window.location.href = "tel:+359888888888"}
          >
            Обади се сега
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
