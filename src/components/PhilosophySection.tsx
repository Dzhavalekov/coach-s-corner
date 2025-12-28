import { Heart, Shield, Users, TrendingUp } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    {
      icon: Heart,
      title: "Развитие, не резултати",
      description: "Фокусирам се върху процеса на учене и личния напредък на всяко дете, а не върху победи и загуби.",
    },
    {
      icon: Shield,
      title: "Увереност и самочувствие",
      description: "Създавам среда, в която децата не се страхуват да грешат. Грешките са част от ученето.",
    },
    {
      icon: Users,
      title: "Екипност и уважение",
      description: "Учим се да ценим другите, да работим заедно и да подкрепяме съотборниците си.",
    },
    {
      icon: TrendingUp,
      title: "Дългосрочно мислене",
      description: "Изграждам солидни основи, които ще позволят на децата да се развиват устойчиво с годините.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">Философия</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
              Какво е важно за мен като треньор
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Вярвам, че ролята на треньора не е да създава шампиони, а да създава 
              условия, в които децата могат да растат – не само като футболисти, но и като личности.
            </p>
          </div>

          {/* Principles grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl bg-muted/50 hover:bg-muted transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <principle.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom quote */}
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              "Успехът се измерва не с трофеи, а с това колко детето е израснало като играч и като човек."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
