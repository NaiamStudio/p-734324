import { SocialIcons } from "@/components/ui/social-icons"
import { useTheme } from "next-themes"

interface HeroProps {
  lang?: string;
}

export const Hero = ({ lang }: HeroProps) => {
  const { theme } = useTheme()
  
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-left md:bg-top"
        style={{
          backgroundImage: 'url("/lovable-uploads/hero-image.jpg")',
          backgroundPosition: '30% center',
          backgroundPositionY: '15%',
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 font-['Bruno_Giletta'] italic text-white neon-effect">
              Bruno Giletta
            </h1>
            <style>
              {`
                .neon-effect {
                  text-shadow: 
                    0 0 2px #fff,
                    0 0 4px #fff,
                    0 0 6px #ff0000,
                    0 0 8px #ff0000,
                    0 0 10px #ff0000,
                    0 0 12px #ff0000,
                    0 0 14px #ff0000;
                }
              `}
            </style>
            <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-white neon-effect-soft blur-effect">
              {lang === 'en' ? 'Businessman, promoter\nand boxing manager' : 'Empresario, promotor\ny manager de boxeo'}
            </h2>
            <style>
              {`
                .neon-effect-soft {
                  text-shadow: 
                    0 0 1px #fff,
                    0 0 2px #fff,
                    0 0 6px rgba(255, 255, 255, 0.1),
                    0 0 8px rgba(255, 255, 255, 0.1),
                    0 0 10px rgba(255, 255, 255, 0.1);
                }
                .blur-effect {
                  position: relative;
                }
                .blur-effect::before {
                  content: attr(data-text);
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  color: inherit;
                  filter: blur(4px);
                  z-index: -1;
                }
              `}
            </style>
            <p className="text-base md:text-lg mb-8 md:mb-12 text-white max-w-lg blur-effect-left" data-text={lang === 'en' ? 'From training to the most important fights, I am here to support those who dream big.' : 'Desde el entrenamiento hasta las peleas más importantes, estoy acá para apoyar a quienes sueñan en grande.'}>
              {lang === 'en' ? 'From training to the most important fights, I am here to support those who dream big.' : 'Desde el entrenamiento hasta las peleas más importantes, estoy acá para apoyar a quienes sueñan en grande.'}
            </p>
            <style>
              {`
                .blur-effect-left {
                  position: relative;
                  max-width: 70%;
                }
                .blur-effect-left::before {
                  content: attr(data-text);
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  color: inherit;
                  filter: blur(1px);
                  z-index: -1;
                }
              `}
            </style>
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-white shadow-text relative inline-block">
                <span className="relative z-10">{lang === 'en' ? 'Find me on' : 'Encuéntrame en'}</span>
                <span className="absolute inset-0 bg-black opacity-70 blur-sm z-0"></span>
                </h3>
              <SocialIcons className="gap-6" />
            </div>
        </div>
      </div>
    </section>
  )
}