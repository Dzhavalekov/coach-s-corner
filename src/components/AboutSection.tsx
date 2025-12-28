const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-8 text-center lg:text-left">
            За мен
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Казвам се [Име] и от над 5 години работя с деца като футболен треньор. 
              Притежавам UEFA C лиценз и съм част от детско-юношеската школа на FC Bucephal.
            </p>
            
            <p>
              За мен футболът е много повече от спорт. Това е среда, в която децата 
              се учат да се справят с предизвикателства, да работят заедно и да 
              развиват качества, които ще им служат през целия живот.
            </p>
            
            <p>
              Работя с деца на възраст от 5 до 14 години. Независимо дали детето 
              ви прави първите си стъпки във футбола или вече има опит, моята цел 
              е една – да се чувства добре, да се развива и да обича играта.
            </p>
            
            <p className="text-foreground font-medium border-l-4 border-primary pl-6">
              Вярвам, че когато едно дете се чувства разбрано и подкрепено, 
              то е способно на всичко.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;