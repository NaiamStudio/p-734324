interface AboutProps {
  lang?: string;
}

export const About = ({ lang }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Bruno Giletta
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mb-12"></div>
          <p className="text-lg text-center leading-relaxed">
            {lang === 'en' ? 
              "I started..." :
              "Comencé ..."
            }
          </p>
        </div>
      </div>
    </section>
  )
}