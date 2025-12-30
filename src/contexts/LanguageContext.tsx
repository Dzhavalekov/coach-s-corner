import { createContext, useContext, useState, ReactNode, useMemo, useCallback } from "react";

type Language = "bg" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  bg: {
    // Header
    "nav.about": "За мен",
    "nav.philosophy": "Философия",
    "nav.approach": "Как работя",
    "nav.contact": "Контакти",
    
    // Hero
    "hero.title": "Помагам на децата да растат",
    "hero.title.highlight": "уверени",
    "hero.title.end": "и щастливи чрез футбола",
    "hero.subtitle": "Футболът е повече от игра – той учи децата на дисциплина, работа в екип и вяра в себе си, в сигурна и подкрепяща среда.",
    "hero.cta.learn": "Научи повече за моя подход",
    "hero.cta.contact": "Свържи се с мен",
    "hero.years": "години опит",
    "hero.license": "лиценз",
    "hero.age": "години възраст",
    "hero.scroll": "Разгледай",
    
    // About
    "about.title": "За мен",
    "about.p1": "За мен футболът не е просто спорт, а начин децата да изградят увереност, характер и любов към движението.",
    "about.p2": "Всяка тренировка е възможност детето да се почувства чуто, подкрепено и мотивирано да даде най-доброто от себе си – без напрежение и страх от грешки.",
    "about.p3": "Работя с ясна структура, внимание към детайла и индивидуален подход към всяко дете.",
    "about.p4": "Родителите могат да очакват спокойна, подкрепяща среда и открита комуникация, в която развитието на детето е на първо място.",
    "about.quote": "Когато едно дете се чувства разбрано и подкрепено, то е способно на всичко.",
    
    // Philosophy
    "philosophy.label": "Философия",
    "philosophy.title": "Какво е важно за мен като треньор",
    "philosophy.intro": "Вярвам, че ролята на треньора не е да създава шампиони, а да създава условия, в които децата могат да растат – не само като футболисти, но и като личности.",
    "philosophy.development.title": "Развитие, не резултати",
    "philosophy.development.desc": "Фокусирам се върху процеса на учене и личния напредък на всяко дете, а не върху победи и загуби.",
    "philosophy.confidence.title": "Увереност и самочувствие",
    "philosophy.confidence.desc": "Създавам среда, в която децата не се страхуват да грешат. Грешките са част от ученето.",
    "philosophy.teamwork.title": "Екипност и уважение",
    "philosophy.teamwork.desc": "Учим се да ценим другите, да работим заедно и да подкрепяме съотборниците си.",
    "philosophy.longterm.title": "Дългосрочно мислене",
    "philosophy.longterm.desc": "Изграждам солидни основи, които ще позволят на децата да се развиват устойчиво с годините.",
    "philosophy.quote": "Успехът се измерва не с трофеи, а с това колко детето е израснало като играч и като човек.",
    
    // Approach
    "approach.label": "Подход",
    "approach.title": "Как работя с децата",
    "approach.intro": "Всеки детайл в моята работа е обмислен така, че децата да се чувстват сигурни, мотивирани и подкрепени.",
    "approach.structure.title": "Структура и ясност",
    "approach.structure.desc": "Всяка тренировка има ясен план. Децата знаят какво се очаква от тях.",
    "approach.structure.p1": "Загрявка, техника, игра",
    "approach.structure.p2": "Последователност в правилата",
    "approach.structure.p3": "Ясни инструкции",
    "approach.individual.title": "Индивидуално внимание",
    "approach.individual.desc": "Всяко дете е различно и заслужава внимание, съобразено с неговите нужди.",
    "approach.individual.p1": "Малки групи",
    "approach.individual.p2": "Адаптирани задачи",
    "approach.individual.p3": "Лична обратна връзка",
    "approach.communication.title": "Комуникация с родителите",
    "approach.communication.desc": "Вярвам в откритата комуникация. Винаги съм на разположение за въпроси.",
    "approach.communication.p1": "Редовна обратна връзка",
    "approach.communication.p2": "Достъпност за родителите",
    "approach.communication.p3": "Споделяне на напредъка",
    
    // Contact
    "contact.label": "Контакт",
    "contact.title": "Нека поговорим",
    "contact.intro": "Ако имате въпроси за мен, за тренировките или просто искате да разберете дали подходът ми е подходящ за вашето дете – пишете ми или се обадете. Няма ангажимент.",
    "contact.phone": "Телефон",
    "contact.email": "Имейл",
    "contact.location": "Локация",
    "contact.location.value": "София, България",
    "contact.prefer": "Предпочитате да пишете? Изпратете ми имейл и ще ви отговоря до 24 часа.",
    "contact.send": "Изпратете имейл",
    "contact.closing": "Очаквам с нетърпение да се запознаем!",
    
    // Footer
    "footer.rights": "Всички права запазени.",
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.philosophy": "Philosophy",
    "nav.approach": "How I Work",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Helping children grow",
    "hero.title.highlight": "confident",
    "hero.title.end": "and happy through football",
    "hero.subtitle": "Football is more than a game – it teaches children discipline, teamwork, and self-belief in a safe and supportive environment.",
    "hero.cta.learn": "Learn more about my approach",
    "hero.cta.contact": "Get in touch",
    "hero.years": "years experience",
    "hero.license": "license",
    "hero.age": "years age range",
    "hero.scroll": "Explore",
    
    // About
    "about.title": "About Me",
    "about.p1": "For me, football is not just a sport, but a way for children to build confidence, character, and a love for movement.",
    "about.p2": "Every training session is an opportunity for the child to feel heard, supported, and motivated to give their best – without pressure or fear of mistakes.",
    "about.p3": "I work with a clear structure, attention to detail, and an individual approach to each child.",
    "about.p4": "Parents can expect a calm, supportive environment and open communication where the child's development comes first.",
    "about.quote": "When a child feels understood and supported, they are capable of anything.",
    
    // Philosophy
    "philosophy.label": "Philosophy",
    "philosophy.title": "What matters to me as a coach",
    "philosophy.intro": "I believe the role of a coach is not to create champions, but to create conditions where children can grow – not just as footballers, but as individuals.",
    "philosophy.development.title": "Development, not results",
    "philosophy.development.desc": "I focus on the learning process and personal progress of each child, not on wins and losses.",
    "philosophy.confidence.title": "Confidence and self-esteem",
    "philosophy.confidence.desc": "I create an environment where children are not afraid to make mistakes. Mistakes are part of learning.",
    "philosophy.teamwork.title": "Teamwork and respect",
    "philosophy.teamwork.desc": "We learn to value others, work together, and support our teammates.",
    "philosophy.longterm.title": "Long-term thinking",
    "philosophy.longterm.desc": "I build solid foundations that will allow children to develop sustainably over the years.",
    "philosophy.quote": "Success is measured not by trophies, but by how much the child has grown as a player and as a person.",
    
    // Approach
    "approach.label": "Approach",
    "approach.title": "How I work with children",
    "approach.intro": "Every detail in my work is designed to make children feel safe, motivated, and supported.",
    "approach.structure.title": "Structure and clarity",
    "approach.structure.desc": "Every training session has a clear plan. Children know what is expected of them.",
    "approach.structure.p1": "Warm-up, technique, game",
    "approach.structure.p2": "Consistency in rules",
    "approach.structure.p3": "Clear instructions",
    "approach.individual.title": "Individual attention",
    "approach.individual.desc": "Every child is different and deserves attention tailored to their needs.",
    "approach.individual.p1": "Small groups",
    "approach.individual.p2": "Adapted tasks",
    "approach.individual.p3": "Personal feedback",
    "approach.communication.title": "Communication with parents",
    "approach.communication.desc": "I believe in open communication. I'm always available for questions.",
    "approach.communication.p1": "Regular feedback",
    "approach.communication.p2": "Accessibility for parents",
    "approach.communication.p3": "Sharing progress",
    
    // Contact
    "contact.label": "Contact",
    "contact.title": "Let's talk",
    "contact.intro": "If you have questions about me, about the training sessions, or just want to find out if my approach is right for your child – write to me or call. No obligation.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.location": "Location",
    "contact.location.value": "Sofia, Bulgaria",
    "contact.prefer": "Prefer to write? Send me an email and I'll respond within 24 hours.",
    "contact.send": "Send email",
    "contact.closing": "I look forward to meeting you!",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("bg");

  const t = useCallback((key: string): string => {
    return translations[language][key] || key;
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
