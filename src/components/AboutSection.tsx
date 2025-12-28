import heroImage from "@/assets/hero-coach-new.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -rotate-3" />
              <img
                src={heroImage}
                alt="Футболен треньор"
                className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-lg object-cover aspect-[4/5]"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8">
              За мен
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Казвам се [Име] и от над 5 години работя с деца като футболен треньор. 
                Притежавам UEFA C лиценз и съм част от детско-юношеската школа на FC Bucephal.
              </p>
              
              <p>
                <strong className="text-foreground">Защо работя с деца?</strong> Защото вярвам, че 
                това е възрастта, в която се изграждат най-важните качества – упоритост, честност, 
                умение да се справяш с трудности и да работиш с другите.
              </p>
              
              <p>
                Футболът е само средството. Истинската ми цел е всяко дете да се чувства 
                по-уверено в себе си – на терена и извън него.
              </p>
              
              <p>
                Работя с деца на възраст от 5 до 14 години. Независимо дали детето ви 
                прави първите си стъпки във футбола или вече има опит, подходът ми е един – 
                търпение, внимание и уважение.
              </p>
            </div>
            
            <blockquote className="mt-8 border-l-4 border-primary pl-6 py-2">
              <p className="text-foreground font-medium text-lg italic">
                "Когато едно дете се чувства разбрано и подкрепено, 
                то е способно на всичко."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
