import { Award, GraduationCap, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "UEFA C Лиценз",
      description: "Сертифициран треньор с валиден UEFA C лиценз",
    },
    {
      icon: Calendar,
      title: "5+ години опит",
      description: "Опит в работата с деца от различни възрастови групи",
    },
    {
      icon: Award,
      title: "FC Bucephal",
      description: "Треньор в детско-юношеска школа",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            Опит и квалификации
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {qualifications.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg shadow-sm border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-heading font-semibold text-primary mb-4 text-center">
            Моят подход
          </h3>
          <p className="text-muted-foreground text-center leading-relaxed">
            Работя с деца на възраст от 5 до 14 години, като се фокусирам върху 
            техническото им развитие, тактическо мислене и физическа подготовка. 
            Вярвам, че всяка тренировка трябва да бъде едновременно образователна 
            и забавна, за да поддържа мотивацията и ентусиазма на младите играчи.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
