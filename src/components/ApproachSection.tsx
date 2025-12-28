import { CheckCircle } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      title: "Структура и ясност",
      points: [
        "Всяка тренировка има ясен план и цели",
        "Децата знаят какво се очаква от тях",
        "Последователност в правилата и подхода",
      ],
    },
    {
      title: "Безопасност и грижа",
      points: [
        "Физическа безопасност на първо място",
        "Емоционално сигурна среда без тормоз",
        "Внимание към здравето и натоварването",
      ],
    },
    {
      title: "Индивидуално внимание",
      points: [
        "Работа с малки групи за повече внимание",
        "Адаптиране на задачите към нивото на детето",
        "Лична обратна връзка и насърчение",
      ],
    },
    {
      title: "Комуникация с родителите",
      points: [
        "Открит диалог за напредъка на детето",
        "Достъпност за въпроси и притеснения",
        "Споделяне на наблюдения и препоръки",
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
            Как работя с децата
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Всеки детайл в моята работа е обмислен така, че децата да се 
            чувстват сигурни, мотивирани и подкрепени.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto">
          {approaches.map((approach, index) => (
            <div key={index}>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-5">
                {approach.title}
              </h3>
              <ul className="space-y-3">
                {approach.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;