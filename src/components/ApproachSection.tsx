import { CheckCircle, Clock, User, MessageCircle } from "lucide-react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import coachWithChildImage from "@/assets/coach-with-child.jpg";

const ApproachSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const approaches = [
    {
      icon: Clock,
      title: "Структура и ясност",
      description: "Всяка тренировка има ясен план. Децата знаят какво се очаква от тях.",
      points: [
        "Загрявка, техника, игра",
        "Последователност в правилата",
        "Ясни инструкции",
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

  const headerTexts = [
    "Всеки детайл в моята работа е обмислен така, че децата да се чувстват сигурни, мотивирани и подкрепени.",
  ];

  return (
    <section id="approach" className="py-24 lg:py-32 bg-muted">
      <HeroHighlight containerClassName="h-auto">
        <div className="container mx-auto px-4" ref={ref}>
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-primary mb-3 uppercase tracking-wide text-sm">Подход</p>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6">
                Как работя с децата
              </h2>
              {headerTexts.map((text, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed rounded-lg px-3 py-2"
                  initial={{ backgroundSize: "0% 100%" }}
                  animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeOut", 
                    delay: 0.2 + index * 0.4 
                  }}
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.08), hsl(var(--primary) / 0.12))",
                  }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Main layout: cards on left, image on right */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Cards column - stacked vertically */}
              <div className="flex flex-col gap-4">
                {approaches.map((approach, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-card p-5 rounded-xl border border-border"
                    initial={{ backgroundSize: "0% 100%" }}
                    animate={isInView ? { backgroundSize: "100% 100%" } : { backgroundSize: "0% 100%" }}
                    transition={{ 
                      duration: 1.2, 
                      ease: "easeOut", 
                      delay: 0.6 + index * 0.2 
                    }}
                    style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      backgroundImage: "linear-gradient(to right, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.08))",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <approach.icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-base font-heading font-semibold text-foreground">
                        {approach.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                      {approach.description}
                    </p>
                    
                    <ul className="space-y-1.5">
                      {approach.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Image column - full width */}
              <div className="flex justify-center lg:justify-start order-first lg:order-last">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-4 bg-primary/5 rounded-2xl rotate-1" />
                  <img
                    src={coachWithChildImage}
                    alt="Треньор работи с дете на терена"
                    className="relative w-full h-auto rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
};

export default ApproachSection;