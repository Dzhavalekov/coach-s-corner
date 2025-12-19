const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground/70 text-sm">
          © {new Date().getFullYear()} Football Coach. Всички права запазени.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
