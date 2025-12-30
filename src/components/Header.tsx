import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.philosophy"), href: "#philosophy" },
    { label: t("nav.approach"), href: "#approach" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "bg" ? "en" : "bg");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="transition-transform hover:scale-105"
          >
            <img 
              src={logo} 
              alt="Football Academy Logo" 
              className="h-14 md:h-16 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors font-medium text-sm ${
                  isScrolled 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 font-medium text-sm ${
                isScrolled 
                  ? "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50" 
                  : "border-white/30 text-white/80 hover:text-white hover:border-white/60"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{language === "bg" ? "EN" : "BG"}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Language Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded-full border transition-all duration-200 text-sm ${
                isScrolled 
                  ? "border-border text-muted-foreground" 
                  : "border-white/30 text-white/80"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === "bg" ? "EN" : "BG"}</span>
            </button>
            
            <button
              className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-background border border-border rounded-lg shadow-lg mb-4 p-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-foreground font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;