import { Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Любов към играта",
      description: "Вярвам, че страстта към футбола е основата на всеки успех на терена.",
    },
    {
      icon: Target,
      title: "Индивидуален подход",
      description: "Всяко дете е уникално. Адаптирам методите си според нуждите на всеки играч.",
    },
    {
      icon: Users,
      title: "Работа в екип",
      description: "Изграждам не само футболисти, но и характер чрез екипна работа и дисциплина.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            За мен
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
          <div className="max-w-3xl mx-auto space-y-5 text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Футболът за мен не е просто тренировки и мачове. Той е процес, в който децата се учат да вярват в себе си, да работят в екип и да не се отказват, когато стане трудно.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Като треньор се стремя да създавам среда, в която децата се чувстват уверени, мотивирани и разбрани. Работя с ясна структура, внимание към детайла и индивидуален подход към всеки играч.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-4">
              Целта ми е проста – да помагам на децата да се развиват като футболисти и като личности.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
