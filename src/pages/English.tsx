import { useTheme } from "next-themes"
import { SocialIcons } from "@/components/ui/social-icons"
import { 
  Sheet,
  SheetContent,
  SheetTrigger 
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Promotions } from "@/components/sections/Promotions"
import { Records } from "@/components/sections/Records"
import { Footer } from "@/components/sections/Footer"
import { Navigation } from "@/components/sections/Navigation"

const English = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <EnglishHero />
        <EnglishAbout />
        <Promotions />
        <Records />
      </main>
      <Footer />
      <EnglishNavigation />
    </div>
  )
}

export default English

// English versions of components
const EnglishHero = () => {
  const { theme } = useTheme()
  
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          backgroundImage: 'url("/lovable-uploads/64b0ef81-c1e5-4ecf-b641-ae0b44a1b022.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className={theme === 'dark' ? 'hero-overlay' : 'hero-overlay-light'} />

      <div className="container max-w-6xl mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className={`text-6xl md:text-7xl font-bold mb-6 font-['Bruno_Giletta'] italic ${theme === 'dark' ? 'text-gradient neon-white' : 'text-gray-800 neon-blue'}`}>
            Bruno Giletta
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light dark:text-white text-gray-800">
            Businessman, promoter<br />and boxing manager
          </h2>
          <p className="text-lg mb-12 dark:text-gray-300 text-gray-700 max-w-lg">
            From training to the most important fights, I'm here
            to support those who dream big.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium dark:text-white text-gray-800">Find me on</h3>
            <SocialIcons className="gap-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

const EnglishAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Bruno Giletta
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>
          <p className="text-lg text-center leading-relaxed">
            "I started..."
          </p>
        </div>
      </div>
    </section>
  )
}

const EnglishNavigation = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-sm bg-white/10 dark:bg-black/20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-800 dark:text-white neon-blue">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] dark:bg-black/95 bg-white/95">
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="dark:text-white text-gray-800 hover:text-primary text-center py-2 neon-blue">
                  Home
                </a>
                <a href="#about" className="dark:text-white text-gray-800 hover:text-primary text-center py-2 neon-blue">
                  My Story
                </a>
                <a href="#promotions" className="dark:text-white text-gray-800 hover:text-primary text-center py-2 neon-blue">
                  Giletta Promotions
                </a>
                <a href="#records" className="dark:text-white text-gray-800 hover:text-primary text-center py-2 neon-blue">
                  Records
                </a>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="dark:text-white text-gray-800 hover:text-primary transition-colors neon-blue">
              Home
            </a>
            <a href="#about" className="dark:text-white text-gray-800 hover:text-primary transition-colors neon-blue">
              My Story
            </a>
            <a href="#promotions" className="dark:text-white text-gray-800 hover:text-primary transition-colors neon-blue">
              Giletta Promotions
            </a>
            <a href="#records" className="dark:text-white text-gray-800 hover:text-primary transition-colors neon-blue">
              Records
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="dark:text-white text-gray-800 neon-white"
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