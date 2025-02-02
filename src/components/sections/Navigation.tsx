import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const Navigation = ({ lang = "es" }: { lang?: "en" | "es" }) => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const closePanel = () => setIsOpen(false)

  const menuItems = {
    es: {
      inicio: "Inicio",
      promotions: "Giletta Promotions",
      historia: "Mi historia",
      imagenes: "Imágenes"
    },
    en: {
      inicio: "Home",
      historia: "My Story",
      promotions: "Giletta Promotions",
      imagenes: "Images"
    }
  }

  const texts = menuItems[lang]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-sm transition-all duration-300 ease-in-out ${theme === "dark" ? "bg-black/50" : "bg-white/70 backdrop-blur-lg"}`}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="transition-transform transform hover:scale-110">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] transition-transform transform">
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" onClick={closePanel} className="text-center py-2 neon-blue-dark rounded-lg transition-colors duration-300 ease-in-out">
                  {texts.inicio}
                </a>
                <a href="#promotions" onClick={closePanel} className="text-center py-2 neon-blue-dark rounded-lg transition-colors duration-300 ease-in-out">
                  {texts.promotions}
                </a>
                <a href="#about" onClick={closePanel} className="text-center py-2 neon-blue-dark rounded-lg transition-colors duration-300 ease-in-out">
                  {texts.historia}
                </a>
                <a href="#images" onClick={closePanel} className="text-center py-2 neon-blue-dark rounded-lg transition-colors duration-300 ease-in-out">
                  {texts.imagenes}
                </a>
              </div>
                <div className="flex justify-center items-center gap-4 mt-4">
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
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="neon-blue-dark rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out">
              {texts.inicio}
            </a>
            <a href="#promotions" className="neon-blue-dark rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out">
              {texts.promotions}
            </a>
            <a href="#about" className="neon-blue-dark rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out">
              {texts.historia}
            </a>
            <a href="#images" className="neon-blue-dark rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out">
              {texts.imagenes}
            </a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="transition-transform transform hover:scale-110"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform transform hover:rotate-180" />
            ) : (
              <Moon className="h-5 w-5 transition-transform transform hover:rotate-180" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}