import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "За мен", href: "#about" },
    { label: "Опит", href: "#experience" },
    { label: "Услуги", href: "#services" },
    { label: "Контакти", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
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
          {/* Desktop Navigation - Left Side */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => scrollToSection("#contact")}
            >
              Свържи се
            </Button>
          </nav>

          <a
            href="#"
            className={`font-heading font-bold text-xl transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            Coach
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-primary" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-primary" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-background/95 backdrop-blur-sm rounded-lg shadow-lg mb-4 p-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-foreground font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              className="w-full mt-3 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              onClick={() => scrollToSection("#contact")}
            >
              Свържи се
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
