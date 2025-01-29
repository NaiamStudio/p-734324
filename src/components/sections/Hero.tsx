import { SocialIcons } from "@/components/ui/social-icons"
import { useTheme } from "next-themes"

export const Hero = () => {
  const { theme } = useTheme()
  
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          backgroundImage: theme === 'dark' 
            ? 'url("/lovable-uploads/a92a9599-5fb0-4fbf-b772-4df5ab5863bc.png")'
            : 'url("/lovable-uploads/248077f2-29f0-4a1a-96cd-64ecf6d47b05.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Bruno_Giletta'] italic text-gradient neon-white">
            Bruno Giletta
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light dark:text-white text-gray-800">
            Empresario, promotor<br />y manager de boxeo
          </h2>
          <p className="text-lg mb-12 dark:text-gray-300 text-gray-700 max-w-lg">
            Desde el entrenamiento hasta las peleas más importantes, estoy
            acá para apoyar a quienes sueñan en grande.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium dark:text-white text-gray-800">Encuéntrame en</h3>
            <SocialIcons className="gap-6" />
          </div>
        </div>
      </div>
    </section>
  )
}