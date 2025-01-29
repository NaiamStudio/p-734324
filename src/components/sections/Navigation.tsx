import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export const Navigation = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-sm bg-black/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-black/95">
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="text-white hover:text-primary text-center py-2">
                  Inicio
                </a>
                <a href="#about" className="text-white hover:text-primary text-center py-2">
                  Mi historia
                </a>
                <a href="#promotions" className="text-white hover:text-primary text-center py-2">
                  Giletta Promotions
                </a>
                <a href="#records" className="text-white hover:text-primary text-center py-2">
                  Registros
                </a>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#about" className="text-white hover:text-primary transition-colors">
              Mi historia
            </a>
            <a href="#promotions" className="text-white hover:text-primary transition-colors">
              Giletta Promotions
            </a>
            <a href="#records" className="text-white hover:text-primary transition-colors">
              Registros
            </a>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}