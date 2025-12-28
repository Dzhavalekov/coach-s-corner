import { Phone, Mail, MapPin } from "lucide-react";

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
    <section id="contact" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
            Свържи се с мен
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Ако имате въпроси или искате да научите повече за моя подход, 
            не се колебайте да се свържете с мен.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-1">{item.label}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;