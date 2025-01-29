import { Avatar } from "@/components/ui/avatar"
import { SocialIcons } from "@/components/ui/social-icons"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Bruno_Giletta'] italic">
              Bruno Giletta
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Empresario, promotor<br />y manager de boxeo
            </h2>
            <p className="text-lg mb-8 max-w-lg text-gray-400">
              Desde el entrenamiento hasta las peleas más importantes, estoy
              acá para apoyar a quienes sueñan en grande.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Encuéntrame en</h3>
              <SocialIcons />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img
              src="/lovable-uploads/34eae839-d921-4a04-b12a-d3d7ee764592.png"
              alt="Bruno Giletta"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};