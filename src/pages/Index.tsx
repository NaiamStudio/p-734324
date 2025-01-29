import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Promotions } from "@/components/sections/Promotions"
import { Images } from "@/components/sections/Images"
import { Footer } from "@/components/sections/Footer"
import { Navigation } from "@/components/sections/Navigation"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <About />
        <Promotions />
        <Images />
      </main>
      <Footer />
      <Navigation />
    </div>
  )
}

export default Index