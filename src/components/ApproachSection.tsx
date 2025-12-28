import { CheckCircle, Clock, Shield, User, MessageCircle } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: Clock,
      title: "Структура и ясност",
      description: "Всяка тренировка има ясен план. Децата знаят какво се очаква от тях и какво ще правим.",
      points: [
        "Загрявка, техника, игра",
        "Последователност в правилата",
        "Ясни инструкции",
      ],
    },
    {
      icon: Shield,
      title: "Безопасност и грижа",
      description: "Физическата и емоционална безопасност на децата е на първо място.",
      points: [
        "Подходящо натоварване",
        "Нулева толерантност към тормоз",
        "Внимание към здравето",
      ],
    },
    {
      icon: User,
      title: "Индивидуално внимание",
      description: "Всяко дете е различно и заслужава внимание, съобразено с неговите нужди.",
      points: [
        "Малки групи",
        "Адаптирани задачи",
        "Лична обратна връзка",
      ],
    },
    {
      icon: MessageCircle,
      title: "Комуникация с родителите",
      description: "Вярвам в откритата комуникация. Винаги съм на разположение за въпроси.",
      points: [
        "Редовна обратна връзка",
        "Достъпност за родителите",
        "Споделяне на напредъка",
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-medium mb-3 uppercase tracking-wide text-sm">Подход</p>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
              Как работя с децата
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Всеки детайл в моята работа е обмислен така, че децата да се 
              чувстват сигурни, мотивирани и подкрепени.
            </p>
          </div>

          {/* Approaches grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-xl border border-border"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <approach.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {approach.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {approach.description}
                </p>
                
                <ul className="space-y-2">
                  {approach.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
