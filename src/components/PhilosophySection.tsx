import { Heart, Shield, Users, TrendingUp } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: Heart,
      title: "Развитие, не резултати",
      description: "Фокусирам се върху процеса на учене и личния напредък на всяко дете, а не върху победи и загуби. Успехът се измерва с това колко детето е израснало като играч и като човек.",
    },
    {
      icon: Shield,
      title: "Увереност и самочувствие",
      description: "Създавам среда, в която децата не се страхуват да грешат. Грешките са част от ученето, а всяко усилие заслужава признание.",
    },
    {
      icon: Users,
      title: "Екипност и уважение",
      description: "Учим се да ценим другите, да работим заедно и да подкрепяме съотборниците си. Тези умения надхвърлят футболния терен.",
    },
    {
      icon: TrendingUp,
      title: "Дългосрочно мислене",
      description: "Не търся бързи резултати. Изграждам солидни основи, които ще позволят на децата да се развиват устойчиво с годините.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
            Моята философия
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Вярвам, че ролята на треньора е да създаде условия, в които децата 
            могат да растат – не само като футболисти, но и като личности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {principle.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;