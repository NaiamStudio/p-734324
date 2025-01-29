import { SocialIcons } from "@/components/ui/social-icons"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/lovable-uploads/2d64502b-71cf-447b-bb75-a2ee478ffdb4.png")',
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 font-['Bruno_Giletta'] italic text-gradient">
            Bruno Giletta
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-light">
            Empresario, promotor<br />y manager de boxeo
          </h2>
          <p className="text-lg mb-12 text-gray-300 max-w-lg">
            Desde el entrenamiento hasta las peleas más importantes, estoy
            acá para apoyar a quienes sueñan en grande.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Encuéntrame en</h3>
            <SocialIcons className="gap-6" />
          </div>
        </div>
      </div>
    </section>
  )
}