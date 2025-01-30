import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Promotions } from "@/components/sections/Promotions"
import { Images } from "@/components/sections/Images"
import { Footer } from "@/components/sections/Footer"
import { Navigation } from "@/components/sections/Navigation"

const English = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero lang="en" />
        <Promotions lang="en" />
        <About lang="en" />
        <Images lang="en" />
      </main>
      <Footer lang="en" />
      <Navigation lang="en" />
    </div>
  )
}

export default English