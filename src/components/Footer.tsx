import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <img 
          src={logo} 
          alt="Football Academy Logo" 
          className="h-24 md:h-28 w-auto mix-blend-multiply dark:mix-blend-screen dark:invert"
        />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Football Academy. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;