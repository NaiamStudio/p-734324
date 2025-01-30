export const Images = () => {
  const images = Array.from({ length: 6 }, (_, i) => `public/lovable-uploads/${i + 1}.png`);

  return (
    <section id="images" className="py-20 bg-background text-foreground">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Imágenes
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div key={i} className="aspect-square">
              <img
                src={image}
                alt={`Images ${i + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}