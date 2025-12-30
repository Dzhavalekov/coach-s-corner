import logo from "@/assets/logo.png";
import { memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = memo(() => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 sm:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 sm:gap-6">
        <img 
          src={logo} 
          alt="Football Academy Logo" 
          className="h-16 sm:h-20 md:h-24 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
          loading="lazy"
        />
        <p className="text-muted-foreground text-xs sm:text-sm text-center">
          © {new Date().getFullYear()} Football Academy. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;