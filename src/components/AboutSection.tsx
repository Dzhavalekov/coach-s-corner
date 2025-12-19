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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            За мен
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Като треньор по футбол, моята мисия е да развивам млади играчи не само технически, 
            но и като личности. Фокусирам се върху изграждането на здрава основа от умения, 
            самодисциплина и любов към спорта.
          </p>
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
