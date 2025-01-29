import { SocialIcons } from "@/components/ui/social-icons"
import { useTheme } from "next-themes"

export const Hero = () => {
  const { theme } = useTheme()
  
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-left md:bg-top"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-image.jpg")',
          backgroundPosition: '30% center',
          backgroundPositionY: '15%', // Adjust the vertical position
        }}
      />
      
      {/* Theme-based Diagonal Overlay */}
      <div 
        className={`absolute inset-0 z-10 ${
          theme === 'dark' 
            ? 'bg-black' 
            : 'bg-white'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 0)'
        }}
      />

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-20">
        <div className="max-w-2xl mt-[-20%] md:mt-0 md:pl-0 pl-[10%]">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 md:mb-6 font-['Bruno_Giletta'] italic text-white neon-effect`}>
                Bruno Giletta
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-white">
                Empresario, promotor<br />y manager de boxeo
            </h2>
            <p className="text-base md:text-lg mb-8 md:mb-12 text-white max-w-lg">
                Desde el entrenamiento hasta las peleas más importantes, estoy
                acá para apoyar a quienes sueñan en grande.
            </p>
            
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Encuéntrame en</h3>
                <SocialIcons className="gap-6" />
            </div>
        </div>
      </div>
    </section>
  )
}
