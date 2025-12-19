import { User, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Индивидуални тренировки",
      description: "Персонализирани сесии за развитие на конкретни умения",
      features: [
        "Техника и контрол на топката",
        "Подобряване на слабите страни",
        "Гъвкав график",
        "Персонализиран план за развитие",
      ],
    },
    {
      icon: Users,
      title: "Групови тренировки",
      description: "Развитие на екипни умения в малки групи",
      features: [
        "Групи до 8 деца",
        "Екипна игра и тактика",
        "Състезателен дух",
        "Социални умения",
      ],
    },
    {
      icon: Zap,
      title: "Интензивни лагери",
      description: "Кратък интензивен курс за бързо развитие",
      features: [
        "Ваканционни програми",
        "Фокус върху основите",
        "Игри и забавление",
        "Изграждане на приятелства",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Услуги
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Предлагам разнообразни програми за обучение, подходящи за деца 
            на различни нива и с различни цели
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading text-primary">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
