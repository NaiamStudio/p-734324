import { Avatar } from "@/components/ui/avatar"
import { SocialIcons } from "@/components/ui/social-icons"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Avatar className="w-64 h-64 mx-auto md:mx-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/47df8d634a8644c0a44fc35fc727734b/83045daf8888570a51c472c24aa180883c6150a6811b425b3de08e94b5f01fa8?placeholderIfAbsent=true"
                alt="Bruno Giletta"
                className="aspect-square object-cover"
              />
            </Avatar>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bruno Giletta
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Empresario, promotor<br />y manager de boxeo
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Desde el entrenamiento hasta las peleas más importantes, estoy
              acá para apoyar a quienes sueñan en grande.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Encuéntrame en</h3>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}