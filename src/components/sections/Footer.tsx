import { useNavigate } from "react-router-dom";

interface FooterProps {
  lang?: string;
}

export const Footer = ({ lang }: FooterProps) => {
  const navigate = useNavigate();
  
  return (
    <footer className="bg-background/50 backdrop-blur-sm py-8 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate("/es")}
              className={`text-sm font-medium hover:text-primary transition-colors ${lang === "es" ? "text-primary" : "text-black dark:text-foreground"}`}
            >
              Español
            </button>
            <button 
              onClick={() => navigate("/en")}
              className={`text-sm font-medium hover:text-primary transition-colors ${lang === "en" ? "text-primary" : "text-black dark:text-foreground"}`}
            >
              English
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-black dark:text-muted-foreground">
            <p>© 2025 Giletta Promotions LLC</p>
            <button
              onClick={() => window.location.href = 'https://naiam.studio'}
              className="text-sm font-medium text-black dark:text-foreground hover:text-primary transition-colors underline"
            >
              {lang === 'en' ? 'Developed by Naiam Studio' : 'Desarrollado por Naiam Studio'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};